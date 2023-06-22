import React, { useMemo, useState, useEffect } from 'react';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // theme
import 'primereact/resources/primereact.css';
import { TreeNode } from 'primereact/treenode';
import { TreeTable, TreeTableSelectionKeysType, TreeTableSelectionEvent, TreeTableExpandedKeysType } from 'primereact/treetable';
import { Column } from 'primereact/column';
import './dynamictreetable.scss';

const DynamicTreeTable = (props: any) => {

    const [selectedDivisions, setSelectedDivisions] = useState([]);

    //sample treedata with unique values
    const nodes = [
        {
            "key": "0000001b-000e-3000-80cf-59cdb2f0f832",
            "isChecked": false,
            "isPartiallyChecked": false,
            "parentID": null,
            "data": {
                "children": [
                    {
                        "children": [
                            {
                                "children": [
                                    {
                                        "children": [],
                                        "path": "/test/test sub/test123/test 123 child code",
                                        "divisionIdPath": "/0000001b-000e-3000-80cf-59cdb2f0f832/0000001c-000e-3000-80cf-59cdb2f0f832/0000001d-000e-3000-80cf-59cdb2f0f832/00000020-000e-3000-80cf-59cdb2f0f832",
                                        "divisionNamePath": "/test/test sub/test123/test 123 child",
                                        "name": "test 123 child code",
                                        "description": "test 123 child",
                                        "divisionId": "00000020-000e-3000-80cf-59cdb2f0f832",
                                        "organizationId": "c5133530-f739-440f-acc6-73d8fcc3f42d",
                                        "childCount": 0,
                                        "hasEditPermission": true
                                    },
                                    {
                                        "children": [],
                                        "path": "/test/test sub/test123/test 123 child code",
                                        "divisionIdPath": "/0000001b-000e-3000-80cf-59cdb2f0f832/0000001c-000e-3000-80cf-59cdb2f0f832/0000001d-000e-3000-80cf-59cdb2f0f832/00000020-000e-3000-80cf-59cdb2f0f832",
                                        "divisionNamePath": "/test/test sub/test123/test 123 child",
                                        "name": "test 123 child code 2",
                                        "description": "test 123 child 2",
                                        "divisionId": "00000020-000e-3000-80cf-59cdb2f0f833",
                                        "organizationId": "c5133530-f739-440f-acc6-73d8fcc3f42d",
                                        "childCount": 0,
                                        "hasEditPermission": true
                                    }
                                ],
                                "path": "/test/test sub/test123",
                                "divisionIdPath": "/0000001b-000e-3000-80cf-59cdb2f0f832/0000001c-000e-3000-80cf-59cdb2f0f832/0000001d-000e-3000-80cf-59cdb2f0f832",
                                "divisionNamePath": "/test/test sub/test123",
                                "name": "test123",
                                "description": "test123",
                                "divisionId": "0000001d-000e-3000-80cf-59cdb2f0f832",
                                "organizationId": "c5133530-f739-440f-acc6-73d8fcc3f42d",
                                "childCount": 1,
                                "hasEditPermission": true
                            }
                        ],
                        "path": "/test/test sub",
                        "divisionIdPath": "/0000001b-000e-3000-80cf-59cdb2f0f832/0000001c-000e-3000-80cf-59cdb2f0f832",
                        "divisionNamePath": "/test/test sub",
                        "name": "test sub",
                        "description": "test sub",
                        "divisionId": "0000001c-000e-3000-80cf-59cdb2f0f832",
                        "organizationId": "c5133530-f739-440f-acc6-73d8fcc3f42d",
                        "childCount": 1,
                        "hasEditPermission": true
                    }
                ],
                "path": "/test",
                "divisionIdPath": "/0000001b-000e-3000-80cf-59cdb2f0f832",
                "divisionNamePath": "/test",
                "name": "test",
                "description": "test",
                "divisionId": "0000001b-000e-3000-80cf-59cdb2f0f832",
                "organizationId": "c5133530-f739-440f-acc6-73d8fcc3f42d",
                "childCount": 1,
                "hasEditPermission": true
            },
            "children": [
                {
                    "key": "0000001c-000e-3000-80cf-59cdb2f0f832",
                    "isChecked": false,
                    "isPartiallyChecked": false,
                    "parentID": "0000001b-000e-3000-80cf-59cdb2f0f832",
                    "data": {
                        "children": [
                            {
                                "children": [
                                    {
                                        "children": [],
                                        "path": "/test/test sub/test123/test 123 child code",
                                        "divisionIdPath": "/0000001b-000e-3000-80cf-59cdb2f0f832/0000001c-000e-3000-80cf-59cdb2f0f832/0000001d-000e-3000-80cf-59cdb2f0f832/00000020-000e-3000-80cf-59cdb2f0f832",
                                        "divisionNamePath": "/test/test sub/test123/test 123 child",
                                        "name": "test 123 child code",
                                        "description": "test 123 child",
                                        "divisionId": "00000020-000e-3000-80cf-59cdb2f0f832",
                                        "organizationId": "c5133530-f739-440f-acc6-73d8fcc3f42d",
                                        "childCount": 0,
                                        "hasEditPermission": true
                                    },
                                    {
                                        "children": [],
                                        "path": "/test/test sub/test123/test 123 child code",
                                        "divisionIdPath": "/0000001b-000e-3000-80cf-59cdb2f0f832/0000001c-000e-3000-80cf-59cdb2f0f832/0000001d-000e-3000-80cf-59cdb2f0f832/00000020-000e-3000-80cf-59cdb2f0f832",
                                        "divisionNamePath": "/test/test sub/test123/test 123 child",
                                        "name": "test 123 child code 2",
                                        "description": "test 123 child 2",
                                        "divisionId": "00000020-000e-3000-80cf-59cdb2f0f833",
                                        "organizationId": "c5133530-f739-440f-acc6-73d8fcc3f42d",
                                        "childCount": 0,
                                        "hasEditPermission": true
                                    }
                                ],
                                "path": "/test/test sub/test123",
                                "divisionIdPath": "/0000001b-000e-3000-80cf-59cdb2f0f832/0000001c-000e-3000-80cf-59cdb2f0f832/0000001d-000e-3000-80cf-59cdb2f0f832",
                                "divisionNamePath": "/test/test sub/test123",
                                "name": "test123",
                                "description": "test123",
                                "divisionId": "0000001d-000e-3000-80cf-59cdb2f0f832",
                                "organizationId": "c5133530-f739-440f-acc6-73d8fcc3f42d",
                                "childCount": 1,
                                "hasEditPermission": true
                            }
                        ],
                        "path": "/test/test sub",
                        "divisionIdPath": "/0000001b-000e-3000-80cf-59cdb2f0f832/0000001c-000e-3000-80cf-59cdb2f0f832",
                        "divisionNamePath": "/test/test sub",
                        "name": "test sub",
                        "description": "test sub",
                        "divisionId": "0000001c-000e-3000-80cf-59cdb2f0f832",
                        "organizationId": "c5133530-f739-440f-acc6-73d8fcc3f42d",
                        "childCount": 1,
                        "hasEditPermission": true
                    },
                    "children": [
                        {
                            "key": "0000001d-000e-3000-80cf-59cdb2f0f832",
                            "isChecked": false,
                            "isPartiallyChecked": false,
                            "parentID": "0000001c-000e-3000-80cf-59cdb2f0f832",
                            "data": {
                                "children": [
                                    {
                                        "children": [],
                                        "path": "/test/test sub/test123/test 123 child code",
                                        "divisionIdPath": "/0000001b-000e-3000-80cf-59cdb2f0f832/0000001c-000e-3000-80cf-59cdb2f0f832/0000001d-000e-3000-80cf-59cdb2f0f832/00000020-000e-3000-80cf-59cdb2f0f832",
                                        "divisionNamePath": "/test/test sub/test123/test 123 child",
                                        "name": "test 123 child code",
                                        "description": "test 123 child",
                                        "divisionId": "00000020-000e-3000-80cf-59cdb2f0f832",
                                        "organizationId": "c5133530-f739-440f-acc6-73d8fcc3f42d",
                                        "childCount": 0,
                                        "hasEditPermission": true
                                    },
                                    {
                                        "children": [],
                                        "path": "/test/test sub/test123/test 123 child code",
                                        "divisionIdPath": "/0000001b-000e-3000-80cf-59cdb2f0f832/0000001c-000e-3000-80cf-59cdb2f0f832/0000001d-000e-3000-80cf-59cdb2f0f832/00000020-000e-3000-80cf-59cdb2f0f832",
                                        "divisionNamePath": "/test/test sub/test123/test 123 child",
                                        "name": "test 123 child code 2",
                                        "description": "test 123 child 2",
                                        "divisionId": "00000020-000e-3000-80cf-59cdb2f0f833",
                                        "organizationId": "c5133530-f739-440f-acc6-73d8fcc3f42d",
                                        "childCount": 0,
                                        "hasEditPermission": true
                                    }
                                ],
                                "path": "/test/test sub/test123",
                                "divisionIdPath": "/0000001b-000e-3000-80cf-59cdb2f0f832/0000001c-000e-3000-80cf-59cdb2f0f832/0000001d-000e-3000-80cf-59cdb2f0f832",
                                "divisionNamePath": "/test/test sub/test123",
                                "name": "test123",
                                "description": "test123",
                                "divisionId": "0000001d-000e-3000-80cf-59cdb2f0f832",
                                "organizationId": "c5133530-f739-440f-acc6-73d8fcc3f42d",
                                "childCount": 1,
                                "hasEditPermission": true
                            },
                            "children": [
                                {
                                    "key": "00000020-000e-3000-80cf-59cdb2f0f832",
                                    "isChecked": false,
                                    "isPartiallyChecked": false,
                                    "parentID": "0000001d-000e-3000-80cf-59cdb2f0f832",
                                    "data": {
                                        "children": [],
                                        "path": "/test/test sub/test123/test 123 child code",
                                        "divisionIdPath": "/0000001b-000e-3000-80cf-59cdb2f0f832/0000001c-000e-3000-80cf-59cdb2f0f832/0000001d-000e-3000-80cf-59cdb2f0f832/00000020-000e-3000-80cf-59cdb2f0f832",
                                        "divisionNamePath": "/test/test sub/test123/test 123 child",
                                        "name": "test 123 child code",
                                        "description": "test 123 child",
                                        "divisionId": "00000020-000e-3000-80cf-59cdb2f0f832",
                                        "organizationId": "c5133530-f739-440f-acc6-73d8fcc3f42d",
                                        "childCount": 0,
                                        "hasEditPermission": true
                                    },
                                    "children": []
                                },
                                {
                                    "key": "00000020-000e-3000-80cf-59cdb2f0f833",
                                    "isChecked": false,
                                    "isPartiallyChecked": false,
                                    "parentID": "0000001d-000e-3000-80cf-59cdb2f0f832",
                                    "data": {
                                        "children": [],
                                        "path": "/test/test sub/test123/test 123 child code",
                                        "divisionIdPath": "/0000001b-000e-3000-80cf-59cdb2f0f832/0000001c-000e-3000-80cf-59cdb2f0f832/0000001d-000e-3000-80cf-59cdb2f0f832/00000020-000e-3000-80cf-59cdb2f0f832",
                                        "divisionNamePath": "/test/test sub/test123/test 123 child",
                                        "name": "test 123 child code 2",
                                        "description": "test 123 child 2",
                                        "divisionId": "00000020-000e-3000-80cf-59cdb2f0f833",
                                        "organizationId": "c5133530-f739-440f-acc6-73d8fcc3f42d",
                                        "childCount": 0,
                                        "hasEditPermission": true
                                    },
                                    "children": []
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "key": "0000001f-000e-3000-80cf-59cdb2f0f833",
            "isChecked": false,
            "isPartiallyChecked": false,
            "parentID": null,
            "data": {
                "children": [
                    {
                        "children": [],
                        "path": "/lenin/child 1 code",
                        "divisionIdPath": "/0000001f-000e-3000-80cf-59cdb2f0f832/00000025-000e-3000-80cf-59cdb2f0f832",
                        "divisionNamePath": "/lenin/child 1",
                        "name": "child 1 code",
                        "description": "child 1",
                        "divisionId": "00000025-000e-3000-80cf-59cdb2f0f832",
                        "organizationId": "c5133530-f739-440f-acc6-73d8fcc3f42d",
                        "childCount": 0,
                        "hasEditPermission": true
                    }
                ],
                "path": "/lenin",
                "divisionIdPath": "/0000001f-000e-3000-80cf-59cdb2f0f832",
                "divisionNamePath": "/lenin",
                "name": "lenin",
                "description": "lenin",
                "divisionId": "0000001f-000e-3000-80cf-59cdb2f0f833",
                "organizationId": "c5133530-f739-440f-acc6-73d8fcc3f42d",
                "childCount": 1,
                "hasEditPermission": true
            },
            "children": [
                {
                    "key": "00000025-000e-3000-80cf-59cdb2f0f832",
                    "isChecked": false,
                    "isPartiallyChecked": false,
                    "parentID": "0000001f-000e-3000-80cf-59cdb2f0f833",
                    "data": {
                        "children": [],
                        "path": "/lenin/child 1 code",
                        "divisionIdPath": "/0000001f-000e-3000-80cf-59cdb2f0f832/00000025-000e-3000-80cf-59cdb2f0f832",
                        "divisionNamePath": "/lenin/child 1",
                        "name": "child 1 code",
                        "description": "child 1",
                        "divisionId": "00000025-000e-3000-80cf-59cdb2f0f832",
                        "organizationId": "c5133530-f739-440f-acc6-73d8fcc3f42d",
                        "childCount": 0,
                        "hasEditPermission": true
                    },
                    "children": []
                }
            ]
        }
    ]

    const [treeData, setTreeData] = useState(nodes);

    const columnBody = (division) => {
        const itemId = division.key;

        const handleCheckboxChange = (event, node) => {
            const isChecked = event.target.checked;

            console.log({ event, node });

        }
        return (
            <>
                <input type="checkbox"
                    className='cus-treetable-checkbox'
                    id={`treetable-input-${itemId}`}
                    // checked={division.isChecked}
                    onChange={(event) => handleCheckboxChange(event, division)}
                />
                {division.data.description}
            </>
        )
    }


    return (
        <div className='dynamic-tree-table'>
            <section style={{ "width": "1000px" }}>
                <TreeTable value={treeData}
                    tableStyle={{ minHeight: "300px" }}
                >
                    <Column field="description" header="Division Name" expander
                        body={columnBody}
                    >
                    </Column>
                    <Column field="name" header="Division Code"></Column>
                    <Column field="description" header="Division Path"></Column>
                    <Column field="parentID" header="Parent Id"></Column>
                </TreeTable>
            </section>

            <section className='selected-divisions'>
                <h3>Selected Divisions</h3>
                {selectedDivisions.length > 0 && selectedDivisions.map((item) => {
                    console.log({ item });

                    return (<>
                        <h4>* {item.name}</h4>

                    </>)
                })}
            </section>
        </div>
    );
};

export default DynamicTreeTable;