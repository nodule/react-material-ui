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
        name: "childStyle"
      },
      children: {
        type: "node",
        name: "children"
      },
      enterDelay: {
        type: "number",
        name: "enterDelay",
        "default": ""
      },
      maxScale: {
        type: "number",
        name: "maxScale"
      },
      minScale: {
        type: "number",
        name: "minScale"
      },
      style: {
        type: "object",
        name: "style"
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