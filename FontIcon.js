module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/FontIcon/FontIcon": require('material-ui/FontIcon/FontIcon')
    }
  },
  name: "FontIcon",
  ports: {
    input: {
      color: {
        type: "string",
        name: "color",
        required: false
      },
      hoverColor: {
        type: "string",
        name: "hoverColor",
        required: false
      },
      onMouseEnter: {
        title: "Enable onMouseEnter",
        type: "boolean",
        name: "onMouseEnter",
        "default": false
      },
      onMouseLeave: {
        title: "Enable onMouseLeave",
        type: "boolean",
        name: "onMouseLeave",
        "default": false
      },
      style: {
        type: "object",
        name: "style",
        required: false
      }
    },
    output: {
      component: {
        title: "FontIcon",
        type: "Component"
      },
      onMouseEnter: {
        type: "any"
      },
      onMouseLeave: {
        type: "any"
      }
    }
  }
}