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
      open: {
        type: "boolean",
        name: "open",
        required: true
      },
      style: {
        type: "object",
        name: "style",
        "default": {}
      },
      targetOrigin: {
        type: "custom",
        name: "targetOrigin",
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
        title: "PopoverAnimationVertical",
        type: "Component"
      }
    }
  }
}