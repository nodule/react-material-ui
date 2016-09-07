module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Card/CardText": require('material-ui/Card/CardText')
    }
  },
  name: "CardText",
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
      color: {
        type: "string",
        name: "color"
      },
      expandable: {
        type: "boolean",
        name: "expandable"
      },
      style: {
        type: "object",
        name: "style"
      }
    },
    output: {
      component: {
        title: "CardText",
        type: "Component"
      }
    }
  }
}