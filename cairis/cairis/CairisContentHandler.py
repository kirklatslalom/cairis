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

import os
from xml.sax.handler import ContentHandler,EntityResolver
from EnvironmentParameters import EnvironmentParameters
from ValueTypeParameters import ValueTypeParameters
from Borg import Borg

class CairisContentHandler(ContentHandler,EntityResolver):
  def __init__(self):
    b = Borg()
    self.configDir = b.configDir
    self.theProjectSettings = None
    self.theEnvironments = []

    self.initialiseProjectSettingsAttributes()
    self.resetEnvironmentAttributes()
    self.resetAssetValues()

  def resolveEntity(self,publicId,systemId):
    return self.configDir + '/cairis.dtd'

  def settings(self):
    return self.theProjectSettings

  def environments(self):
    return self.theEnvironments

  def initialiseProjectSettingsAttributes(self):
    self.theName = ''
    self.inBackground = 0
    self.inStrategicGoals = 0
    self.inScope = 0
    self.inDefinition = 0
    self.inRemarks = 0
    self.theBackground = ''
    self.theStrategicGoals = ''
    self.theRichPicture = ''
    self.theScope = ''
    self.theNamingConventions = []
    self.theContributors = []
    self.theRevisions = []
    self.theCurrentNameEntry = ''
    self.theCurrentRevNo = 0
    self.theCurrentRevDate = 0
    self.theDefinition = ''
    self.theRemarks = ''

  def resetEnvironmentAttributes(self):
    self.theName = ''
    self.theShortCode = '' 
    self.inDefinition = 0
    self.theDefinition = ''
    self.theDuplicateProperty = ''
    self.theOverridingEnvironment = ''
    self.theCompositeEnvironments = []
    self.theAssetValues = []

  def resetAssetValues(self):
    self.inNone = 0
    self.inLow = 0
    self.inMed = 0
    self.inHigh = 0
    self.theNoneValue = 'None'
    self.theLowValue = 'None'
    self.theMedValue = 'None'
    self.theHighValue = 'None'

  def startElement(self,name,attrs):
    self.currentElementName = name
    if name == 'project_settings':
      self.theName = attrs['name']
    elif name == 'rich_picture':
      self.theRichPicture = attrs['image']
      if self.theRichPicture != "" and os.path.isfile(self.theImage) == False:
        b = Borg()
        self.theRichPicture = b.imageDir + "/" + self.theRichPicture
    elif name == 'entry':
      self.theCurrentNameEntry = attrs['name']
    elif name == 'contributor':
      self.theContributors.append((attrs['first_name'],attrs['surname'],attrs['affiliation'],attrs['role']))
    elif name == 'revision':
      self.theCurrentRevNo = attrs['number']
      self.theCurrentRevDate = attrs['date']
    elif name == 'environment':
      self.theName = attrs['name']
      self.theShortCode = attrs['short_code']
    elif name == 'composite_properties':
      self.theDuplicateProperty = attrs['duplication']
      if (self.theDuplicateProperty == 'Override'):
        self.theOverridingEnvironment = attrs['overriding_environment']
    elif name == 'sub_environment':
      self.theCompositeEnvironments.append(attrs['name'])
    elif name == 'background':
      self.inBackground = 1
      self.theBackground = ''
    elif name == 'strategic_goals':
      self.inStrategicGoals = 1
      self.theStrategicGoals = ''
    elif name == 'scope':
      self.inScope = 1
      self.theScope = ''
    elif name == 'definition':
      self.inDefinition = 1
      self.theDefinition = ''
    elif name == 'remarks':
      self.inRemarks = 1
      self.theRemarks = ''
    elif name == 'none':
      self.inNone = 1
      self.theNoneValue = ''
    elif name == 'low':
      self.inLow = 1
      self.theLowValue = ''
    elif name == 'medium':
      self.inMed = 1
      self.theMedValue = ''
    elif name == 'high':
      self.inHigh = 1
      self.theHighValue = ''

  def characters(self,data):
    if self.inBackground:
      self.theBackground += data
    elif self.inStrategicGoals:
      self.theStrategicGoals += data
    elif self.inScope:
      self.theScope += data
    elif self.inDefinition:
      self.theDefinition += data
    elif self.inRemarks:
      self.theRemarks += data
    elif self.inNone:
      self.theNoneValue += data
    elif self.inLow:
      self.theLowValue += data
    elif self.inMed:
      self.theMedValue += data
    elif self.inHigh:
      self.theHighValue += data

  def endElement(self,name):
    if name == 'entry':
      self.theNamingConventions.append((self.theCurrentNameEntry,self.theDefinition))
    elif name == 'revision':
      self.theRevisions.append((self.theCurrentRevNo,self.theCurrentRevDate,self.theRemarks))
    elif name == 'project_settings':
      self.theProjectSettings = (self.theName,self.theBackground,self.theStrategicGoals,self.theScope,self.theNamingConventions,self.theContributors,self.theRevisions,self.theRichPicture)
    elif name == 'asset_values':
      nv = ValueTypeParameters('None',self.theNoneValue,'asset_value',self.theName)
      nv.setId(0)
      self.theAssetValues.append(nv)

      lv = ValueTypeParameters('Low',self.theLowValue,'asset_value',self.theName)
      lv.setId(1)
      self.theAssetValues.append(lv)

      mv = ValueTypeParameters('Medium',self.theMedValue,'asset_value',self.theName)
      mv.setId(2)
      self.theAssetValues.append(mv)

      hv = ValueTypeParameters('High',self.theHighValue,'asset_value',self.theName)
      hv.setId(3)
      self.theAssetValues.append(hv)

      self.resetAssetValues()
    elif name == 'environment':
      p = EnvironmentParameters(self.theName,self.theShortCode,self.theDefinition,self.theCompositeEnvironments,self.theDuplicateProperty,self.theOverridingEnvironment)
      p.setAssetValues(self.theAssetValues)
      self.theEnvironments.append(p)
      self.resetEnvironmentAttributes()
    elif name == 'background':
      self.inBackground = 0
    elif name == 'strategic_goals':
      self.inStrategicGoals = 0
    elif name == 'scope':
      self.inScope = 0
    elif name == 'definition':
      self.inDefinition = 0
    elif name == 'remarks':
      self.inRemarks = 0
    elif name == 'none':
      self.inNone = 0
    elif name == 'low':
      self.inLow = 0
    elif name == 'medium':
      self.inMed = 0
    elif name == 'high':
      self.inHigh = 0
