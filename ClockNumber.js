module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/TimePicker/ClockNumber": require('material-ui/TimePicker/ClockNumber')
    }
  },
  name: "ClockNumber",
  ports: {
    input: {
      isSelected: {
        type: "boolean",
        name: "isSelected",
        "default": false
      },
      onSelected: {
        title: "Enable onSelected",
        type: "boolean",
        name: "onSelected"
      },
      type: {
        type: "enum",
        name: "type",
        "default": ""
      },
      value: {
        type: "number",
        name: "value",
        "default": ""
      }
    },
    output: {
      component: {
        title: "ClockNumber",
        type: "Component"
      },
      onSelected: {
        type: "any"
      }
    }
  }
}