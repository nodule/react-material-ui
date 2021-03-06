module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/TimePicker/ClockHours": require('material-ui/TimePicker/ClockHours')
    }
  },
  name: "ClockHours",
  ports: {
    input: {
      format: {
        type: "enum",
        name: "format",
        "default": ""
      },
      initialHours: {
        type: "number",
        name: "initialHours",
        "default": 0
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
        title: "ClockHours",
        type: "Component"
      },
      onChange: {
        type: "any"
      }
    }
  }
}