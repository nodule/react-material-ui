module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Drawer/Drawer": require('material-ui/Drawer/Drawer')
    }
  },
  name: "Drawer",
  ports: {
    input: {
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
      containerClassName: {
        type: "string",
        name: "containerClassName",
        required: false
      },
      containerStyle: {
        type: "object",
        name: "containerStyle",
        required: false
      },
      disableSwipeToOpen: {
        type: "boolean",
        name: "disableSwipeToOpen",
        "default": false
      },
      docked: {
        type: "boolean",
        name: "docked",
        "default": false
      },
      onRequestChange: {
        title: "Enable onRequestChange",
        type: "boolean",
        name: "onRequestChange",
        required: false
      },
      open: {
        type: "boolean",
        name: "open",
        "default": false
      },
      openSecondary: {
        type: "boolean",
        name: "openSecondary",
        "default": false
      },
      overlayClassName: {
        type: "string",
        name: "overlayClassName",
        required: false
      },
      overlayStyle: {
        type: "object",
        name: "overlayStyle",
        required: false
      },
      style: {
        type: "object",
        name: "style",
        required: false
      },
      swipeAreaWidth: {
        type: "number",
        name: "swipeAreaWidth",
        "default": 0
      },
      width: {
        type: "number",
        name: "width",
        "default": 0
      },
      zDepth: {
        type: "custom",
        name: "zDepth",
        "default": null
      }
    },
    output: {
      component: {
        title: "Drawer",
        type: "Component"
      },
      onRequestChange: {
        type: "any"
      }
    }
  }
}