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
        name: "children",
        required: false
      },
      nestedLevel: {
        type: "number",
        name: "nestedLevel",
        required: true
      },
      open: {
        type: "boolean",
        name: "open",
        required: true
      },
      style: {
        type: "object",
        name: "style",
        required: false
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