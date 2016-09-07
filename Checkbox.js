module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Checkbox/Checkbox": require('material-ui/Checkbox/Checkbox')
    }
  },
  name: "Checkbox",
  ports: {
    input: {
      checked: {
        type: "boolean",
        name: "checked"
      },
      checkedIcon: {
        type: "element",
        name: "checkedIcon"
      },
      defaultChecked: {
        type: "boolean",
        name: "defaultChecked"
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
      valueLink: {
        type: "object",
        name: "valueLink"
      }
    },
    output: {
      component: {
        title: "Checkbox",
        type: "Component"
      },
      onCheck: {
        type: "any"
      }
    }
  }
}