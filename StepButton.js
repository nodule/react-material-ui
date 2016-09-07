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
      onMouseEnter: {
        title: "Enable onMouseEnter",
        type: "boolean",
        name: "onMouseEnter"
      },
      onMouseLeave: {
        title: "Enable onMouseLeave",
        type: "boolean",
        name: "onMouseLeave"
      },
      onTouchStart: {
        title: "Enable onTouchStart",
        type: "boolean",
        name: "onTouchStart"
      },
      style: {
        type: "object",
        name: "style"
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