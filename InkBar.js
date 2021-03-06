module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Tabs/InkBar": require('material-ui/Tabs/InkBar')
    }
  },
  name: "InkBar",
  ports: {
    input: {
      color: {
        type: "string",
        name: "color",
        required: false
      },
      left: {
        type: "string",
        name: "left",
        required: true
      },
      style: {
        type: "object",
        name: "style",
        required: false
      },
      width: {
        type: "string",
        name: "width",
        required: true
      }
    },
    output: {
      component: {
        title: "InkBar",
        type: "Component"
      }
    }
  }
}