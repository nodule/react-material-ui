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
        type: "node",
        name: "children"
      },
      selected: {
        type: "boolean",
        name: "selected"
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