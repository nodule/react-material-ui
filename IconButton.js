module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/IconButton/IconButton": require('material-ui/IconButton/IconButton')
    }
  },
  name: "IconButton",
  ports: {
    input: {
      children: {
        type: "node",
        name: "children"
      },
      className: {
        type: "string",
        name: "className"
      },
      disableTouchRipple: {
        type: "boolean",
        name: "disableTouchRipple",
        "default": false
      },
      disabled: {
        type: "boolean",
        name: "disabled",
        "default": false
      },
      href: {
        type: "string",
        name: "href"
      },
      iconClassName: {
        type: "string",
        name: "iconClassName"
      },
      iconStyle: {
        type: "object",
        name: "iconStyle",
        "default": {}
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
      onKeyboardFocus: {
        title: "Enable onKeyboardFocus",
        type: "boolean",
        name: "onKeyboardFocus"
      },
      onMouseEnter: {
        title: "Enable onMouseEnter",
        type: "boolean",
        name: "onMouseEnter"
      },
      onMouseLeave: {
        title: "Enable onMouseLeave",
        type: "boolean",
        name: "onMouseLeave"
      },
      onMouseOut: {
        title: "Enable onMouseOut",
        type: "boolean",
        name: "onMouseOut"
      },
      style: {
        type: "object",
        name: "style"
      },
      tooltip: {
        type: "node",
        name: "tooltip"
      },
      tooltipPosition: {
        type: "custom",
        name: "tooltipPosition",
        "default": null
      },
      tooltipStyles: {
        type: "object",
        name: "tooltipStyles"
      },
      touch: {
        type: "boolean",
        name: "touch",
        "default": false
      }
    },
    output: {
      component: {
        title: "IconButton",
        type: "Component"
      },
      onBlur: {
        type: "any"
      },
      onFocus: {
        type: "any"
      },
      onKeyboardFocus: {
        type: "any"
      },
      onMouseEnter: {
        type: "any"
      },
      onMouseLeave: {
        type: "any"
      },
      onMouseOut: {
        type: "any"
      }
    }
  }
}