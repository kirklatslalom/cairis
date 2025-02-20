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
from .ARM import UnknownParameterClass
from .Asset import Asset
from .Attacker import Attacker
from .ClassAssociation import ClassAssociation
from .Code import Code
from .Component import Component
from .ComponentView import ComponentView
from .ConceptReference import ConceptReference
from .Countermeasure import Countermeasure
from .DataFlow import DataFlow
from .Dependency import Dependency
from .DocumentReference import DocumentReference
from .DomainProperty import DomainProperty
from .DotTrace import DotTrace
from .Environment import Environment
from .ExternalDocument import ExternalDocument
from .Goal import Goal
from .GoalAssociation import GoalAssociation
from .ImpliedProcess import ImpliedProcess
from .InternalDocument import InternalDocument
from .Locations import Locations
from .Memo import Memo
from .MisuseCase import MisuseCase
from .Obstacle import Obstacle
from .Persona import Persona
from .PersonaCharacteristic import PersonaCharacteristic
from .Response import Response
from .Risk import Risk
from .Role import Role
from .SecurityPattern import SecurityPattern
from .Task import Task
from .TaskCharacteristic import TaskCharacteristic
from .TemplateAsset import TemplateAsset
from .TemplateGoal import TemplateGoal
from .TemplateRequirement import TemplateRequirement
from .Threat import Threat
from .UseCase import UseCase
from .ValueType import ValueType
from .Vulnerability import Vulnerability

__author__ = "Shamal Faily"


