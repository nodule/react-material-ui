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
        name: "action",
        required: false
      },
      message: {
        type: "node",
        name: "message",
        required: true
      },
      onActionTouchTap: {
        title: "Enable onActionTouchTap",
        type: "boolean",
        name: "onActionTouchTap",
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
        required: false
      },
      width: {
        type: "number",
        name: "width",
        required: true
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