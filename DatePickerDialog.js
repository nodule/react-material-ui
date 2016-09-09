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
        name: "animation",
        required: false
      },
      autoOk: {
        type: "boolean",
        name: "autoOk",
        required: false
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
        name: "containerStyle",
        required: false
      },
      disableYearSelection: {
        type: "boolean",
        name: "disableYearSelection",
        required: false
      },
      firstDayOfWeek: {
        type: "number",
        name: "firstDayOfWeek",
        required: false
      },
      initialDate: {
        type: "object",
        name: "initialDate",
        required: false
      },
      locale: {
        type: "string",
        name: "locale",
        "default": ""
      },
      maxDate: {
        type: "object",
        name: "maxDate",
        required: false
      },
      minDate: {
        type: "object",
        name: "minDate",
        required: false
      },
      mode: {
        type: "enum",
        name: "mode",
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
      open: {
        type: "boolean",
        name: "open",
        required: false
      },
      shouldDisableDate: {
        title: "Enable shouldDisableDate",
        type: "boolean",
        name: "shouldDisableDate",
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