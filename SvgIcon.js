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
        type: "array",
        propType: "node",
        name: "children",
        required: false
      },
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