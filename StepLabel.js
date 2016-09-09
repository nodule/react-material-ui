module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Stepper/StepLabel": require('material-ui/Stepper/StepLabel')
    }
  },
  name: "StepLabel",
  ports: {
    input: {
      active: {
        type: "boolean",
        name: "active",
        required: false
      },
      children: {
        type: "node",
        name: "children",
        required: false
      },
      completed: {
        type: "boolean",
        name: "completed",
        required: false
      },
      disabled: {
        type: "boolean",
        name: "disabled",
        required: false
      },
      icon: {
        type: "union",
        name: "icon",
        required: false
      },
      last: {
        type: "boolean",
        name: "last",
        required: false
      },
      style: {
        type: "object",
        name: "style",
        required: false
      }
    },
    output: {
      component: {
        title: "StepLabel",
        type: "Component"
      }
    }
  }
}