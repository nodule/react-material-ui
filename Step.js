module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Stepper/Step": require('material-ui/Stepper/Step')
    }
  },
  name: "Step",
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
      index: {
        type: "number",
        name: "index"
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
        title: "Step",
        type: "Component"
      }
    }
  }
}