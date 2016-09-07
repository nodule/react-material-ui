module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Toolbar/Toolbar": require('material-ui/Toolbar/Toolbar')
    }
  },
  name: "Toolbar",
  ports: {
    input: {
      children: {
        type: "node",
        name: "children"
      },
      className: {
        type: "string",
        name: "className"
      },
      noGutter: {
        type: "boolean",
        name: "noGutter",
        "default": false
      },
      style: {
        type: "object",
        name: "style"
      }
    },
    output: {
      component: {
        title: "Toolbar",
        type: "Component"
      }
    }
  }
}