def build(objtId, p):
    if p.__class__.__name__ == "AttackerParameters":
        return Attacker(
            objtId,
            p.name(),
            p.description(),
            p.image(),
            p.tags(),
            p.environmentProperties(),
        )
    if p.__class__.__name__ == "PersonaParameters":
        return Persona(
            objtId,
            p.name(),
            p.activities(),
            p.attitudes(),
            p.aptitudes(),
            p.motivations(),
            p.skills(),
            p.intrinsic(),
            p.contextual(),
            p.image(),
            p.assumption(),
            p.type(),
            p.tags(),
            p.environmentProperties(),
            p.codes(),
        )
    if p.__class__.__name__ == "AssetParameters":
        return Asset(
            objtId,
            p.name(),
            p.shortCode(),
            p.description(),
            p.significance(),
            p.type(),
            p.critical(),
            p.criticalRationale(),
            p.tags(),
            p.interfaces(),
            p.environmentProperties(),
        )
    if p.__class__.__name__ == "TemplateAssetParameters":
        return TemplateAsset(
            objtId,
            p.name(),
            p.shortCode(),
            p.description(),
            p.significance(),
            p.type(),
            p.surfaceType(),
            p.accessRight(),
            p.properties(),
            p.rationale(),
            p.tags(),
            p.interfaces(),
        )
    if p.__class__.__name__ == "TemplateRequirementParameters":
        return TemplateRequirement(
            objtId,
            p.name(),
            p.asset(),
            p.type(),
            p.description(),
            p.rationale(),
            p.fitCriterion(),
        )
    if p.__class__.__name__ == "TemplateGoalParameters":
        return TemplateGoal(
            objtId,
            p.name(),
            p.definition(),
            p.rationale(),
            p.concerns(),
            p.responsibilities(),
        )
    if p.__class__.__name__ == "SecurityPatternParameters":
        return SecurityPattern(
            objtId,
            p.name(),
            p.context(),
            p.problem(),
            p.solution(),
            p.requirements(),
            p.associations(),
        )
    if p.__class__.__name__ == "ComponentParameters":
        return Component(
            objtId,
            p.name(),
            p.description(),
            p.interfaces(),
            p.structure(),
            p.requirements(),
            p.goals(),
            p.associations(),
        )
    if p.__class__.__name__ == "ComponentViewParameters":
        return ComponentView(
            objtId,
            p.name(),
            p.synopsis(),
            p.components(),
            p.connectors(),
            p.attackSurfaceMetric(),
        )
    if p.__class__.__name__ == "ValueTypeParameters":
        return ValueType(
            objtId,
            p.name(),
            p.description(),
            p.type(),
            p.environment(),
            p.score(),
            p.rationale(),
        )
    if p.__class__.__name__ == "ClassAssociationParameters":
        return ClassAssociation(
            objtId,
            p.environment(),
            p.headAsset(),
            p.headDimension(),
            p.headNavigation(),
            p.headType(),
            p.headMultiplicity(),
            p.headRole(),
            p.tailRole(),
            p.tailMultiplicity(),
            p.tailType(),
            p.tailNavigation(),
            p.tailDimension(),
            p.tailAsset(),
            p.rationale(),
        )
    if p.__class__.__name__ == "GoalAssociationParameters":
        return GoalAssociation(
            objtId,
            p.environment(),
            p.goal(),
            p.goalDimension(),
            p.type(),
            p.subGoal(),
            p.subGoalDimension(),
            p.alternative(),
            p.rationale(),
        )
    if p.__class__.__name__ == "DependencyParameters":
        return Dependency(
            objtId,
            p.environment(),
            p.depender(),
            p.dependee(),
            p.dependencyType(),
            p.dependency(),
            p.rationale(),
        )
    if p.__class__.__name__ == "GoalParameters":
        return Goal(
            objtId, p.name(), p.originator(), p.tags(), p.environmentProperties()
        )
    if p.__class__.__name__ == "ObstacleParameters":
        return Obstacle(
            objtId, p.name(), p.originator(), p.tags(), p.environmentProperties()
        )
    if p.__class__.__name__ == "DomainPropertyParameters":
        return DomainProperty(
            objtId, p.name(), p.description(), p.type(), p.originator(), p.tags()
        )
    if p.__class__.__name__ == "ThreatParameters":
        return Threat(
            objtId, p.name(), p.type(), p.method(), p.tags(), p.environmentProperties()
        )
    if p.__class__.__name__ == "VulnerabilityParameters":
        return Vulnerability(
            objtId,
            p.name(),
            p.description(),
            p.type(),
            p.tags(),
            p.environmentProperties(),
        )
    if p.__class__.__name__ == "RiskParameters":
        return Risk(
            objtId, p.name(), p.threat(), p.vulnerability(), p.tags(), p.misuseCase()
        )
    if p.__class__.__name__ == "ResponseParameters":
        return Response(
            objtId,
            p.name(),
            p.risk(),
            p.tags(),
            p.environmentProperties(),
            p.responseType(),
        )
    if p.__class__.__name__ == "CountermeasureParameters":
        return Countermeasure(
            objtId,
            p.name(),
            p.description(),
            p.type(),
            p.tags(),
            p.environmentProperties(),
        )
    if p.__class__.__name__ == "TaskParameters":
        return Task(
            objtId,
            p.name(),
            p.shortCode(),
            p.objective(),
            p.assumption(),
            p.author(),
            p.tags(),
            p.environmentProperties(),
        )
    if p.__class__.__name__ == "UseCaseParameters":
        return UseCase(
            objtId,
            p.name(),
            p.author(),
            p.code(),
            p.actors(),
            p.description(),
            p.tags(),
            p.environmentProperties(),
        )
    if p.__class__.__name__ == "MisuseCaseParameters":
        return MisuseCase(objtId, p.name(), p.environmentProperties(), p.risk())
    if p.__class__.__name__ == "DotTraceParameters":
        return DotTrace(p.fromObject(), p.fromName(), p.toObject(), p.toName())
    if p.__class__.__name__ == "EnvironmentParameters":
        return Environment(
            objtId,
            p.name(),
            p.shortCode(),
            p.description(),
            p.environments(),
            p.duplicateProperty(),
            p.overridingEnvironment(),
            p.tensions(),
        )
    if p.__class__.__name__ == "RoleParameters":
        return Role(
            objtId,
            p.name(),
            p.type(),
            p.shortCode(),
            p.description(),
            p.environmentProperties(),
        )
    if p.__class__.__name__ == "ExternalDocumentParameters":
        return ExternalDocument(
            objtId, p.name(), p.version(), p.date(), p.authors(), p.description()
        )
    if p.__class__.__name__ == "InternalDocumentParameters":
        return InternalDocument(
            objtId, p.name(), p.description(), p.content(), p.codes(), p.memos()
        )
    if p.__class__.__name__ == "CodeParameters":
        return Code(
            objtId,
            p.name(),
            p.type(),
            p.description(),
            p.inclusionCriteria(),
            p.example(),
        )
    if p.__class__.__name__ == "MemoParameters":
        return Memo(objtId, p.name(), p.description())
    if p.__class__.__name__ == "DocumentReferenceParameters":
        return DocumentReference(
            objtId, p.name(), p.document(), p.contributor(), p.description()
        )
    if p.__class__.__name__ == "ConceptReferenceParameters":
        return ConceptReference(
            objtId, p.name(), p.dimension(), p.objectName(), p.description()
        )
    if p.__class__.__name__ == "PersonaCharacteristicParameters":
        return PersonaCharacteristic(
            objtId,
            p.persona(),
            p.qualifier(),
            p.behaviouralVariable(),
            p.characteristic(),
            p.grounds(),
            p.warrant(),
            p.backing(),
            p.rebuttal(),
        )
    if p.__class__.__name__ == "TaskCharacteristicParameters":
        return TaskCharacteristic(
            objtId,
            p.task(),
            p.qualifier(),
            p.characteristic(),
            p.grounds(),
            p.warrant(),
            p.backing(),
            p.rebuttal(),
        )
    if p.__class__.__name__ == "ImpliedProcessParameters":
        return ImpliedProcess(
            objtId,
            p.name(),
            p.description(),
            p.persona(),
            p.network(),
            p.specification(),
            p.channels(),
        )
    if p.__class__.__name__ == "LocationsParameters":
        return Locations(objtId, p.name(), p.diagram(), p.locations(), p.links())
    if p.__class__.__name__ == "DataFlowParameters":
        return DataFlow(
            p.name(),
            p.type(),
            p.environment(),
            p.fromName(),
            p.fromType(),
            p.toName(),
            p.toType(),
            p.assets(),
            p.obstacles(),
            p.tags(),
        )
    else:
        raise UnknownParameterClass(str(objtId))
