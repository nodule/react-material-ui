module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Table/TableFooter": require('material-ui/Table/TableFooter')
    }
  },
  name: "TableFooter",
  ports: {
    input: {
      adjustForCheckbox: {
        type: "boolean",
        name: "adjustForCheckbox",
        "default": false
      },
      children: {
        type: "array",
        propType: "node",
        name: "children",
        required: false
      },
      className: {
        type: "string",
        name: "className",
        required: false
      },
      style: {
        type: "object",
        name: "style",
        "default": {}
      }
    },
    output: {
      component: {
        title: "TableFooter",
        type: "Component"
      }
    }
  }
}