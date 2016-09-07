module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Popover/PopoverAnimationVertical": require('material-ui/Popover/PopoverAnimationVertical')
    }
  },
  name: "PopoverAnimationVertical",
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
      open: {
        type: "boolean",
        name: "open"
      },
      style: {
        type: "object",
        name: "style",
        "default": {}
      },
      targetOrigin: {
        type: "custom",
        name: "targetOrigin"
      },
      zDepth: {
        type: "custom",
        name: "zDepth",
        "default": null
      }
    },
    output: {
      component: {
        title: "PopoverAnimationVertical",
        type: "Component"
      }
    }
  }
}