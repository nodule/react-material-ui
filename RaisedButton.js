module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/RaisedButton/RaisedButton": require('material-ui/RaisedButton/RaisedButton')
    }
  },
  name: "RaisedButton",
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
      className: {
        type: "string",
        name: "className"
      },
      disabled: {
        type: "boolean",
        name: "disabled",
        "default": false
      },
      disabledBackgroundColor: {
        type: "string",
        name: "disabledBackgroundColor"
      },
      disabledLabelColor: {
        type: "string",
        name: "disabledLabelColor"
      },
      fullWidth: {
        type: "boolean",
        name: "fullWidth",
        "default": false
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
      labelColor: {
        type: "string",
        name: "labelColor"
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
      onMouseDown: {
        title: "Enable onMouseDown",
        type: "boolean",
        name: "onMouseDown"
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
      onMouseUp: {
        title: "Enable onMouseUp",
        type: "boolean",
        name: "onMouseUp"
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
      primary: {
        type: "boolean",
        name: "primary",
        "default": false
      },
      rippleStyle: {
        type: "object",
        name: "rippleStyle"
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
        title: "RaisedButton",
        type: "Component"
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
      }
    }
  }
}