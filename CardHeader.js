module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Card/CardHeader": require('material-ui/Card/CardHeader')
    }
  },
  name: "CardHeader",
  ports: {
    input: {
      actAsExpander: {
        type: "boolean",
        name: "actAsExpander",
        required: false
      },
      avatar: {
        type: "node",
        name: "avatar",
        "default": null
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
      textStyle: {
        type: "object",
        name: "textStyle",
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
        title: "CardHeader",
        type: "Component"
      }
    }
  }
}