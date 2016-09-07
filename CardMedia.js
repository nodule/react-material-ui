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
        name: "actAsExpander"
      },
      children: {
        type: "node",
        name: "children"
      },
      expandable: {
        type: "boolean",
        name: "expandable"
      },
      mediaStyle: {
        type: "object",
        name: "mediaStyle"
      },
      overlay: {
        type: "node",
        name: "overlay"
      },
      overlayContainerStyle: {
        type: "object",
        name: "overlayContainerStyle"
      },
      overlayContentStyle: {
        type: "object",
        name: "overlayContentStyle"
      },
      overlayStyle: {
        type: "object",
        name: "overlayStyle"
      },
      style: {
        type: "object",
        name: "style"
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