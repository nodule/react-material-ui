module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/internal/ScaleIn": require('material-ui/internal/ScaleIn')
    }
  },
  name: "ScaleIn",
  ports: {
    input: {
      childStyle: {
        type: "object",
        name: "childStyle",
        required: false
      },
      children: {
        type: "node",
        name: "children",
        required: false
      },
      enterDelay: {
        type: "number",
        name: "enterDelay",
        "default": 0
      },
      maxScale: {
        type: "number",
        name: "maxScale",
        required: false
      },
      minScale: {
        type: "number",
        name: "minScale",
        required: false
      },
      style: {
        type: "object",
        name: "style",
        required: false
      }
    },
    output: {
      component: {
        title: "ScaleIn",
        type: "Component"
      }
    }
  }
}