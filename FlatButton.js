module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/FlatButton/FlatButton": require('material-ui/FlatButton/FlatButton')
    }
  },
  name: "FlatButton",
  ports: {
    input: {
      backgroundColor: {
        type: "string",
        name: "backgroundColor"
      },
      children: {
        type: "node",
        name: "children"
      },
      disabled: {
        type: "boolean",
        name: "disabled",
        "default": false
      },
      hoverColor: {
        type: "string",
        name: "hoverColor"
      },
      href: {
        type: "string",
        name: "href"
      },
      icon: {
        type: "node",
        name: "icon"
      },
      label: {
        type: "custom",
        name: "label"
      },
      labelPosition: {
        type: "enum",
        name: "labelPosition",
        "default": ""
      },
      labelStyle: {
        type: "object",
        name: "labelStyle",
        "default": {}
      },
      onKeyboardFocus: {
        title: "Enable onKeyboardFocus",
        type: "boolean",
        name: "onKeyboardFocus",
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
      onTouchStart: {
        title: "Enable onTouchStart",
        type: "boolean",
        name: "onTouchStart",
        "default": false
      },
      primary: {
        type: "boolean",
        name: "primary",
        "default": false
      },
      rippleColor: {
        type: "string",
        name: "rippleColor"
      },
      secondary: {
        type: "boolean",
        name: "secondary",
        "default": false
      },
      style: {
        type: "object",
        name: "style"
      }
    },
    output: {
      component: {
        title: "FlatButton",
        type: "Component"
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
      onTouchStart: {
        type: "any"
      }
    }
  }
}