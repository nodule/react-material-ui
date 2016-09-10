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
        type: "array",
        propType: "node",
        name: "children",
        required: false
      },
      inset: {
        type: "boolean",
        name: "inset",
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
        title: "Subheader",
        type: "Component"
      }
    }
  }
}