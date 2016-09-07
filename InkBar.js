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
        name: "color"
      },
      left: {
        type: "string",
        name: "left"
      },
      style: {
        type: "object",
        name: "style"
      },
      width: {
        type: "string",
        name: "width"
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