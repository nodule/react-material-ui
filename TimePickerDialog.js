module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/TimePicker/TimePickerDialog": require('material-ui/TimePicker/TimePickerDialog')
    }
  },
  name: "TimePickerDialog",
  ports: {
    input: {
      autoOk: {
        type: "boolean",
        name: "autoOk"
      },
      bodyStyle: {
        type: "object",
        name: "bodyStyle"
      },
      cancelLabel: {
        type: "node",
        name: "cancelLabel",
        "default": null
      },
      format: {
        type: "enum",
        name: "format"
      },
      initialTime: {
        type: "object",
        name: "initialTime"
      },
      okLabel: {
        type: "node",
        name: "okLabel",
        "default": null
      },
      onAccept: {
        title: "Enable onAccept",
        type: "boolean",
        name: "onAccept"
      },
      onDismiss: {
        title: "Enable onDismiss",
        type: "boolean",
        name: "onDismiss"
      },
      onShow: {
        title: "Enable onShow",
        type: "boolean",
        name: "onShow"
      },
      style: {
        type: "object",
        name: "style"
      }
    },
    output: {
      component: {
        title: "TimePickerDialog",
        type: "Component"
      },
      onAccept: {
        type: "any"
      },
      onDismiss: {
        type: "any"
      },
      onShow: {
        type: "any"
      }
    }
  }
}