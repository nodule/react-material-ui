module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Card/CardExpandable": require('material-ui/Card/CardExpandable')
    }
  },
  name: "CardExpandable",
  ports: {
    input: {
      expanded: {
        type: "boolean",
        name: "expanded",
        required: false
      },
      onExpanding: {
        title: "Enable onExpanding",
        type: "boolean",
        name: "onExpanding",
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
        title: "CardExpandable",
        type: "Component"
      },
      onExpanding: {
        type: "any"
      }
    }
  }
}