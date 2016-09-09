module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/internal/ScaleInChild": require('material-ui/internal/ScaleInChild')
    }
  },
  name: "ScaleInChild",
  ports: {
    input: {
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
        "default": 0
      },
      minScale: {
        type: "number",
        name: "minScale",
        "default": 0
      },
      style: {
        type: "object",
        name: "style",
        required: false
      }
    },
    output: {
      component: {
        title: "ScaleInChild",
        type: "Component"
      }
    }
  }
}