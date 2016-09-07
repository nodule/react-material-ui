module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Card/CardTitle": require('material-ui/Card/CardTitle')
    }
  },
  name: "CardTitle",
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
      },
      subtitle: {
        type: "node",
        name: "subtitle"
      },
      subtitleColor: {
        type: "string",
        name: "subtitleColor"
      },
      subtitleStyle: {
        type: "object",
        name: "subtitleStyle"
      },
      title: {
        type: "node",
        name: "title"
      },
      titleColor: {
        type: "string",
        name: "titleColor"
      },
      titleStyle: {
        type: "object",
        name: "titleStyle"
      }
    },
    output: {
      component: {
        title: "CardTitle",
        type: "Component"
      }
    }
  }
}