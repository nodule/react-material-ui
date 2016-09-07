module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/TimePicker/TimePicker": require('material-ui/TimePicker/TimePicker')
    }
  },
  name: "TimePicker",
  ports: {
    input: {
      autoOk: {
        type: "boolean",
        name: "autoOk",
        "default": false
      },
      cancelLabel: {
        type: "node",
        name: "cancelLabel",
        "default": null
      },
      defaultTime: {
        type: "object",
        name: "defaultTime",
        "default": {}
      },
      dialogBodyStyle: {
        type: "object",
        name: "dialogBodyStyle"
      },
      dialogStyle: {
        type: "object",
        name: "dialogStyle"
      },
      disabled: {
        type: "boolean",
        name: "disabled",
        "default": false
      },
      format: {
        type: "enum",
        name: "format",
        "default": ""
      },
      okLabel: {
        type: "node",
        name: "okLabel",
        "default": null
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
      pedantic: {
        type: "boolean",
        name: "pedantic",
        "default": false
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
        name: "value",
        "default": {}
      }
    },
    output: {
      component: {
        title: "TimePicker",
        type: "Component"
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
      }
    }
  }
}