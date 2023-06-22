import React, { useMemo, useState, useEffect, Children } from "react";
import "primereact/resources/themes/lara-light-indigo/theme.css"; // theme
import "primereact/resources/primereact.css";
import { TreeNode } from "primereact/treenode";
import {
  TreeTable,
  TreeTableSelectionKeysType,
  TreeTableSelectionEvent,
  TreeTableExpandedKeysType,
} from "primereact/treetable";
import { Column } from "primereact/column";
import "./dynamictreetable.scss";

//----------------(Todo)-----------------------------
// 1. If any of the child is selected the parent should be partially checked
// 2. If all the childs are selected the parent should be checked.
// 3. If we select the parent all the childs should be selected.
// 4. if we uncheck any one of the child, the parent should be partially checked
// 5. All fully checked divisions should be listed in selected divisions.

const DynamicTreeTable = (props: any) => {
  const [selectedDivisions, setSelectedDivisions] = useState([]);

  //sample treedata with unique values
  const nodes = [
    {
      key: "0000001b-000e-3000-80cf-59cdb2f0f832",
      isChecked: false,
      isPartiallyChecked: false,
      parentID: null,
      data: {
        children: [
          {
            children: [
              {
                children: [
                  {
                    children: [],
                    path: "/test/test sub/test123/test 123 child code",
                    divisionIdPath:
                      "/0000001b-000e-3000-80cf-59cdb2f0f832/0000001c-000e-3000-80cf-59cdb2f0f832/0000001d-000e-3000-80cf-59cdb2f0f832/00000020-000e-3000-80cf-59cdb2f0f832",
                    divisionNamePath: "/test/test sub/test123/test 123 child",
                    name: "test 123 child code",
                    description: "test 123 child",
                    divisionId: "00000020-000e-3000-80cf-59cdb2f0f832",
                    organizationId: "c5133530-f739-440f-acc6-73d8fcc3f42d",
                    childCount: 0,
                    hasEditPermission: true,
                  },
                  {
                    children: [],
                    path: "/test/test sub/test123/test 123 child code",
                    divisionIdPath:
                      "/0000001b-000e-3000-80cf-59cdb2f0f832/0000001c-000e-3000-80cf-59cdb2f0f832/0000001d-000e-3000-80cf-59cdb2f0f832/00000020-000e-3000-80cf-59cdb2f0f832",
                    divisionNamePath: "/test/test sub/test123/test 123 child",
                    name: "test 123 child code 2",
                    description: "test 123 child 2",
                    divisionId: "00000020-000e-3000-80cf-59cdb2f0f833",
                    organizationId: "c5133530-f739-440f-acc6-73d8fcc3f42d",
                    childCount: 0,
                    hasEditPermission: true,
                  },
                ],
                path: "/test/test sub/test123",
                divisionIdPath:
                  "/0000001b-000e-3000-80cf-59cdb2f0f832/0000001c-000e-3000-80cf-59cdb2f0f832/0000001d-000e-3000-80cf-59cdb2f0f832",
                divisionNamePath: "/test/test sub/test123",
                name: "test123",
                description: "test123",
                divisionId: "0000001d-000e-3000-80cf-59cdb2f0f832",
                organizationId: "c5133530-f739-440f-acc6-73d8fcc3f42d",
                childCount: 1,
                hasEditPermission: true,
              },
            ],
            path: "/test/test sub",
            divisionIdPath:
              "/0000001b-000e-3000-80cf-59cdb2f0f832/0000001c-000e-3000-80cf-59cdb2f0f832",
            divisionNamePath: "/test/test sub",
            name: "test sub",
            description: "test sub",
            divisionId: "0000001c-000e-3000-80cf-59cdb2f0f832",
            organizationId: "c5133530-f739-440f-acc6-73d8fcc3f42d",
            childCount: 1,
            hasEditPermission: true,
          },
        ],
        path: "/test",
        divisionIdPath: "/0000001b-000e-3000-80cf-59cdb2f0f832",
        divisionNamePath: "/test",
        name: "test",
        description: "test",
        divisionId: "0000001b-000e-3000-80cf-59cdb2f0f832",
        organizationId: "c5133530-f739-440f-acc6-73d8fcc3f42d",
        childCount: 1,
        hasEditPermission: true,
      },
      children: [
        {
          key: "0000001c-000e-3000-80cf-59cdb2f0f832",
          isChecked: false,
          isPartiallyChecked: false,
          parentID: "0000001b-000e-3000-80cf-59cdb2f0f832",
          data: {
            children: [
              {
                children: [
                  {
                    children: [],
                    path: "/test/test sub/test123/test 123 child code",
                    divisionIdPath:
                      "/0000001b-000e-3000-80cf-59cdb2f0f832/0000001c-000e-3000-80cf-59cdb2f0f832/0000001d-000e-3000-80cf-59cdb2f0f832/00000020-000e-3000-80cf-59cdb2f0f832",
                    divisionNamePath: "/test/test sub/test123/test 123 child",
                    name: "test 123 child code",
                    description: "test 123 child",
                    divisionId: "00000020-000e-3000-80cf-59cdb2f0f832",
                    organizationId: "c5133530-f739-440f-acc6-73d8fcc3f42d",
                    childCount: 0,
                    hasEditPermission: true,
                  },
                  {
                    children: [],
                    path: "/test/test sub/test123/test 123 child code",
                    divisionIdPath:
                      "/0000001b-000e-3000-80cf-59cdb2f0f832/0000001c-000e-3000-80cf-59cdb2f0f832/0000001d-000e-3000-80cf-59cdb2f0f832/00000020-000e-3000-80cf-59cdb2f0f832",
                    divisionNamePath: "/test/test sub/test123/test 123 child",
                    name: "test 123 child code 2",
                    description: "test 123 child 2",
                    divisionId: "00000020-000e-3000-80cf-59cdb2f0f833",
                    organizationId: "c5133530-f739-440f-acc6-73d8fcc3f42d",
                    childCount: 0,
                    hasEditPermission: true,
                  },
                ],
                path: "/test/test sub/test123",
                divisionIdPath:
                  "/0000001b-000e-3000-80cf-59cdb2f0f832/0000001c-000e-3000-80cf-59cdb2f0f832/0000001d-000e-3000-80cf-59cdb2f0f832",
                divisionNamePath: "/test/test sub/test123",
                name: "test123",
                description: "test123",
                divisionId: "0000001d-000e-3000-80cf-59cdb2f0f832",
                organizationId: "c5133530-f739-440f-acc6-73d8fcc3f42d",
                childCount: 1,
                hasEditPermission: true,
              },
            ],
            path: "/test/test sub",
            divisionIdPath:
              "/0000001b-000e-3000-80cf-59cdb2f0f832/0000001c-000e-3000-80cf-59cdb2f0f832",
            divisionNamePath: "/test/test sub",
            name: "test sub",
            description: "test sub",
            divisionId: "0000001c-000e-3000-80cf-59cdb2f0f832",
            organizationId: "c5133530-f739-440f-acc6-73d8fcc3f42d",
            childCount: 1,
            hasEditPermission: true,
          },
          children: [
            {
              key: "0000001d-000e-3000-80cf-59cdb2f0f832",
              isChecked: false,
              isPartiallyChecked: false,
              parentID: "0000001c-000e-3000-80cf-59cdb2f0f832",
              data: {
                children: [
                  {
                    children: [],
                    path: "/test/test sub/test123/test 123 child code",
                    divisionIdPath:
                      "/0000001b-000e-3000-80cf-59cdb2f0f832/0000001c-000e-3000-80cf-59cdb2f0f832/0000001d-000e-3000-80cf-59cdb2f0f832/00000020-000e-3000-80cf-59cdb2f0f832",
                    divisionNamePath: "/test/test sub/test123/test 123 child",
                    name: "test 123 child code",
                    description: "test 123 child",
                    divisionId: "00000020-000e-3000-80cf-59cdb2f0f832",
                    organizationId: "c5133530-f739-440f-acc6-73d8fcc3f42d",
                    childCount: 0,
                    hasEditPermission: true,
                  },
                  {
                    children: [],
                    path: "/test/test sub/test123/test 123 child code",
                    divisionIdPath:
                      "/0000001b-000e-3000-80cf-59cdb2f0f832/0000001c-000e-3000-80cf-59cdb2f0f832/0000001d-000e-3000-80cf-59cdb2f0f832/00000020-000e-3000-80cf-59cdb2f0f832",
                    divisionNamePath: "/test/test sub/test123/test 123 child",
                    name: "test 123 child code 2",
                    description: "test 123 child 2",
                    divisionId: "00000020-000e-3000-80cf-59cdb2f0f833",
                    organizationId: "c5133530-f739-440f-acc6-73d8fcc3f42d",
                    childCount: 0,
                    hasEditPermission: true,
                  },
                ],
                path: "/test/test sub/test123",
                divisionIdPath:
                  "/0000001b-000e-3000-80cf-59cdb2f0f832/0000001c-000e-3000-80cf-59cdb2f0f832/0000001d-000e-3000-80cf-59cdb2f0f832",
                divisionNamePath: "/test/test sub/test123",
                name: "test123",
                description: "test123",
                divisionId: "0000001d-000e-3000-80cf-59cdb2f0f832",
                organizationId: "c5133530-f739-440f-acc6-73d8fcc3f42d",
                childCount: 1,
                hasEditPermission: true,
              },
              children: [
                {
                  key: "00000020-000e-3000-80cf-59cdb2f0f832",
                  isChecked: false,
                  isPartiallyChecked: false,
                  parentID: "0000001d-000e-3000-80cf-59cdb2f0f832",
                  data: {
                    children: [],
                    path: "/test/test sub/test123/test 123 child code",
                    divisionIdPath:
                      "/0000001b-000e-3000-80cf-59cdb2f0f832/0000001c-000e-3000-80cf-59cdb2f0f832/0000001d-000e-3000-80cf-59cdb2f0f832/00000020-000e-3000-80cf-59cdb2f0f832",
                    divisionNamePath: "/test/test sub/test123/test 123 child",
                    name: "test 123 child code",
                    description: "test 123 child",
                    divisionId: "00000020-000e-3000-80cf-59cdb2f0f832",
                    organizationId: "c5133530-f739-440f-acc6-73d8fcc3f42d",
                    childCount: 0,
                    hasEditPermission: true,
                  },
                  children: [],
                },
                {
                  key: "00000020-000e-3000-80cf-59cdb2f0f833",
                  isChecked: false,
                  isPartiallyChecked: false,
                  parentID: "0000001d-000e-3000-80cf-59cdb2f0f832",
                  data: {
                    children: [],
                    path: "/test/test sub/test123/test 123 child code",
                    divisionIdPath:
                      "/0000001b-000e-3000-80cf-59cdb2f0f832/0000001c-000e-3000-80cf-59cdb2f0f832/0000001d-000e-3000-80cf-59cdb2f0f832/00000020-000e-3000-80cf-59cdb2f0f832",
                    divisionNamePath: "/test/test sub/test123/test 123 child",
                    name: "test 123 child code 2",
                    description: "test 123 child 2",
                    divisionId: "00000020-000e-3000-80cf-59cdb2f0f833",
                    organizationId: "c5133530-f739-440f-acc6-73d8fcc3f42d",
                    childCount: 0,
                    hasEditPermission: true,
                  },
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      key: "0000001f-000e-3000-80cf-59cdb2f0f833",
      isChecked: false,
      isPartiallyChecked: false,
      parentID: null,
      data: {
        children: [
          {
            children: [],
            path: "/lenin/child 1 code",
            divisionIdPath:
              "/0000001f-000e-3000-80cf-59cdb2f0f832/00000025-000e-3000-80cf-59cdb2f0f832",
            divisionNamePath: "/lenin/child 1",
            name: "child 1 code",
            description: "child 1",
            divisionId: "00000025-000e-3000-80cf-59cdb2f0f832",
            organizationId: "c5133530-f739-440f-acc6-73d8fcc3f42d",
            childCount: 0,
            hasEditPermission: true,
          },
        ],
        path: "/lenin",
        divisionIdPath: "/0000001f-000e-3000-80cf-59cdb2f0f832",
        divisionNamePath: "/lenin",
        name: "lenin",
        description: "lenin",
        divisionId: "0000001f-000e-3000-80cf-59cdb2f0f833",
        organizationId: "c5133530-f739-440f-acc6-73d8fcc3f42d",
        childCount: 1,
        hasEditPermission: true,
      },
      children: [
        {
          key: "00000025-000e-3000-80cf-59cdb2f0f832",
          isChecked: false,
          isPartiallyChecked: false,
          parentID: "0000001f-000e-3000-80cf-59cdb2f0f833",
          data: {
            children: [],
            path: "/lenin/child 1 code",
            divisionIdPath:
              "/0000001f-000e-3000-80cf-59cdb2f0f832/00000025-000e-3000-80cf-59cdb2f0f832",
            divisionNamePath: "/lenin/child 1",
            name: "child 1 code",
            description: "child 1",
            divisionId: "00000025-000e-3000-80cf-59cdb2f0f832",
            organizationId: "c5133530-f739-440f-acc6-73d8fcc3f42d",
            childCount: 0,
            hasEditPermission: true,
          },
          children: [],
        },
      ],
    },
  ];

  const [treeData, setTreeData] = useState(nodes);
  const [selectedNodeKeys, setSelectedNodeKeys] = useState(null);

  const columnBody = (division) => {
    const itemId = division.key;

    const handleCheckboxChange = (event, node) => {
      // const element = document.getElementById(`treetable-input-${event.key}`)
      // element.indeterminate = true;

      const isChecked = event.target.checked;
      const isIndeterminate = event.target.indeterminate;

    
    };
    // return (
    //     <>
    //         <input type="checkbox"
    //             className='cus-treetable-checkbox'
    //             id={`treetable-input-${itemId}`}
    //             // checked={division.isChecked}
    //             onChange={(event) => handleCheckboxChange(event, division)}
    //         />
    //         {division.data.description}
    //     </>
    // )
  };

  let selectedNodeKeysArr = [];
  for (const key in selectedNodeKeys) {
    selectedNodeKeysArr = [
      ...selectedNodeKeysArr,
      { [key]: selectedNodeKeys[key] },
    ];
  }

  const getNames = (data) => {
    data.map((item) => {
      selectedNodeKeysArr &&
        selectedNodeKeysArr.forEach((elem) => {
          
          if (!Object.values(elem)[0].checked) {
            return;
          }

          if (Object.keys(elem)[0] === item?.data?.divisionId) {
            

            setSelectedDivisions((state) => {
              return [...state, item?.data?.description];
            });
          }
        });
      if (item?.children.length > 0) {
        getNames(item?.children);
      }
    });
  };

  useEffect(() => {
    getNames(treeData);
    //setSelectedDivisions([]);
  }, [treeData, selectedNodeKeys]);

  return (
    <div className="dynamic-tree-table">
      <section style={{ width: "1000px" }}>
        <TreeTable
          value={treeData}
          tableStyle={{ minHeight: "300px" }}
          selectionMode="checkbox"
          selectionKeys={selectedNodeKeys}
          onSelectionChange={(e) => {
            setSelectedNodeKeys(e.value);
        
            setSelectedDivisions([]);
          }}
        
        >
          <Column
            field="description"
            header="Division Name"
            expander
            body={columnBody}
          ></Column>
          <Column field="name" header="Division Code"></Column>
          <Column field="description" header="Division Path"></Column>
          <Column field="parentID" header="Parent Id"></Column>
        </TreeTable>
      </section>

      <section className="selected-divisions">
        <h3>Selected Divisions</h3>
        <ul>
          {selectedDivisions.length > 0 &&
            selectedDivisions.map((item) => {
              return <li>{item}</li>;
            })}
        </ul>
      </section>
    </div>
  );
};

export default DynamicTreeTable;
