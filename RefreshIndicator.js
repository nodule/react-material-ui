module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/RefreshIndicator/RefreshIndicator": require('material-ui/RefreshIndicator/RefreshIndicator')
    }
  },
  name: "RefreshIndicator",
  ports: {
    input: {
      color: {
        type: "string",
        name: "color"
      },
      left: {
        type: "number",
        name: "left"
      },
      loadingColor: {
        type: "string",
        name: "loadingColor"
      },
      percentage: {
        type: "number",
        name: "percentage",
        "default": ""
      },
      size: {
        type: "number",
        name: "size",
        "default": ""
      },
      status: {
        type: "enum",
        name: "status",
        "default": ""
      },
      style: {
        type: "object",
        name: "style"
      },
      top: {
        type: "number",
        name: "top"
      }
    },
    output: {
      component: {
        title: "RefreshIndicator",
        type: "Component"
      }
    }
  }
}