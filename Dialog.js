module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Dialog/Dialog": require('material-ui/Dialog/Dialog')
    }
  },
  name: "Dialog",
  ports: {
    input: {
      actions: {
        type: "node",
        name: "actions"
      },
      actionsContainerClassName: {
        type: "string",
        name: "actionsContainerClassName"
      },
      actionsContainerStyle: {
        type: "object",
        name: "actionsContainerStyle"
      },
      autoDetectWindowHeight: {
        type: "boolean",
        name: "autoDetectWindowHeight",
        "default": false
      },
      autoScrollBodyContent: {
        type: "boolean",
        name: "autoScrollBodyContent",
        "default": false
      },
      bodyClassName: {
        type: "string",
        name: "bodyClassName"
      },
      bodyStyle: {
        type: "object",
        name: "bodyStyle"
      },
      children: {
        type: "node",
        name: "children"
      },
      className: {
        type: "string",
        name: "className"
      },
      contentClassName: {
        type: "string",
        name: "contentClassName"
      },
      contentStyle: {
        type: "object",
        name: "contentStyle"
      },
      modal: {
        type: "boolean",
        name: "modal",
        "default": false
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
      overlayClassName: {
        type: "string",
        name: "overlayClassName"
      },
      overlayStyle: {
        type: "object",
        name: "overlayStyle"
      },
      repositionOnUpdate: {
        type: "boolean",
        name: "repositionOnUpdate",
        "default": false
      },
      style: {
        type: "object",
        name: "style"
      },
      title: {
        type: "node",
        name: "title"
      },
      titleClassName: {
        type: "string",
        name: "titleClassName"
      },
      titleStyle: {
        type: "object",
        name: "titleStyle"
      }
    },
    output: {
      component: {
        title: "Dialog",
        type: "Component"
      },
      onRequestClose: {
        type: "any"
      }
    }
  }
}