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

import unittest
import os
import json
from subprocess import call
import cairis.core.BorgFactory
from cairis.core.Borg import Borg
from cairis.core.InternalDocumentParameters import InternalDocumentParameters
import sys


class InternalDocumentTest(unittest.TestCase):
    def setUp(self):
        call([os.environ["CAIRIS_CFG_DIR"] + "/initdb.sh"])
        cairis.core.BorgFactory.initialise()
        f = open(os.environ["CAIRIS_SRC"] + "/test/processes.json")
        d = json.load(f)
        f.close()
        self.iIntDocs = d["internaldocuments"]

    def testAddUpdateInternalDocument(self):
        i = InternalDocumentParameters(
            self.iIntDocs[0]["theName"],
            self.iIntDocs[0]["theDescription"],
            self.iIntDocs[0]["theContent"],
            [],
            [],
        )
        b = Borg()
        b.dbProxy.addInternalDocument(i)
        oIds = b.dbProxy.getInternalDocuments()
        o = oIds[self.iIntDocs[0]["theName"]]
        self.assertEqual(i.name(), o.name())
        self.assertEqual(i.description(), o.description())
        self.assertEqual(i.content(), o.content())

        o.theDescription = "Updated description"
        b.dbProxy.updateInternalDocument(o)

        oIds2 = b.dbProxy.getInternalDocuments(o.id())
        o2 = oIds[self.iIntDocs[0]["theName"]]
        self.assertEqual(i.name(), o2.name())
        self.assertEqual("Updated description", o2.description())
        self.assertEqual(i.content(), o2.content())

        b.dbProxy.deleteInternalDocument(o.id())

    def tearDown(self):
        b = Borg()
        b.dbProxy.close()
        call([os.environ["CAIRIS_CFG_DIR"] + "/dropdb.sh"])


if __name__ == "__main__":
    unittest.main()
