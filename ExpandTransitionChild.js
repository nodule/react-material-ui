module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/internal/ExpandTransitionChild": require('material-ui/internal/ExpandTransitionChild')
    }
  },
  name: "ExpandTransitionChild",
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
      style: {
        type: "object",
        name: "style",
        required: false
      },
      transitionDelay: {
        type: "number",
        name: "transitionDelay",
        "default": 0
      },
      transitionDuration: {
        type: "number",
        name: "transitionDuration",
        "default": 0
      }
    },
    output: {
      component: {
        title: "ExpandTransitionChild",
        type: "Component"
      }
    }
  }
}