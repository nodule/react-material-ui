module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/internal/RenderToLayer": require('material-ui/internal/RenderToLayer')
    }
  },
  name: "RenderToLayer",
  ports: {
    input: {
      componentClickAway: {
        title: "Enable componentClickAway",
        type: "boolean",
        name: "componentClickAway"
      },
      open: {
        type: "boolean",
        name: "open"
      },
      render: {
        title: "Enable render",
        type: "boolean",
        name: "render"
      },
      useLayerForClickAway: {
        type: "boolean",
        name: "useLayerForClickAway",
        "default": false
      }
    },
    output: {
      component: {
        title: "RenderToLayer",
        type: "Component"
      },
      componentClickAway: {
        type: "any"
      },
      render: {
        type: "any"
      }
    }
  }
}