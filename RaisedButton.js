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
        name: "backgroundColor",
        required: false
      },
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
      disabled: {
        type: "boolean",
        name: "disabled",
        "default": false
      },
      disabledBackgroundColor: {
        type: "string",
        name: "disabledBackgroundColor",
        required: false
      },
      disabledLabelColor: {
        type: "string",
        name: "disabledLabelColor",
        required: false
      },
      fullWidth: {
        type: "boolean",
        name: "fullWidth",
        "default": false
      },
      href: {
        type: "string",
        name: "href",
        required: false
      },
      icon: {
        type: "node",
        name: "icon",
        required: false
      },
      label: {
        type: "custom",
        name: "label",
        required: false
      },
      labelColor: {
        type: "string",
        name: "labelColor",
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
      onMouseDown: {
        title: "Enable onMouseDown",
        type: "boolean",
        name: "onMouseDown",
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
      onMouseUp: {
        title: "Enable onMouseUp",
        type: "boolean",
        name: "onMouseUp",
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
      primary: {
        type: "boolean",
        name: "primary",
        "default": false
      },
      rippleStyle: {
        type: "object",
        name: "rippleStyle",
        required: false
      },
      secondary: {
        type: "boolean",
        name: "secondary",
        "default": false
      },
      style: {
        type: "object",
        name: "style",
        required: false
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