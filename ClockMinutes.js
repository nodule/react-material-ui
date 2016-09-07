module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/TimePicker/ClockMinutes": require('material-ui/TimePicker/ClockMinutes')
    }
  },
  name: "ClockMinutes",
  ports: {
    input: {
      initialMinutes: {
        type: "number",
        name: "initialMinutes",
        "default": ""
      },
      onChange: {
        title: "Enable onChange",
        type: "boolean",
        name: "onChange",
        "default": false
      }
    },
    output: {
      component: {
        title: "ClockMinutes",
        type: "Component"
      },
      onChange: {
        type: "any"
      }
    }
  }
}