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
      },
      subtitle: {
        type: "node",
        name: "subtitle",
        required: false
      },
      subtitleColor: {
        type: "string",
        name: "subtitleColor",
        required: false
      },
      subtitleStyle: {
        type: "object",
        name: "subtitleStyle",
        required: false
      },
      title: {
        type: "node",
        name: "title",
        required: false
      },
      titleColor: {
        type: "string",
        name: "titleColor",
        required: false
      },
      titleStyle: {
        type: "object",
        name: "titleStyle",
        required: false
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