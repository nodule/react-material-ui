module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Stepper/StepButton": require('material-ui/Stepper/StepButton')
    }
  },
  name: "StepButton",
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
      onMouseEnter: {
        title: "Enable onMouseEnter",
        type: "boolean",
        name: "onMouseEnter",
        required: false
      },
      onMouseLeave: {
        title: "Enable onMouseLeave",
        type: "boolean",
        name: "onMouseLeave",
        required: false
      },
      onTouchStart: {
        title: "Enable onTouchStart",
        type: "boolean",
        name: "onTouchStart",
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
        title: "StepButton",
        type: "Component"
      },
      onMouseEnter: {
        type: "any"
      },
      onMouseLeave: {
        type: "any"
      },
      onTouchStart: {
        type: "any"
      }
    }
  }
}