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

from .EnvironmentProperties import EnvironmentProperties

__author__ = "Shamal Faily"


class RoleEnvironmentProperties(EnvironmentProperties):
    def __init__(
        self, environmentName, responses, countermeasures, goals, requirements
    ):
        EnvironmentProperties.__init__(self, environmentName)
        self.theResponses = responses
        self.theCountermeasures = countermeasures
        self.theGoals = goals
        self.theRequirements = requirements

    def responses(self):
        return self.theResponses

    def countermeasures(self):
        return self.theCountermeasures

    def goals(self):
        return self.theGoals

    def requirements(self):
        return self.theRequirements
