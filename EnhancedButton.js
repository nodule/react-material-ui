module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/internal/EnhancedButton": require('material-ui/internal/EnhancedButton')
    }
  },
  name: "EnhancedButton",
  ports: {
    input: {
      centerRipple: {
        type: "boolean",
        name: "centerRipple"
      },
      children: {
        type: "node",
        name: "children"
      },
      containerElement: {
        type: "union",
        name: "containerElement",
        "default": null
      },
      disableFocusRipple: {
        type: "boolean",
        name: "disableFocusRipple"
      },
      disableKeyboardFocus: {
        type: "boolean",
        name: "disableKeyboardFocus"
      },
      disableTouchRipple: {
        type: "boolean",
        name: "disableTouchRipple"
      },
      disabled: {
        type: "boolean",
        name: "disabled"
      },
      focusRippleColor: {
        type: "string",
        name: "focusRippleColor"
      },
      focusRippleOpacity: {
        type: "number",
        name: "focusRippleOpacity"
      },
      href: {
        type: "string",
        name: "href"
      },
      keyboardFocused: {
        type: "boolean",
        name: "keyboardFocused"
      },
      onBlur: {
        title: "Enable onBlur",
        type: "boolean",
        name: "onBlur",
        "default": false
      },
      onClick: {
        title: "Enable onClick",
        type: "boolean",
        name: "onClick",
        "default": false
      },
      onFocus: {
        title: "Enable onFocus",
        type: "boolean",
        name: "onFocus",
        "default": false
      },
      onKeyDown: {
        title: "Enable onKeyDown",
        type: "boolean",
        name: "onKeyDown",
        "default": false
      },
      onKeyUp: {
        title: "Enable onKeyUp",
        type: "boolean",
        name: "onKeyUp",
        "default": false
      },
      onKeyboardFocus: {
        title: "Enable onKeyboardFocus",
        type: "boolean",
        name: "onKeyboardFocus",
        "default": false
      },
      onMouseDown: {
        title: "Enable onMouseDown",
        type: "boolean",
        name: "onMouseDown",
        "default": false
      },
      onMouseEnter: {
        title: "Enable onMouseEnter",
        type: "boolean",
        name: "onMouseEnter",
        "default": false
      },
      onMouseLeave: {
        title: "Enable onMouseLeave",
        type: "boolean",
        name: "onMouseLeave",
        "default": false
      },
      onMouseUp: {
        title: "Enable onMouseUp",
        type: "boolean",
        name: "onMouseUp",
        "default": false
      },
      onTouchEnd: {
        title: "Enable onTouchEnd",
        type: "boolean",
        name: "onTouchEnd",
        "default": false
      },
      onTouchStart: {
        title: "Enable onTouchStart",
        type: "boolean",
        name: "onTouchStart",
        "default": false
      },
      onTouchTap: {
        title: "Enable onTouchTap",
        type: "boolean",
        name: "onTouchTap",
        "default": false
      },
      style: {
        type: "object",
        name: "style"
      },
      tabIndex: {
        type: "number",
        name: "tabIndex",
        "default": 0
      },
      touchRippleColor: {
        type: "string",
        name: "touchRippleColor"
      },
      touchRippleOpacity: {
        type: "number",
        name: "touchRippleOpacity"
      },
      type: {
        type: "string",
        name: "type",
        "default": ""
      }
    },
    output: {
      component: {
        title: "EnhancedButton",
        type: "Component"
      },
      onBlur: {
        type: "any"
      },
      onClick: {
        type: "any"
      },
      onFocus: {
        type: "any"
      },
      onKeyDown: {
        type: "any"
      },
      onKeyUp: {
        type: "any"
      },
      onKeyboardFocus: {
        type: "any"
      },
      onMouseDown: {
        type: "any"
      },
      onMouseEnter: {
        type: "any"
      },
      onMouseLeave: {
        type: "any"
      },
      onMouseUp: {
        type: "any"
      },
      onTouchEnd: {
        type: "any"
      },
      onTouchStart: {
        type: "any"
      },
      onTouchTap: {
        type: "any"
      }
    }
  }
}