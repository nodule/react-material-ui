module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Stepper/StepContent": require('material-ui/Stepper/StepContent')
    }
  },
  name: "StepContent",
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
      last: {
        type: "boolean",
        name: "last"
      },
      style: {
        type: "object",
        name: "style"
      },
      transition: {
        title: "Enable transition",
        type: "boolean",
        name: "transition",
        "default": false
      },
      transitionDuration: {
        type: "number",
        name: "transitionDuration",
        "default": ""
      }
    },
    output: {
      component: {
        title: "StepContent",
        type: "Component"
      },
      transition: {
        type: "any"
      }
    }
  }
}