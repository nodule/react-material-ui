module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/RadioButton/RadioButton": require('material-ui/RadioButton/RadioButton')
    }
  },
  name: "RadioButton",
  ports: {
    input: {
      checked: {
        type: "boolean",
        name: "checked",
        "default": false
      },
      checkedIcon: {
        type: "element",
        name: "checkedIcon",
        required: false
      },
      disabled: {
        type: "boolean",
        name: "disabled",
        "default": false
      },
      iconStyle: {
        type: "object",
        name: "iconStyle",
        required: false
      },
      inputStyle: {
        type: "object",
        name: "inputStyle",
        required: false
      },
      labelPosition: {
        type: "enum",
        name: "labelPosition",
        "default": ""
      },
      labelStyle: {
        type: "object",
        name: "labelStyle",
        required: false
      },
      onCheck: {
        title: "Enable onCheck",
        type: "boolean",
        name: "onCheck",
        required: false
      },
      style: {
        type: "object",
        name: "style",
        required: false
      },
      uncheckedIcon: {
        type: "element",
        name: "uncheckedIcon",
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
        title: "RadioButton",
        type: "Component"
      },
      onCheck: {
        type: "any"
      }
    }
  }
}