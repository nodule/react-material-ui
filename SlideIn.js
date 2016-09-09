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
        name: "childStyle",
        required: false
      },
      children: {
        type: "node",
        name: "children",
        required: false
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
        name: "style",
        required: false
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