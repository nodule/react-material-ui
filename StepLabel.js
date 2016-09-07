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
        name: "active"
      },
      children: {
        type: "node",
        name: "children"
      },
      completed: {
        type: "boolean",
        name: "completed"
      },
      disabled: {
        type: "boolean",
        name: "disabled"
      },
      icon: {
        type: "union",
        name: "icon"
      },
      last: {
        type: "boolean",
        name: "last"
      },
      style: {
        type: "object",
        name: "style"
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