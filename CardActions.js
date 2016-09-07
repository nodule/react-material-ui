module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Card/CardActions": require('material-ui/Card/CardActions')
    }
  },
  name: "CardActions",
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
      showExpandableButton: {
        type: "boolean",
        name: "showExpandableButton"
      },
      style: {
        type: "object",
        name: "style"
      }
    },
    output: {
      component: {
        title: "CardActions",
        type: "Component"
      }
    }
  }
}