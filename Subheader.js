module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Subheader/Subheader": require('material-ui/Subheader/Subheader')
    }
  },
  name: "Subheader",
  ports: {
    input: {
      children: {
        type: "node",
        name: "children"
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
        title: "Subheader",
        type: "Component"
      }
    }
  }
}