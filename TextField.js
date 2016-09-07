module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/TextField/TextField": require('material-ui/TextField/TextField')
    }
  },
  name: "TextField",
  ports: {
    input: {
      children: {
        type: "node",
        name: "children"
      },
      className: {
        type: "string",
        name: "className"
      },
      defaultValue: {
        type: "any",
        name: "defaultValue"
      },
      disabled: {
        type: "boolean",
        name: "disabled",
        "default": false
      },
      errorStyle: {
        type: "object",
        name: "errorStyle"
      },
      errorText: {
        type: "node",
        name: "errorText"
      },
      floatingLabelFixed: {
        type: "boolean",
        name: "floatingLabelFixed",
        "default": false
      },
      floatingLabelFocusStyle: {
        type: "object",
        name: "floatingLabelFocusStyle"
      },
      floatingLabelStyle: {
        type: "object",
        name: "floatingLabelStyle"
      },
      floatingLabelText: {
        type: "node",
        name: "floatingLabelText"
      },
      fullWidth: {
        type: "boolean",
        name: "fullWidth",
        "default": false
      },
      hintStyle: {
        type: "object",
        name: "hintStyle"
      },
      hintText: {
        type: "node",
        name: "hintText"
      },
      id: {
        type: "string",
        name: "id"
      },
      inputStyle: {
        type: "object",
        name: "inputStyle"
      },
      multiLine: {
        type: "boolean",
        name: "multiLine",
        "default": false
      },
      name: {
        type: "string",
        name: "name"
      },
      onBlur: {
        title: "Enable onBlur",
        type: "boolean",
        name: "onBlur"
      },
      onChange: {
        title: "Enable onChange",
        type: "boolean",
        name: "onChange"
      },
      onFocus: {
        title: "Enable onFocus",
        type: "boolean",
        name: "onFocus"
      },
      rows: {
        type: "number",
        name: "rows",
        "default": ""
      },
      rowsMax: {
        type: "number",
        name: "rowsMax"
      },
      style: {
        type: "object",
        name: "style"
      },
      textareaStyle: {
        type: "object",
        name: "textareaStyle"
      },
      type: {
        type: "string",
        name: "type",
        "default": ""
      },
      underlineDisabledStyle: {
        type: "object",
        name: "underlineDisabledStyle"
      },
      underlineFocusStyle: {
        type: "object",
        name: "underlineFocusStyle"
      },
      underlineShow: {
        type: "boolean",
        name: "underlineShow",
        "default": false
      },
      underlineStyle: {
        type: "object",
        name: "underlineStyle"
      },
      value: {
        type: "any",
        name: "value"
      }
    },
    output: {
      component: {
        title: "TextField",
        type: "Component"
      },
      onBlur: {
        type: "any"
      },
      onChange: {
        type: "any"
      },
      onFocus: {
        type: "any"
      }
    }
  }
}