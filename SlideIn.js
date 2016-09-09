module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/internal/SlideIn": require('material-ui/internal/SlideIn')
    }
  },
  name: "SlideIn",
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
      direction: {
        type: "enum",
        name: "direction",
        "default": ""
      },
      enterDelay: {
        type: "number",
        name: "enterDelay",
        "default": 0
      },
      style: {
        type: "object",
        name: "style"
      }
    },
    output: {
      component: {
        title: "SlideIn",
        type: "Component"
      }
    }
  }
}