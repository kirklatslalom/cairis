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

__author__ = "Shamal Faily"


class Code:
    def __init__(self, codeId, codeName, cType, codeDesc, incCriteria, codeEg):
        self.theId = codeId
        self.theName = codeName
        self.theType = cType
        self.theDescription = codeDesc
        self.theInclusionCriteria = incCriteria
        self.theExample = codeEg

    def id(self):
        return self.theId

    def name(self):
        return self.theName

    def type(self):
        return self.theType

    def description(self):
        return self.theDescription

    def inclusionCriteria(self):
        return self.theInclusionCriteria

    def example(self):
        return self.theExample
