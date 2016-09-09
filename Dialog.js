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
        name: "actions",
        required: false
      },
      actionsContainerClassName: {
        type: "string",
        name: "actionsContainerClassName",
        required: false
      },
      actionsContainerStyle: {
        type: "object",
        name: "actionsContainerStyle",
        required: false
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
        name: "bodyClassName",
        required: false
      },
      bodyStyle: {
        type: "object",
        name: "bodyStyle",
        required: false
      },
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
      contentClassName: {
        type: "string",
        name: "contentClassName",
        required: false
      },
      contentStyle: {
        type: "object",
        name: "contentStyle",
        required: false
      },
      modal: {
        type: "boolean",
        name: "modal",
        "default": false
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
      repositionOnUpdate: {
        type: "boolean",
        name: "repositionOnUpdate",
        "default": false
      },
      style: {
        type: "object",
        name: "style",
        required: false
      },
      title: {
        type: "node",
        name: "title",
        required: false
      },
      titleClassName: {
        type: "string",
        name: "titleClassName",
        required: false
      },
      titleStyle: {
        type: "object",
        name: "titleStyle",
        required: false
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