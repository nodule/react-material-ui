module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/SelectField/SelectField": require('material-ui/SelectField/SelectField')
    }
  },
  name: "SelectField",
  ports: {
    input: {
      autoWidth: {
        type: "boolean",
        name: "autoWidth",
        "default": false
      },
      children: {
        type: "node",
        name: "children"
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
        name: "floatingLabelFixed"
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
      iconStyle: {
        type: "object",
        name: "iconStyle"
      },
      id: {
        type: "string",
        name: "id"
      },
      labelStyle: {
        type: "object",
        name: "labelStyle"
      },
      maxHeight: {
        type: "number",
        name: "maxHeight"
      },
      menuStyle: {
        type: "object",
        name: "menuStyle"
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
      style: {
        type: "object",
        name: "style"
      },
      underlineDisabledStyle: {
        type: "object",
        name: "underlineDisabledStyle"
      },
      underlineFocusStyle: {
        type: "object",
        name: "underlineFocusStyle"
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
        title: "SelectField",
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