module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/DatePicker/DatePickerDialog": require('material-ui/DatePicker/DatePickerDialog')
    }
  },
  name: "DatePickerDialog",
  ports: {
    input: {
      DateTimeFormat: {
        title: "Enable DateTimeFormat",
        type: "boolean",
        name: "DateTimeFormat",
        "default": false
      },
      animation: {
        title: "Enable animation",
        type: "boolean",
        name: "animation"
      },
      autoOk: {
        type: "boolean",
        name: "autoOk"
      },
      cancelLabel: {
        type: "node",
        name: "cancelLabel",
        "default": null
      },
      container: {
        type: "enum",
        name: "container",
        "default": ""
      },
      containerStyle: {
        type: "object",
        name: "containerStyle"
      },
      disableYearSelection: {
        type: "boolean",
        name: "disableYearSelection"
      },
      firstDayOfWeek: {
        type: "number",
        name: "firstDayOfWeek"
      },
      initialDate: {
        type: "object",
        name: "initialDate"
      },
      locale: {
        type: "string",
        name: "locale",
        "default": ""
      },
      maxDate: {
        type: "object",
        name: "maxDate"
      },
      minDate: {
        type: "object",
        name: "minDate"
      },
      mode: {
        type: "enum",
        name: "mode"
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
      open: {
        type: "boolean",
        name: "open"
      },
      shouldDisableDate: {
        title: "Enable shouldDisableDate",
        type: "boolean",
        name: "shouldDisableDate"
      },
      style: {
        type: "object",
        name: "style"
      }
    },
    output: {
      component: {
        title: "DatePickerDialog",
        type: "Component"
      },
      DateTimeFormat: {
        type: "any"
      },
      animation: {
        type: "any"
      },
      onAccept: {
        type: "any"
      },
      onDismiss: {
        type: "any"
      },
      onShow: {
        type: "any"
      },
      shouldDisableDate: {
        type: "any"
      }
    }
  }
}