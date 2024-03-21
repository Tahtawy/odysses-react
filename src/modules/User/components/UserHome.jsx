import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { TextBoxComponent } from "@syncfusion/ej2-react-inputs";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import { TreeViewComponent } from "@syncfusion/ej2-react-navigations";
import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
} from "@syncfusion/ej2-react-grids";

export const UserHome = () => {
  const FilterList = [
    "All",
    "Available",
    "Applicable",
    "Deployed",
    "New",
    "Updated",
    "Sigma Translations",
  ];
  const tableData = [
    { OrderID: 10248, CustomerID: "VINET", ShipCountry: "France" },
    { OrderID: 10249, CustomerID: "TOMSP", ShipCountry: "Germany" },
    { OrderID: 10250, CustomerID: "HANAR", ShipCountry: "Brazil" },
    { OrderID: 10251, CustomerID: "VICTE", ShipCountry: "France" },
  ];
  const treeViewData = [
    { id: 1, name: "Australia", hasChild: true, expanded: true },
    { id: 2, pid: 1, name: "New South Wales" },
    { id: 3, pid: 1, name: "Victoria" },
    { id: 4, pid: 1, name: "South Australia" },
    { id: 6, pid: 1, name: "Western Australia" },
    { id: 7, name: "Brazil", hasChild: true },
    { id: 8, pid: 7, name: "Paraná" },
    { id: 9, pid: 7, name: "Ceará" },
    { id: 10, pid: 7, name: "Acre" },
    { id: 11, name: "China", hasChild: true },
    { id: 12, pid: 11, name: "Guangzhou" },
    { id: 13, pid: 11, name: "Shanghai" },
    { id: 14, pid: 11, name: "Beijing" },
    { id: 15, pid: 11, name: "Shantou" },
    { id: 16, name: "France", hasChild: true },
    { id: 17, pid: 16, name: "Pays de la Loire" },
    { id: 18, pid: 16, name: "Aquitaine" },
    { id: 19, pid: 16, name: "Brittany" },
    { id: 20, pid: 16, name: "Lorraine" },
    { id: 21, name: "India", hasChild: true },
    { id: 22, pid: 21, name: "Assam" },
    { id: 23, pid: 21, name: "Bihar" },
    { id: 24, pid: 21, name: "Tamil Nadu" },
    { id: 25, pid: 21, name: "Punjab" },
  ];

  const fields = {
    dataSource: treeViewData,
    id: "id",
    parentID: "pid",
    text: "name",
    hasChildren: "hasChild",
  };

  return (
    <div className="container px-2">
      <div className="grid grid-cols-6 gap-2 pt-2 pb-4">
        <div className="e-card text-center">
          <div className="e-card-header">
            <div className="e-card-header-caption">
              <div className="e-card-title flex justify-center items-center gap-2 mb-2">
                <p className="uppercase font-semibold">available</p>
                <span className="e-circle-info e-icons text-blue-600"></span>
              </div>
              <div className="e-card-subtitle text-blue-900 font-semibold">
                191
              </div>
            </div>
          </div>
        </div>
        <div className="e-card text-center">
          <div className="e-card-header">
            <div className="e-card-header-caption">
              <div className="e-card-title flex justify-center items-center gap-2 mb-2">
                <span className="e-circle-check e-icons text-green-400"></span>
                <p className="uppercase font-semibold">applicable</p>
                <span className="e-circle-info e-icons text-blue-600"></span>
              </div>
              <div className="e-card-subtitle text-blue-400 font-semibold">
                144
              </div>
            </div>
          </div>
        </div>
        <div className="e-card text-center">
          <div className="e-card-header">
            <div className="e-card-header-caption">
              <div className="e-card-title flex justify-center items-center gap-2 mb-2">
                <span className="e-circle-check e-icons text-green-400"></span>
                <p className="uppercase font-semibold">deployed</p>
                <span className="e-circle-info e-icons text-blue-600"></span>
              </div>
              <div className="e-card-subtitle text-green-400 font-semibold">
                144
              </div>
            </div>
          </div>
        </div>
        <div className="e-card text-center">
          <div className="e-card-header">
            <div className="e-card-header-caption">
              <div className="e-card-title flex justify-center items-center gap-2 mb-2">
                <span className="rounded-lg border border-blue-400 text-blue-400 text-xs">
                  new
                </span>
                <p className="uppercase font-semibold">new</p>
                <span className="e-circle-info e-icons text-blue-600"></span>
              </div>
              <div className="e-card-subtitle text-blue-400 font-semibold">
                0
              </div>
            </div>
          </div>
        </div>
        <div className="e-card text-center">
          <div className="e-card-header">
            <div className="e-card-header-caption">
              <div className="e-card-title flex justify-center items-center gap-2 mb-2">
                <span className="e-icons e-refresh-2 text-blue-400"></span>
                <p className="uppercase font-semibold">updated</p>
                <span className="e-circle-info e-icons text-blue-600"></span>
              </div>
              <div className="e-card-subtitle text-blue-400 font-semibold">
                0
              </div>
            </div>
          </div>
        </div>
        <div className="e-card text-center">
          <div className="e-card-header">
            <div className="e-card-header-caption">
              <div className="e-card-title flex justify-center items-center gap-2 mb-2">
                <span className="e-icons e-refresh-2 text-blue-400"></span>
                <p className="uppercase font-semibold">sigma translations</p>
                <span className="e-circle-info e-icons text-blue-600"></span>
              </div>
              <div className="e-card-subtitle text-blue-400 font-semibold">
                16
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <div className="search flex items-center">
          <label className="me-2">Search: </label>
          <TextBoxComponent
            placeholder="First Name"
            fields={fields}
            showCheckBox={true}
          />
        </div>
        <DropDownListComponent
          width={200}
          dataSource={FilterList}
        ></DropDownListComponent>
        <ButtonComponent
          className="text-blue-400 bg-transparent border-transparent !p-1"
          iconCss="e-search e-icons"
          iconPosition="Center"
        ></ButtonComponent>
        <ButtonComponent
          className="text-blue-400 bg-transparent border-transparent !p-1"
          iconCss="e-filter-2 e-icons"
          iconPosition="Center"
        ></ButtonComponent>
      </div>

      <div className="grid grid-flow-col auto-cols-fr gap-4 mt-4">
        <div className="bg-white p-3">
          <TreeViewComponent fields={fields} showCheckBox={true} />
        </div>
        <div>
          <GridComponent dataSource={tableData}>
            <ColumnsDirective>
              <ColumnDirective field="OrderID" headerText="Order ID" />
              <ColumnDirective field="CustomerID" headerText="Customer ID" />
              <ColumnDirective field="ShipCountry" headerText="Ship Country" />
            </ColumnsDirective>
          </GridComponent>
        </div>
      </div>
    </div>
  );
};
