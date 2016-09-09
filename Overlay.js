module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/internal/Overlay": require('material-ui/internal/Overlay')
    }
  },
  name: "Overlay",
  ports: {
    input: {
      autoLockScrolling: {
        type: "boolean",
        name: "autoLockScrolling",
        "default": false
      },
      show: {
        type: "boolean",
        name: "show",
        required: true
      },
      style: {
        type: "object",
        name: "style",
        "default": {}
      },
      transitionEnabled: {
        type: "boolean",
        name: "transitionEnabled",
        "default": false
      }
    },
    output: {
      component: {
        title: "Overlay",
        type: "Component"
      }
    }
  }
}