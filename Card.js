module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Card/Card": require('material-ui/Card/Card')
    }
  },
  name: "Card",
  ports: {
    input: {
      children: {
        type: "node",
        name: "children",
        required: false
      },
      containerStyle: {
        type: "object",
        name: "containerStyle",
        required: false
      },
      expandable: {
        type: "boolean",
        name: "expandable",
        "default": false
      },
      expanded: {
        type: "boolean",
        name: "expanded",
        "default": false
      },
      initiallyExpanded: {
        type: "boolean",
        name: "initiallyExpanded",
        "default": false
      },
      onExpandChange: {
        title: "Enable onExpandChange",
        type: "boolean",
        name: "onExpandChange",
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
        title: "Card",
        type: "Component"
      },
      onExpandChange: {
        type: "any"
      }
    }
  }
}