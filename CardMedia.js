module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Card/CardMedia": require('material-ui/Card/CardMedia')
    }
  },
  name: "CardMedia",
  ports: {
    input: {
      actAsExpander: {
        type: "boolean",
        name: "actAsExpander",
        required: false
      },
      children: {
        type: "node",
        name: "children",
        required: false
      },
      expandable: {
        type: "boolean",
        name: "expandable",
        required: false
      },
      mediaStyle: {
        type: "object",
        name: "mediaStyle",
        required: false
      },
      overlay: {
        type: "node",
        name: "overlay",
        required: false
      },
      overlayContainerStyle: {
        type: "object",
        name: "overlayContainerStyle",
        required: false
      },
      overlayContentStyle: {
        type: "object",
        name: "overlayContentStyle",
        required: false
      },
      overlayStyle: {
        type: "object",
        name: "overlayStyle",
        required: false
      },
      style: {
        type: "object",
        name: "style",
        required: false
      }
    },
    output: {
      component: {
        title: "CardMedia",
        type: "Component"
      }
    }
  }
}