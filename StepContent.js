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
      last: {
        type: "boolean",
        name: "last",
        required: false
      },
      style: {
        type: "object",
        name: "style",
        required: false
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
        "default": 0
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