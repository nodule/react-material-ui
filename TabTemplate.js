module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Tabs/TabTemplate": require('material-ui/Tabs/TabTemplate')
    }
  },
  name: "TabTemplate",
  ports: {
    input: {
      children: {
        type: "array",
        propType: "node",
        name: "children",
        required: false
      },
      selected: {
        type: "boolean",
        name: "selected",
        required: false
      }
    },
    output: {
      component: {
        title: "TabTemplate",
        type: "Component"
      }
    }
  }
}