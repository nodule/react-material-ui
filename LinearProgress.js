module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/LinearProgress/LinearProgress": require('material-ui/LinearProgress/LinearProgress')
    }
  },
  name: "LinearProgress",
  ports: {
    input: {
      color: {
        type: "string",
        name: "color"
      },
      max: {
        type: "number",
        name: "max",
        "default": ""
      },
      min: {
        type: "number",
        name: "min",
        "default": ""
      },
      mode: {
        type: "enum",
        name: "mode",
        "default": ""
      },
      style: {
        type: "object",
        name: "style"
      },
      value: {
        type: "number",
        name: "value",
        "default": ""
      }
    },
    output: {
      component: {
        title: "LinearProgress",
        type: "Component"
      }
    }
  }
}