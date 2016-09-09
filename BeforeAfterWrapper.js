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
        name: "afterStyle",
        required: false
      },
      beforeElementType: {
        type: "string",
        name: "beforeElementType",
        "default": ""
      },
      beforeStyle: {
        type: "object",
        name: "beforeStyle",
        required: false
      },
      children: {
        type: "node",
        name: "children",
        required: false
      },
      elementType: {
        type: "string",
        name: "elementType",
        "default": ""
      },
      style: {
        type: "object",
        name: "style",
        required: false
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