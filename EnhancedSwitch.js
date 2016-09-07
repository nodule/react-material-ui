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
        name: "checked"
      },
      className: {
        type: "string",
        name: "className"
      },
      defaultChecked: {
        type: "boolean",
        name: "defaultChecked"
      },
      disableFocusRipple: {
        type: "boolean",
        name: "disableFocusRipple"
      },
      disableTouchRipple: {
        type: "boolean",
        name: "disableTouchRipple"
      },
      disabled: {
        type: "boolean",
        name: "disabled"
      },
      iconStyle: {
        type: "object",
        name: "iconStyle"
      },
      inputStyle: {
        type: "object",
        name: "inputStyle"
      },
      inputType: {
        type: "string",
        name: "inputType"
      },
      label: {
        type: "node",
        name: "label"
      },
      labelPosition: {
        type: "enum",
        name: "labelPosition"
      },
      labelStyle: {
        type: "object",
        name: "labelStyle"
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
      onFocus: {
        title: "Enable onFocus",
        type: "boolean",
        name: "onFocus"
      },
      onMouseDown: {
        title: "Enable onMouseDown",
        type: "boolean",
        name: "onMouseDown"
      },
      onMouseLeave: {
        title: "Enable onMouseLeave",
        type: "boolean",
        name: "onMouseLeave"
      },
      onMouseUp: {
        title: "Enable onMouseUp",
        type: "boolean",
        name: "onMouseUp"
      },
      onParentShouldUpdate: {
        title: "Enable onParentShouldUpdate",
        type: "boolean",
        name: "onParentShouldUpdate"
      },
      onSwitch: {
        title: "Enable onSwitch",
        type: "boolean",
        name: "onSwitch"
      },
      onTouchEnd: {
        title: "Enable onTouchEnd",
        type: "boolean",
        name: "onTouchEnd"
      },
      onTouchStart: {
        title: "Enable onTouchStart",
        type: "boolean",
        name: "onTouchStart"
      },
      rippleColor: {
        type: "string",
        name: "rippleColor"
      },
      rippleStyle: {
        type: "object",
        name: "rippleStyle"
      },
      style: {
        type: "object",
        name: "style"
      },
      switchElement: {
        type: "element",
        name: "switchElement"
      },
      switched: {
        type: "boolean",
        name: "switched"
      },
      thumbStyle: {
        type: "object",
        name: "thumbStyle"
      },
      trackStyle: {
        type: "object",
        name: "trackStyle"
      },
      value: {
        type: "any",
        name: "value"
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