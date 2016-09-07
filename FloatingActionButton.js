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
      disabledColor: {
        type: "string",
        name: "disabledColor"
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
        name: "iconStyle"
      },
      mini: {
        type: "boolean",
        name: "mini",
        "default": false
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
      secondary: {
        type: "boolean",
        name: "secondary",
        "default": false
      },
      style: {
        type: "object",
        name: "style"
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