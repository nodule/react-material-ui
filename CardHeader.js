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
        name: "actAsExpander"
      },
      avatar: {
        type: "node",
        name: "avatar",
        "default": null
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
      textStyle: {
        type: "object",
        name: "textStyle"
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
        title: "CardHeader",
        type: "Component"
      }
    }
  }
}