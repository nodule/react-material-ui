module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Table/TableHeader": require('material-ui/Table/TableHeader')
    }
  },
  name: "TableHeader",
  ports: {
    input: {
      adjustForCheckbox: {
        type: "boolean",
        name: "adjustForCheckbox",
        "default": false
      },
      children: {
        type: "node",
        name: "children"
      },
      className: {
        type: "string",
        name: "className"
      },
      displaySelectAll: {
        type: "boolean",
        name: "displaySelectAll",
        "default": false
      },
      enableSelectAll: {
        type: "boolean",
        name: "enableSelectAll",
        "default": false
      },
      onSelectAll: {
        title: "Enable onSelectAll",
        type: "boolean",
        name: "onSelectAll"
      },
      selectAllSelected: {
        type: "boolean",
        name: "selectAllSelected",
        "default": false
      },
      style: {
        type: "object",
        name: "style"
      }
    },
    output: {
      component: {
        title: "TableHeader",
        type: "Component"
      },
      onSelectAll: {
        type: "any"
      }
    }
  }
}