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
        name: "active",
        required: false
      },
      children: {
        type: "array",
        propType: "node",
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
      index: {
        type: "number",
        name: "index",
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
        title: "Step",
        type: "Component"
      }
    }
  }
}