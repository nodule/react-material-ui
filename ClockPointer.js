module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/TimePicker/ClockPointer": require('material-ui/TimePicker/ClockPointer')
    }
  },
  name: "ClockPointer",
  ports: {
    input: {
      hasSelected: {
        type: "boolean",
        name: "hasSelected",
        "default": false
      },
      type: {
        type: "enum",
        name: "type",
        "default": ""
      },
      value: {
        type: "number",
        name: "value",
        "default": 0
      }
    },
    output: {
      component: {
        title: "ClockPointer",
        type: "Component"
      }
    }
  }
}