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
        name: "children"
      },
      enterDelay: {
        type: "number",
        name: "enterDelay",
        "default": ""
      },
      maxScale: {
        type: "number",
        name: "maxScale",
        "default": ""
      },
      minScale: {
        type: "number",
        name: "minScale",
        "default": ""
      },
      style: {
        type: "object",
        name: "style"
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