module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Snackbar/SnackbarBody": require('material-ui/Snackbar/SnackbarBody')
    }
  },
  name: "SnackbarBody",
  ports: {
    input: {
      action: {
        type: "node",
        name: "action"
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
      open: {
        type: "boolean",
        name: "open"
      },
      style: {
        type: "object",
        name: "style"
      },
      width: {
        type: "number",
        name: "width"
      }
    },
    output: {
      component: {
        title: "SnackbarBody",
        type: "Component"
      },
      onActionTouchTap: {
        type: "any"
      }
    }
  }
}