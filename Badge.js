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
        name: "badgeContent"
      },
      badgeStyle: {
        type: "object",
        name: "badgeStyle"
      },
      children: {
        type: "node",
        name: "children"
      },
      className: {
        type: "string",
        name: "className"
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
        name: "style"
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