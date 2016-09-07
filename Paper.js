module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Paper/Paper": require('material-ui/Paper/Paper')
    }
  },
  name: "Paper",
  ports: {
    input: {
      children: {
        type: "node",
        name: "children"
      },
      circle: {
        type: "boolean",
        name: "circle",
        "default": false
      },
      rounded: {
        type: "boolean",
        name: "rounded",
        "default": false
      },
      style: {
        type: "object",
        name: "style"
      },
      transitionEnabled: {
        type: "boolean",
        name: "transitionEnabled",
        "default": false
      },
      zDepth: {
        type: "custom",
        name: "zDepth",
        "default": null
      }
    },
    output: {
      component: {
        title: "Paper",
        type: "Component"
      }
    }
  }
}