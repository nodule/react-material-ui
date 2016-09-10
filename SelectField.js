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
        type: "array",
        propType: "node",
        name: "children",
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
      iconStyle: {
        type: "object",
        name: "iconStyle",
        required: false
      },
      id: {
        type: "string",
        name: "id",
        required: false
      },
      labelStyle: {
        type: "object",
        name: "labelStyle",
        required: false
      },
      maxHeight: {
        type: "number",
        name: "maxHeight",
        required: false
      },
      menuStyle: {
        type: "object",
        name: "menuStyle",
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
      style: {
        type: "object",
        name: "style",
        required: false
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