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
        name: "children",
        required: false
      },
      className: {
        type: "string",
        name: "className",
        required: false
      },
      defaultValue: {
        type: "any",
        name: "defaultValue",
        required: false
      },
      disabled: {
        type: "boolean",
        name: "disabled",
        "default": false
      },
      errorStyle: {
        type: "object",
        name: "errorStyle",
        required: false
      },
      errorText: {
        type: "node",
        name: "errorText",
        required: false
      },
      floatingLabelFixed: {
        type: "boolean",
        name: "floatingLabelFixed",
        "default": false
      },
      floatingLabelFocusStyle: {
        type: "object",
        name: "floatingLabelFocusStyle",
        required: false
      },
      floatingLabelStyle: {
        type: "object",
        name: "floatingLabelStyle",
        required: false
      },
      floatingLabelText: {
        type: "node",
        name: "floatingLabelText",
        required: false
      },
      fullWidth: {
        type: "boolean",
        name: "fullWidth",
        "default": false
      },
      hintStyle: {
        type: "object",
        name: "hintStyle",
        required: false
      },
      hintText: {
        type: "node",
        name: "hintText",
        required: false
      },
      id: {
        type: "string",
        name: "id",
        required: false
      },
      inputStyle: {
        type: "object",
        name: "inputStyle",
        required: false
      },
      multiLine: {
        type: "boolean",
        name: "multiLine",
        "default": false
      },
      name: {
        type: "string",
        name: "name",
        required: false
      },
      onBlur: {
        title: "Enable onBlur",
        type: "boolean",
        name: "onBlur",
        required: false
      },
      onChange: {
        title: "Enable onChange",
        type: "boolean",
        name: "onChange",
        required: false
      },
      onFocus: {
        title: "Enable onFocus",
        type: "boolean",
        name: "onFocus",
        required: false
      },
      rows: {
        type: "number",
        name: "rows",
        "default": 0
      },
      rowsMax: {
        type: "number",
        name: "rowsMax",
        required: false
      },
      style: {
        type: "object",
        name: "style",
        required: false
      },
      textareaStyle: {
        type: "object",
        name: "textareaStyle",
        required: false
      },
      type: {
        type: "string",
        name: "type",
        "default": ""
      },
      underlineDisabledStyle: {
        type: "object",
        name: "underlineDisabledStyle",
        required: false
      },
      underlineFocusStyle: {
        type: "object",
        name: "underlineFocusStyle",
        required: false
      },
      underlineShow: {
        type: "boolean",
        name: "underlineShow",
        "default": false
      },
      underlineStyle: {
        type: "object",
        name: "underlineStyle",
        required: false
      },
      value: {
        type: "any",
        name: "value",
        required: false
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