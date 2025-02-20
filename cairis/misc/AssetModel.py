# -*- coding: utf-8 -*-
#  Licensed to the Apache Software Foundation (ASF) under one
#  or more contributor license agreements.  See the NOTICE file
#  distributed with this work for additional information
#  regarding copyright ownership.  The ASF licenses this file
#  to you under the Apache License, Version 2.0 (the
#  "License"); you may not use this file except in compliance
#  with the License.  You may obtain a copy of the License at
#
#  http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing,
#  software distributed under the License is distributed on an
#  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
#  KIND, either express or implied.  See the License for the
#  specific language governing permissions and limitations
#  under the License.


from cairis.core.Borg import Borg
import pydot
from cairis.core.colourcodes import surfaceTypeColourCode, surfaceTypeTextColourCode
from cairis.core.colourcodes import (
    vulnerabilitySeverityColourCode,
    vulnerabilitySeverityTextColourCode,
)
import os

__author__ = "Shamal Faily, Robin Quetin"


class AssetModel:
    def __init__(
        self,
        associations,
        envName="",
        assetName="",
        hideConcerns=False,
        graphName="asset.dot",
        db_proxy=None,
        fontName=None,
        fontSize=None,
        isComponentAssetModel=False,
    ):
        self.theAssociations = associations
        self.theEnvironmentName = envName
        self.theAssetName = assetName
        self.isComponentAssetModel = isComponentAssetModel
        b = Borg()
        self.dbProxy = db_proxy
        self.fontName = fontName
        self.fontSize = fontSize

        if db_proxy is None:
            self.dbProxy = b.dbProxy

        if fontName is None or fontSize is None:
            self.fontName = b.fontName
            self.fontSize = b.fontSize

        self.theGraph = pydot.Dot()
        self.hideConcerns = hideConcerns
        self.nodeList = set([])
        self.theGraphName = os.path.join(b.tmpDir, graphName)

    def size(self):
        return len(self.theAssociations)

    def buildNode(self, dimName, objtName):
        objtUrl = dimName + "#" + objtName
        if dimName == "persona":
            objt = self.dbProxy.dimensionObject(objtName, "persona")
            b = Borg()
            actorFile = b.assetDir + "/modelActor.png"
            if objt.assumption() == True:
                objtLabel = "&lt;&lt;Assumption&gt;&gt;" + objtName
                self.theGraph.add_node(
                    pydot.Node(
                        objtName,
                        label="",
                        xlabel=objtLabel,
                        shapefile=actorFile,
                        fontname=self.fontName,
                        fontsize=self.fontSize,
                        URL=objtUrl,
                        peripheries="0",
                    )
                )
            else:
                self.theGraph.add_node(
                    pydot.Node(
                        objtName,
                        label="",
                        xlabel=objtName,
                        shapefile=actorFile,
                        fontname=self.fontName,
                        fontsize=self.fontSize,
                        URL=objtUrl,
                        peripheries="0",
                    )
                )
        elif dimName == "goalconcern" or dimName == "taskconcern":
            self.theGraph.add_node(
                pydot.Node(
                    objtName,
                    shape="note",
                    margin=0,
                    fontname=self.fontName,
                    fontsize=self.fontSize,
                    fontcolor="blue",
                    color="blue",
                    URL=objtUrl,
                )
            )
        elif dimName == "obstacleconcern":
            self.theGraph.add_node(
                pydot.Node(
                    objtName,
                    shape="note",
                    margin=0,
                    fontname=self.fontName,
                    fontsize=self.fontSize,
                    fontcolor="red",
                    color="red",
                    URL=objtUrl,
                )
            )
        else:
            assetObjt = self.dbProxy.dimensionObject(objtName, dimName)
            borderColour = "black"
            if dimName == "asset" and assetObjt.critical():
                borderColour = "red"
            if dimName == "template_asset" and self.isComponentAssetModel:
                stValue, arValue = self.dbProxy.templateAssetMetrics(objtName)
                assetNode = pydot.Node(
                    objtName,
                    shape="record",
                    style="filled",
                    margin=0,
                    fillcolor=surfaceTypeColourCode(round(stValue / arValue)),
                    fontcolor=surfaceTypeTextColourCode(round(stValue / arValue)),
                    fontname=self.fontName,
                    fontsize=self.fontSize,
                    URL=objtUrl,
                )
            else:
                asMetric = self.dbProxy.assetAttackSurface(
                    objtName, self.theEnvironmentName
                )
                assetNode = pydot.Node(
                    objtName,
                    shape="record",
                    style="filled",
                    margin=0,
                    colorscheme="orrd4",
                    color="black",
                    fillcolor=vulnerabilitySeverityColourCode(asMetric),
                    fontcolor=vulnerabilitySeverityTextColourCode(asMetric),
                    fontname=self.fontName,
                    fontsize=self.fontSize,
                    URL=objtUrl,
                )
            #        assetNode = pydot.Node(objtName,shape='record',margin=0,color=borderColour,fontname=self.fontName,fontsize=self.fontSize,URL=objtUrl)
            self.theGraph.add_node(assetNode)
        self.nodeList.add(objtName)

    def layout(self, renderer="dot"):
        self.theGraph.write_xdot(self.theGraphName, prog=renderer)
        return open(self.theGraphName).read()

    def arrowType(self, headDim, asType, navType):
        if asType == "Inheritance":
            arrowHead = "empty"
        elif asType == "Composition":
            arrowHead = "diamond"
        elif asType == "Aggregation":
            arrowHead = "ediamond"
        elif asType == "Dependency":
            arrowHead = "vee"
        elif headDim == "persona":
            arrowHead = "none"
        else:
            arrowHead = "none"
            if navType == 1:
                arrowHead = "vee"
            elif navType == -1:
                arrowHead = "crowvee"
        return arrowHead

    def graph(self):
        assets = []
        if self.theAssetName == "" and self.theEnvironmentName != "":
            assets = self.dbProxy.classModelElements(
                self.theEnvironmentName, self.hideConcerns
            )
        if len(assets) == 0 and self.theEnvironmentName == "":
            self.theAssetName = "Component"
        self.nodeList = set([])
        for asset in assets:
            self.buildNode(asset[0], asset[1])

        edgeList = set([])
        fontSize = "7.5"
        for association in self.theAssociations:
            headName = association.headAsset()
            headDim = association.headDimension()
            tailName = association.tailAsset()
            tailDim = association.tailDimension()

            headObjt = headName
            tailObjt = tailName
            if self.theAssetName != "" and headName not in self.nodeList:
                self.buildNode(headDim, headName)
                self.nodeList.add(headName)
            if self.theAssetName != "" and tailName not in self.nodeList:
                self.buildNode(tailDim, tailName)
                self.nodeList.add(tailName)

            if ((headName, tailName) not in edgeList) and (
                (tailName, headName) not in edgeList
            ):
                headType = association.headType()
                headMultiplicity = association.headMultiplicity()
                headRole = association.headRole()
                tailRole = association.tailRole()
                tailMultiplicity = association.tailMultiplicity()
                tailType = association.tailType()
                headNav = association.headNavigation()
                tailNav = association.tailNavigation()
                aHead = self.arrowType(headDim, headType, headNav)
                aTail = self.arrowType(headDim, tailType, tailNav)
                hLabel = headMultiplicity + "  " + headRole
                tLabel = tailMultiplicity + "  " + tailRole
                fontColour = "black"
                edgeColour = "black"

                edgeStyle = "solid"
                edgeLabel = ""
                if (aHead == "empty") or (aTail == "empty"):
                    hLabel = ""
                    tLabel = ""
                if headType == "Dependency":
                    edgeLabel = "&lt;&lt;safeguards&gt;&gt;"
                    hLabel = ""
                    tLabel = ""
                    edgeStyle = "dashed"
                elif tailType == "Dependency":
                    edgeLabel = "&lt;&lt;safeguards&gt;&gt;"
                    hLabel = ""
                    tLabel = ""
                    edgeStyle = "dashed"

                if headDim == "persona":
                    hLabel = ""
                    tLabel = ""
                if headDim == "goalconcern" or headDim == "taskconcern":
                    hLabel = ""
                    tLabel = ""
                    fontColour = "blue"
                    edgeColour = "blue"

                if headDim == "obstacleconcern":
                    hLabel = ""
                    tLabel = ""
                    fontColour = "red"
                    edgeColour = "red"

                assocRationale = association.rationale()
                if assocRationale != "":
                    objtUrl = "comment#" + assocRationale
                    if assocRationale not in self.nodeList:
                        self.theGraph.add_node(
                            pydot.Node(
                                assocRationale,
                                shape="note",
                                margin=0,
                                fontsize=fontSize,
                                fontcolor="blue",
                                color="blue",
                                URL=objtUrl,
                            )
                        )
                    if ((assocRationale, headName) not in edgeList) and (
                        headDim
                        not in [
                            "goalconcern",
                            "obstacleconcern",
                            "taskconcern",
                            "usecaseconcern",
                        ]
                    ):
                        edge1 = pydot.Edge(
                            assocRationale,
                            headObjt,
                            dir="none",
                            fontsize=fontSize,
                            color="blue",
                            URL=objtUrl,
                        )
                        self.theGraph.add_edge(edge1)
                        edgeList.add((assocRationale, headName))
                    if ((assocRationale, tailName) not in edgeList) and (
                        headDim
                        not in [
                            "goalconcern",
                            "obstacleconcern",
                            "taskconcern",
                            "usecaseconcern",
                        ]
                    ):
                        edge2 = pydot.Edge(
                            assocRationale,
                            tailObjt,
                            dir="none",
                            fontsize=fontSize,
                            color="blue",
                            URL=objtUrl,
                        )
                        self.theGraph.add_edge(edge2)
                        edgeList.add((assocRationale, tailName))

                edgeLabel, hLabel, tLabel = self.filterBlankStrings(
                    edgeLabel, hLabel, tLabel
                )

                if (
                    headDim == "goalconcern"
                    or headDim == "obstacleconcern"
                    or headDim == "taskconcern"
                ):
                    objtUrl = headDim + "#" + headName
                    edge = pydot.Edge(
                        headObjt,
                        tailObjt,
                        label=edgeLabel,
                        headlabel=hLabel,
                        taillabel=tLabel,
                        arrowhead=aHead,
                        arrowtail=aTail,
                        style=edgeStyle,
                        dir="both",
                        fontcolor=fontColour,
                        color=edgeColour,
                        fontsize=fontSize,
                        URL=objtUrl,
                    )
                else:
                    # head and tail are visually different to head/tail in model terms, so switch the arrows and labels around
                    edge = pydot.Edge(
                        headObjt,
                        tailObjt,
                        label=edgeLabel,
                        headlabel=tLabel,
                        taillabel=hLabel,
                        arrowhead=aTail,
                        arrowtail=aHead,
                        style=edgeStyle,
                        dir="both",
                        fontcolor=fontColour,
                        color=edgeColour,
                        fontsize=fontSize,
                    )
                self.theGraph.add_edge(edge)
                edgeList.add((headName, tailName))
        return self.layout()

    def filterBlankStrings(self, edgeLabel, hLabel, tLabel):
        if edgeLabel == "":
            edgeLabel = " "

        if hLabel == "":
            hLabel = " "

        if tLabel == "":
            tLabel = " "

        return edgeLabel, hLabel, tLabel
