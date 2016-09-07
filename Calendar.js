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
        name: "autoOk"
      },
      cancelLabel: {
        type: "node",
        name: "cancelLabel"
      },
      disableYearSelection: {
        type: "boolean",
        name: "disableYearSelection",
        "default": false
      },
      firstDayOfWeek: {
        type: "number",
        name: "firstDayOfWeek"
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
        name: "mode"
      },
      okLabel: {
        type: "node",
        name: "okLabel"
      },
      onTouchTapCancel: {
        title: "Enable onTouchTapCancel",
        type: "boolean",
        name: "onTouchTapCancel"
      },
      onTouchTapDay: {
        title: "Enable onTouchTapDay",
        type: "boolean",
        name: "onTouchTapDay"
      },
      onTouchTapOk: {
        title: "Enable onTouchTapOk",
        type: "boolean",
        name: "onTouchTapOk"
      },
      open: {
        type: "boolean",
        name: "open"
      },
      shouldDisableDate: {
        title: "Enable shouldDisableDate",
        type: "boolean",
        name: "shouldDisableDate"
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