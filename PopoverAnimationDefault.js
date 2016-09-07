module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Popover/PopoverAnimationDefault": require('material-ui/Popover/PopoverAnimationDefault')
    }
  },
  name: "PopoverAnimationDefault",
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
        title: "PopoverAnimationDefault",
        type: "Component"
      }
    }
  }
}