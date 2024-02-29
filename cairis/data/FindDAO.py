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

from cairis.daemon.CairisHTTPError import ARMHTTPError
from cairis.data.CairisDAO import CairisDAO

__author__ = "Shamal Faily"

from cairis.cairis.core.ARM import ARMException


class FindDAO(CairisDAO):
    def __init__(self, session_id):
        CairisDAO.__init__(self, session_id)

    def get_objects(self, search_string):
        try:
            objts = self.db_proxy.searchModel(
                search_string,
                [
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                ],
            )
            new_props = []
            for objt in objts:
                new_props.append(
                    {
                        "theEnvironment": objt[0],
                        "theDimension": objt[1],
                        "theObject": objt[2],
                    }
                )
            return new_props
        except ARMException as ex:
            self.close()
            raise ARMHTTPError(ex)
