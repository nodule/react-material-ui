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
        name: "autoOk",
        required: false
      },
      bodyStyle: {
        type: "object",
        name: "bodyStyle",
        required: false
      },
      cancelLabel: {
        type: "node",
        name: "cancelLabel",
        "default": null
      },
      format: {
        type: "enum",
        name: "format",
        required: false
      },
      initialTime: {
        type: "object",
        name: "initialTime",
        required: false
      },
      okLabel: {
        type: "node",
        name: "okLabel",
        "default": null
      },
      onAccept: {
        title: "Enable onAccept",
        type: "boolean",
        name: "onAccept",
        required: false
      },
      onDismiss: {
        title: "Enable onDismiss",
        type: "boolean",
        name: "onDismiss",
        required: false
      },
      onShow: {
        title: "Enable onShow",
        type: "boolean",
        name: "onShow",
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