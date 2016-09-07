module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/List/NestedList": require('material-ui/List/NestedList')
    }
  },
  name: "NestedList",
  ports: {
    input: {
      children: {
        type: "node",
        name: "children"
      },
      nestedLevel: {
        type: "number",
        name: "nestedLevel"
      },
      open: {
        type: "boolean",
        name: "open"
      },
      style: {
        type: "object",
        name: "style"
      }
    },
    output: {
      component: {
        title: "NestedList",
        type: "Component"
      }
    }
  }
}