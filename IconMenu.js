module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/IconMenu/IconMenu": require('material-ui/IconMenu/IconMenu')
    }
  },
  name: "IconMenu",
  ports: {
    input: {
      anchorOrigin: {
        type: "custom",
        name: "anchorOrigin",
        "default": null
      },
      animated: {
        type: "boolean",
        name: "animated",
        "default": false
      },
      animation: {
        title: "Enable animation",
        type: "boolean",
        name: "animation"
      },
      children: {
        type: "node",
        name: "children"
      },
      className: {
        type: "string",
        name: "className"
      },
      iconButtonElement: {
        type: "element",
        name: "iconButtonElement"
      },
      iconStyle: {
        type: "object",
        name: "iconStyle"
      },
      menuStyle: {
        type: "object",
        name: "menuStyle"
      },
      multiple: {
        type: "boolean",
        name: "multiple",
        "default": false
      },
      onItemTouchTap: {
        title: "Enable onItemTouchTap",
        type: "boolean",
        name: "onItemTouchTap",
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
      onRequestChange: {
        title: "Enable onRequestChange",
        type: "boolean",
        name: "onRequestChange",
        "default": false
      },
      onTouchTap: {
        title: "Enable onTouchTap",
        type: "boolean",
        name: "onTouchTap",
        "default": false
      },
      open: {
        type: "boolean",
        name: "open",
        "default": false
      },
      style: {
        type: "object",
        name: "style"
      },
      targetOrigin: {
        type: "custom",
        name: "targetOrigin",
        "default": null
      },
      touchTapCloseDelay: {
        type: "number",
        name: "touchTapCloseDelay",
        "default": ""
      },
      useLayerForClickAway: {
        type: "boolean",
        name: "useLayerForClickAway",
        "default": false
      }
    },
    output: {
      component: {
        title: "IconMenu",
        type: "Component"
      },
      animation: {
        type: "any"
      },
      onItemTouchTap: {
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
      onRequestChange: {
        type: "any"
      },
      onTouchTap: {
        type: "any"
      }
    }
  }
}