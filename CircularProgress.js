module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/CircularProgress/CircularProgress": require('material-ui/CircularProgress/CircularProgress')
    }
  },
  name: "CircularProgress",
  ports: {
    input: {
      color: {
        type: "string",
        name: "color",
        required: false
      },
      innerStyle: {
        type: "object",
        name: "innerStyle",
        required: false
      },
      max: {
        type: "number",
        name: "max",
        "default": 0
      },
      min: {
        type: "number",
        name: "min",
        "default": 0
      },
      mode: {
        type: "enum",
        name: "mode",
        "default": ""
      },
      size: {
        type: "number",
        name: "size",
        "default": 0
      },
      style: {
        type: "object",
        name: "style",
        required: false
      },
      thickness: {
        type: "number",
        name: "thickness",
        "default": 0
      },
      value: {
        type: "number",
        name: "value",
        "default": 0
      }
    },
    output: {
      component: {
        title: "CircularProgress",
        type: "Component"
      }
    }
  }
}