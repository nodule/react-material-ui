module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Badge/Badge": require('material-ui/Badge/Badge')
    }
  },
  name: "Badge",
  ports: {
    input: {
      badgeContent: {
        type: "node",
        name: "badgeContent",
        required: true
      },
      badgeStyle: {
        type: "object",
        name: "badgeStyle",
        required: false
      },
      children: {
        type: "array",
        propType: "node",
        name: "children",
        required: false
      },
      className: {
        type: "string",
        name: "className",
        required: false
      },
      primary: {
        type: "boolean",
        name: "primary",
        "default": false
      },
      secondary: {
        type: "boolean",
        name: "secondary",
        "default": false
      },
      style: {
        type: "object",
        name: "style",
        required: false
      }
    },
    output: {
      component: {
        title: "Badge",
        type: "Component"
      }
    }
  }
}