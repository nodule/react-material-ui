module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/TimePicker/TimeDisplay": require('material-ui/TimePicker/TimeDisplay')
    }
  },
  name: "TimeDisplay",
  ports: {
    input: {
      affix: {
        type: "enum",
        name: "affix",
        "default": ""
      },
      format: {
        type: "enum",
        name: "format"
      },
      mode: {
        type: "enum",
        name: "mode",
        "default": ""
      },
      onSelectAffix: {
        title: "Enable onSelectAffix",
        type: "boolean",
        name: "onSelectAffix"
      },
      onSelectHour: {
        title: "Enable onSelectHour",
        type: "boolean",
        name: "onSelectHour"
      },
      onSelectMin: {
        title: "Enable onSelectMin",
        type: "boolean",
        name: "onSelectMin"
      },
      selectedTime: {
        type: "object",
        name: "selectedTime"
      }
    },
    output: {
      component: {
        title: "TimeDisplay",
        type: "Component"
      },
      onSelectAffix: {
        type: "any"
      },
      onSelectHour: {
        type: "any"
      },
      onSelectMin: {
        type: "any"
      }
    }
  }
}