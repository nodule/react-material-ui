module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/internal/BeforeAfterWrapper": require('material-ui/internal/BeforeAfterWrapper')
    }
  },
  name: "BeforeAfterWrapper",
  ports: {
    input: {
      afterElementType: {
        type: "string",
        name: "afterElementType",
        "default": ""
      },
      afterStyle: {
        type: "object",
        name: "afterStyle"
      },
      beforeElementType: {
        type: "string",
        name: "beforeElementType",
        "default": ""
      },
      beforeStyle: {
        type: "object",
        name: "beforeStyle"
      },
      children: {
        type: "node",
        name: "children"
      },
      elementType: {
        type: "string",
        name: "elementType",
        "default": ""
      },
      style: {
        type: "object",
        name: "style"
      }
    },
    output: {
      component: {
        title: "BeforeAfterWrapper",
        type: "Component"
      }
    }
  }
}