module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Chip/Chip": require('material-ui/Chip/Chip')
    }
  },
  name: "Chip",
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
        type: "node",
        name: "className",
        required: false
      },
      labelColor: {
        type: "string",
        name: "labelColor",
        required: false
      },
      labelStyle: {
        type: "object",
        name: "labelStyle",
        required: false
      },
      onBlur: {
        title: "Enable onBlur",
        type: "boolean",
        name: "onBlur",
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
      onRequestDelete: {
        title: "Enable onRequestDelete",
        type: "boolean",
        name: "onRequestDelete",
        required: false
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
        required: false
      },
      style: {
        type: "object",
        name: "style",
        required: false
      }
    },
    output: {
      component: {
        title: "Chip",
        type: "Component"
      },
      onBlur: {
        type: "any"
      },
      onFocus: {
        type: "any"
      },
      onKeyDown: {
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
      onRequestDelete: {
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