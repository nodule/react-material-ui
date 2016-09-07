module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Stepper/Stepper": require('material-ui/Stepper/Stepper')
    }
  },
  name: "Stepper",
  ports: {
    input: {
      activeStep: {
        type: "number",
        name: "activeStep"
      },
      children: {
        type: "arrayOf",
        name: "children"
      },
      linear: {
        type: "boolean",
        name: "linear",
        "default": false
      },
      orientation: {
        type: "enum",
        name: "orientation",
        "default": ""
      },
      style: {
        type: "object",
        name: "style"
      }
    },
    output: {
      component: {
        title: "Stepper",
        type: "Component"
      }
    }
  }
}