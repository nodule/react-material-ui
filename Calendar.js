module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/DatePicker/Calendar": require('material-ui/DatePicker/Calendar')
    }
  },
  name: "Calendar",
  ports: {
    input: {
      DateTimeFormat: {
        title: "Enable DateTimeFormat",
        type: "boolean",
        name: "DateTimeFormat",
        "default": false
      },
      autoOk: {
        type: "boolean",
        name: "autoOk",
        required: false
      },
      cancelLabel: {
        type: "node",
        name: "cancelLabel",
        required: false
      },
      disableYearSelection: {
        type: "boolean",
        name: "disableYearSelection",
        "default": false
      },
      firstDayOfWeek: {
        type: "number",
        name: "firstDayOfWeek",
        required: false
      },
      initialDate: {
        type: "object",
        name: "initialDate",
        "default": {}
      },
      locale: {
        type: "string",
        name: "locale",
        "default": ""
      },
      maxDate: {
        type: "object",
        name: "maxDate",
        "default": {}
      },
      minDate: {
        type: "object",
        name: "minDate",
        "default": {}
      },
      mode: {
        type: "enum",
        name: "mode",
        required: false
      },
      okLabel: {
        type: "node",
        name: "okLabel",
        required: false
      },
      onTouchTapCancel: {
        title: "Enable onTouchTapCancel",
        type: "boolean",
        name: "onTouchTapCancel",
        required: false
      },
      onTouchTapDay: {
        title: "Enable onTouchTapDay",
        type: "boolean",
        name: "onTouchTapDay",
        required: false
      },
      onTouchTapOk: {
        title: "Enable onTouchTapOk",
        type: "boolean",
        name: "onTouchTapOk",
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
      }
    },
    output: {
      component: {
        title: "Calendar",
        type: "Component"
      },
      DateTimeFormat: {
        type: "any"
      },
      onTouchTapCancel: {
        type: "any"
      },
      onTouchTapDay: {
        type: "any"
      },
      onTouchTapOk: {
        type: "any"
      },
      shouldDisableDate: {
        type: "any"
      }
    }
  }
}