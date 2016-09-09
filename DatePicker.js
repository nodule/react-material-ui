module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/DatePicker/DatePicker": require('material-ui/DatePicker/DatePicker')
    }
  },
  name: "DatePicker",
  ports: {
    input: {
      DateTimeFormat: {
        title: "Enable DateTimeFormat",
        type: "boolean",
        name: "DateTimeFormat"
      },
      autoOk: {
        type: "boolean",
        name: "autoOk",
        "default": false
      },
      cancelLabel: {
        type: "node",
        name: "cancelLabel"
      },
      className: {
        type: "string",
        name: "className"
      },
      container: {
        type: "enum",
        name: "container",
        "default": ""
      },
      defaultDate: {
        type: "object",
        name: "defaultDate"
      },
      dialogContainerStyle: {
        type: "object",
        name: "dialogContainerStyle"
      },
      disableYearSelection: {
        type: "boolean",
        name: "disableYearSelection",
        "default": false
      },
      disabled: {
        type: "boolean",
        name: "disabled",
        "default": false
      },
      firstDayOfWeek: {
        type: "number",
        name: "firstDayOfWeek",
        "default": 0
      },
      formatDate: {
        title: "Enable formatDate",
        type: "boolean",
        name: "formatDate"
      },
      locale: {
        type: "string",
        name: "locale"
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
        name: "okLabel"
      },
      onChange: {
        title: "Enable onChange",
        type: "boolean",
        name: "onChange"
      },
      onDismiss: {
        title: "Enable onDismiss",
        type: "boolean",
        name: "onDismiss"
      },
      onFocus: {
        title: "Enable onFocus",
        type: "boolean",
        name: "onFocus"
      },
      onShow: {
        title: "Enable onShow",
        type: "boolean",
        name: "onShow"
      },
      onTouchTap: {
        title: "Enable onTouchTap",
        type: "boolean",
        name: "onTouchTap"
      },
      shouldDisableDate: {
        title: "Enable shouldDisableDate",
        type: "boolean",
        name: "shouldDisableDate"
      },
      style: {
        type: "object",
        name: "style",
        "default": {}
      },
      textFieldStyle: {
        type: "object",
        name: "textFieldStyle"
      },
      value: {
        type: "object",
        name: "value"
      }
    },
    output: {
      component: {
        title: "DatePicker",
        type: "Component"
      },
      DateTimeFormat: {
        type: "any"
      },
      formatDate: {
        type: "any"
      },
      onChange: {
        type: "any"
      },
      onDismiss: {
        type: "any"
      },
      onFocus: {
        type: "any"
      },
      onShow: {
        type: "any"
      },
      onTouchTap: {
        type: "any"
      },
      shouldDisableDate: {
        type: "any"
      }
    }
  }
}