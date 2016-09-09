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
        "default": 0
      },
      min: {
        type: "number",
        name: "min",
        "default": 0
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
        "default": 0
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