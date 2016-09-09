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
        name: "color",
        required: false
      },
      left: {
        type: "number",
        name: "left",
        required: true
      },
      loadingColor: {
        type: "string",
        name: "loadingColor",
        required: false
      },
      percentage: {
        type: "number",
        name: "percentage",
        "default": 0
      },
      size: {
        type: "number",
        name: "size",
        "default": 0
      },
      status: {
        type: "enum",
        name: "status",
        "default": ""
      },
      style: {
        type: "object",
        name: "style",
        required: false
      },
      top: {
        type: "number",
        name: "top",
        required: true
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