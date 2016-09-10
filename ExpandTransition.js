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
        type: "array",
        propType: "node",
        name: "children",
        required: false
      },
      enterDelay: {
        type: "number",
        name: "enterDelay",
        "default": 0
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
        title: "ExpandTransition",
        type: "Component"
      }
    }
  }
}