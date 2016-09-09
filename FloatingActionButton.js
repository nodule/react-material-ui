module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/FloatingActionButton/FloatingActionButton": require('material-ui/FloatingActionButton/FloatingActionButton')
    }
  },
  name: "FloatingActionButton",
  ports: {
    input: {
      backgroundColor: {
        type: "string",
        name: "backgroundColor",
        required: false
      },
      children: {
        type: "node",
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
      disabledColor: {
        type: "string",
        name: "disabledColor",
        required: false
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
        required: false
      },
      mini: {
        type: "boolean",
        name: "mini",
        "default": false
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
      secondary: {
        type: "boolean",
        name: "secondary",
        "default": false
      },
      style: {
        type: "object",
        name: "style",
        required: false
      },
      zDepth: {
        type: "custom",
        name: "zDepth",
        "default": null
      }
    },
    output: {
      component: {
        title: "FloatingActionButton",
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