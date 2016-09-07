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
        name: "checkedIcon"
      },
      disabled: {
        type: "boolean",
        name: "disabled",
        "default": false
      },
      iconStyle: {
        type: "object",
        name: "iconStyle"
      },
      inputStyle: {
        type: "object",
        name: "inputStyle"
      },
      labelPosition: {
        type: "enum",
        name: "labelPosition",
        "default": ""
      },
      labelStyle: {
        type: "object",
        name: "labelStyle"
      },
      onCheck: {
        title: "Enable onCheck",
        type: "boolean",
        name: "onCheck"
      },
      style: {
        type: "object",
        name: "style"
      },
      uncheckedIcon: {
        type: "element",
        name: "uncheckedIcon"
      },
      value: {
        type: "any",
        name: "value"
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