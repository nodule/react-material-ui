module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Stepper/StepConnector": require('material-ui/Stepper/StepConnector')
    }
  },
  name: "StepConnector",
  ports: {
    input: {
      style: {
        type: "object",
        name: "style"
      }
    },
    output: {
      component: {
        title: "StepConnector",
        type: "Component"
      }
    }
  }
}