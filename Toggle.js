module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Toggle/Toggle": require('material-ui/Toggle/Toggle')
    }
  },
  name: "Toggle",
  ports: {
    input: {
      defaultToggled: {
        type: "boolean",
        name: "defaultToggled",
        "default": false
      },
      disabled: {
        type: "boolean",
        name: "disabled",
        "default": false
      },
      elementStyle: {
        type: "object",
        name: "elementStyle",
        required: false
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
      label: {
        type: "string",
        name: "label",
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
      onToggle: {
        title: "Enable onToggle",
        type: "boolean",
        name: "onToggle",
        required: false
      },
      rippleStyle: {
        type: "object",
        name: "rippleStyle",
        required: false
      },
      style: {
        type: "object",
        name: "style",
        required: false
      },
      thumbStyle: {
        type: "object",
        name: "thumbStyle",
        required: false
      },
      toggled: {
        type: "boolean",
        name: "toggled",
        required: false
      },
      trackStyle: {
        type: "object",
        name: "trackStyle",
        required: false
      },
      valueLink: {
        type: "object",
        name: "valueLink",
        required: false
      }
    },
    output: {
      component: {
        title: "Toggle",
        type: "Component"
      },
      onToggle: {
        type: "any"
      }
    }
  }
}