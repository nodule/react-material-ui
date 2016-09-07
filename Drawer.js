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
        name: "children"
      },
      className: {
        type: "string",
        name: "className"
      },
      containerClassName: {
        type: "string",
        name: "containerClassName"
      },
      containerStyle: {
        type: "object",
        name: "containerStyle"
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
        name: "onRequestChange"
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
        name: "overlayClassName"
      },
      overlayStyle: {
        type: "object",
        name: "overlayStyle"
      },
      style: {
        type: "object",
        name: "style"
      },
      swipeAreaWidth: {
        type: "number",
        name: "swipeAreaWidth",
        "default": ""
      },
      width: {
        type: "number",
        name: "width",
        "default": ""
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