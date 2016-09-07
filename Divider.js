module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Divider/Divider": require('material-ui/Divider/Divider')
    }
  },
  name: "Divider",
  ports: {
    input: {
      className: {
        type: "string",
        name: "className"
      },
      inset: {
        type: "boolean",
        name: "inset",
        "default": false
      },
      style: {
        type: "object",
        name: "style"
      }
    },
    output: {
      component: {
        title: "Divider",
        type: "Component"
      }
    }
  }
}