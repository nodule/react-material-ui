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
        name: "actAsExpander",
        required: false
      },
      children: {
        type: "array",
        propType: "node",
        name: "children",
        required: false
      },
      expandable: {
        type: "boolean",
        name: "expandable",
        required: false
      },
      showExpandableButton: {
        type: "boolean",
        name: "showExpandableButton",
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
        title: "CardActions",
        type: "Component"
      }
    }
  }
}