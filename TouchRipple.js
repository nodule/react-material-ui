module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/internal/TouchRipple": require('material-ui/internal/TouchRipple')
    }
  },
  name: "TouchRipple",
  ports: {
    input: {
      abortOnScroll: {
        type: "boolean",
        name: "abortOnScroll",
        "default": false
      },
      centerRipple: {
        type: "boolean",
        name: "centerRipple"
      },
      children: {
        type: "node",
        name: "children"
      },
      color: {
        type: "string",
        name: "color"
      },
      opacity: {
        type: "number",
        name: "opacity"
      },
      style: {
        type: "object",
        name: "style"
      }
    },
    output: {
      component: {
        title: "TouchRipple",
        type: "Component"
      }
    }
  }
}