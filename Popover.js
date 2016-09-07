module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Popover/Popover": require('material-ui/Popover/Popover')
    }
  },
  name: "Popover",
  ports: {
    input: {
      anchorEl: {
        type: "object",
        name: "anchorEl"
      },
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
      autoCloseWhenOffScreen: {
        type: "boolean",
        name: "autoCloseWhenOffScreen",
        "default": false
      },
      canAutoPosition: {
        type: "boolean",
        name: "canAutoPosition",
        "default": false
      },
      children: {
        type: "node",
        name: "children"
      },
      className: {
        type: "string",
        name: "className"
      },
      onRequestClose: {
        title: "Enable onRequestClose",
        type: "boolean",
        name: "onRequestClose",
        "default": false
      },
      open: {
        type: "boolean",
        name: "open",
        "default": false
      },
      style: {
        type: "object",
        name: "style",
        "default": {}
      },
      targetOrigin: {
        type: "custom",
        name: "targetOrigin",
        "default": null
      },
      useLayerForClickAway: {
        type: "boolean",
        name: "useLayerForClickAway",
        "default": false
      },
      zDepth: {
        type: "custom",
        name: "zDepth",
        "default": null
      }
    },
    output: {
      component: {
        title: "Popover",
        type: "Component"
      },
      animation: {
        type: "any"
      },
      onRequestClose: {
        type: "any"
      }
    }
  }
}