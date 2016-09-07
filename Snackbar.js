module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Snackbar/Snackbar": require('material-ui/Snackbar/Snackbar')
    }
  },
  name: "Snackbar",
  ports: {
    input: {
      action: {
        type: "node",
        name: "action"
      },
      autoHideDuration: {
        type: "number",
        name: "autoHideDuration"
      },
      bodyStyle: {
        type: "object",
        name: "bodyStyle"
      },
      className: {
        type: "string",
        name: "className"
      },
      message: {
        type: "node",
        name: "message"
      },
      onActionTouchTap: {
        title: "Enable onActionTouchTap",
        type: "boolean",
        name: "onActionTouchTap"
      },
      onRequestClose: {
        title: "Enable onRequestClose",
        type: "boolean",
        name: "onRequestClose"
      },
      open: {
        type: "boolean",
        name: "open"
      },
      style: {
        type: "object",
        name: "style"
      }
    },
    output: {
      component: {
        title: "Snackbar",
        type: "Component"
      },
      onActionTouchTap: {
        type: "any"
      },
      onRequestClose: {
        type: "any"
      }
    }
  }
}