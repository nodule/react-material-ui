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
        type: "array",
        propType: "node",
        name: "children",
        required: false
      },
      className: {
        type: "string",
        name: "className",
        required: false
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
        name: "href",
        required: false
      },
      iconClassName: {
        type: "string",
        name: "iconClassName",
        required: false
      },
      iconStyle: {
        type: "object",
        name: "iconStyle",
        "default": {}
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
      onKeyboardFocus: {
        title: "Enable onKeyboardFocus",
        type: "boolean",
        name: "onKeyboardFocus",
        required: false
      },
      onMouseEnter: {
        title: "Enable onMouseEnter",
        type: "boolean",
        name: "onMouseEnter",
        required: false
      },
      onMouseLeave: {
        title: "Enable onMouseLeave",
        type: "boolean",
        name: "onMouseLeave",
        required: false
      },
      onMouseOut: {
        title: "Enable onMouseOut",
        type: "boolean",
        name: "onMouseOut",
        required: false
      },
      style: {
        type: "object",
        name: "style",
        required: false
      },
      tooltip: {
        type: "node",
        name: "tooltip",
        required: false
      },
      tooltipPosition: {
        type: "custom",
        name: "tooltipPosition",
        "default": null
      },
      tooltipStyles: {
        type: "object",
        name: "tooltipStyles",
        required: false
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