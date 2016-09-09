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
        name: "action",
        required: false
      },
      autoHideDuration: {
        type: "number",
        name: "autoHideDuration",
        required: false
      },
      bodyStyle: {
        type: "object",
        name: "bodyStyle",
        required: false
      },
      className: {
        type: "string",
        name: "className",
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
      onRequestClose: {
        title: "Enable onRequestClose",
        type: "boolean",
        name: "onRequestClose",
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