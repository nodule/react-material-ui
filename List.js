module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/List/List": require('material-ui/List/List')
    }
  },
  name: "List",
  ports: {
    input: {
      children: {
        type: "node",
        name: "children"
      },
      style: {
        type: "object",
        name: "style"
      }
    },
    output: {
      component: {
        title: "List",
        type: "Component"
      }
    }
  }
}