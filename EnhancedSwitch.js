module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/internal/EnhancedSwitch": require('material-ui/internal/EnhancedSwitch')
    }
  },
  name: "EnhancedSwitch",
  ports: {
    input: {
      checked: {
        type: "boolean",
        name: "checked",
        required: false
      },
      className: {
        type: "string",
        name: "className",
        required: false
      },
      defaultChecked: {
        type: "boolean",
        name: "defaultChecked",
        required: false
      },
      disableFocusRipple: {
        type: "boolean",
        name: "disableFocusRipple",
        required: false
      },
      disableTouchRipple: {
        type: "boolean",
        name: "disableTouchRipple",
        required: false
      },
      disabled: {
        type: "boolean",
        name: "disabled",
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
      inputType: {
        type: "string",
        name: "inputType",
        required: true
      },
      label: {
        type: "node",
        name: "label",
        required: false
      },
      labelPosition: {
        type: "enum",
        name: "labelPosition",
        required: false
      },
      labelStyle: {
        type: "object",
        name: "labelStyle",
        required: false
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
      onFocus: {
        title: "Enable onFocus",
        type: "boolean",
        name: "onFocus",
        required: false
      },
      onMouseDown: {
        title: "Enable onMouseDown",
        type: "boolean",
        name: "onMouseDown",
        required: false
      },
      onMouseLeave: {
        title: "Enable onMouseLeave",
        type: "boolean",
        name: "onMouseLeave",
        required: false
      },
      onMouseUp: {
        title: "Enable onMouseUp",
        type: "boolean",
        name: "onMouseUp",
        required: false
      },
      onParentShouldUpdate: {
        title: "Enable onParentShouldUpdate",
        type: "boolean",
        name: "onParentShouldUpdate",
        required: false
      },
      onSwitch: {
        title: "Enable onSwitch",
        type: "boolean",
        name: "onSwitch",
        required: false
      },
      onTouchEnd: {
        title: "Enable onTouchEnd",
        type: "boolean",
        name: "onTouchEnd",
        required: false
      },
      onTouchStart: {
        title: "Enable onTouchStart",
        type: "boolean",
        name: "onTouchStart",
        required: false
      },
      rippleColor: {
        type: "string",
        name: "rippleColor",
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
      switchElement: {
        type: "element",
        name: "switchElement",
        required: true
      },
      switched: {
        type: "boolean",
        name: "switched",
        required: true
      },
      thumbStyle: {
        type: "object",
        name: "thumbStyle",
        required: false
      },
      trackStyle: {
        type: "object",
        name: "trackStyle",
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
        title: "EnhancedSwitch",
        type: "Component"
      },
      onBlur: {
        type: "any"
      },
      onFocus: {
        type: "any"
      },
      onMouseDown: {
        type: "any"
      },
      onMouseLeave: {
        type: "any"
      },
      onMouseUp: {
        type: "any"
      },
      onParentShouldUpdate: {
        type: "any"
      },
      onSwitch: {
        type: "any"
      },
      onTouchEnd: {
        type: "any"
      },
      onTouchStart: {
        type: "any"
      }
    }
  }
}