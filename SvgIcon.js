module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/SvgIcon/SvgIcon": require('material-ui/SvgIcon/SvgIcon')
    }
  },
  name: "SvgIcon",
  ports: {
    input: {
      children: {
        type: "node",
        name: "children"
      },
      color: {
        type: "string",
        name: "color"
      },
      hoverColor: {
        type: "string",
        name: "hoverColor"
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
        name: "style"
      },
      viewBox: {
        type: "string",
        name: "viewBox",
        "default": ""
      }
    },
    output: {
      component: {
        title: "SvgIcon",
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