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
        title: "PopoverAnimationDefault",
        type: "Component"
      }
    }
  }
}