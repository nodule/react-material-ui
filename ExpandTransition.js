module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/internal/ExpandTransition": require('material-ui/internal/ExpandTransition')
    }
  },
  name: "ExpandTransition",
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
      loading: {
        type: "boolean",
        name: "loading",
        "default": false
      },
      open: {
        type: "boolean",
        name: "open",
        "default": false
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
        title: "ExpandTransition",
        type: "Component"
      }
    }
  }
}