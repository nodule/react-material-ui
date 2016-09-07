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
        name: "elementStyle"
      },
      iconStyle: {
        type: "object",
        name: "iconStyle"
      },
      inputStyle: {
        type: "object",
        name: "inputStyle"
      },
      label: {
        type: "string",
        name: "label"
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
      onToggle: {
        title: "Enable onToggle",
        type: "boolean",
        name: "onToggle"
      },
      rippleStyle: {
        type: "object",
        name: "rippleStyle"
      },
      style: {
        type: "object",
        name: "style"
      },
      thumbStyle: {
        type: "object",
        name: "thumbStyle"
      },
      toggled: {
        type: "boolean",
        name: "toggled"
      },
      trackStyle: {
        type: "object",
        name: "trackStyle"
      },
      valueLink: {
        type: "object",
        name: "valueLink"
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