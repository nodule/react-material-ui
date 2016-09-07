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
        name: "children"
      },
      containerStyle: {
        type: "object",
        name: "containerStyle"
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
        name: "onExpandChange"
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
        title: "Card",
        type: "Component"
      },
      onExpandChange: {
        type: "any"
      }
    }
  }
}