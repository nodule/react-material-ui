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
        name: "children"
      },
      enterDelay: {
        type: "number",
        name: "enterDelay",
        "default": ""
      },
      style: {
        type: "object",
        name: "style"
      },
      transitionDelay: {
        type: "number",
        name: "transitionDelay",
        "default": ""
      },
      transitionDuration: {
        type: "number",
        name: "transitionDuration",
        "default": ""
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