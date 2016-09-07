module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/assistant": require('material-ui/svg-icons/image/assistant')
    }
  },
  name: "ImageAssistant",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageAssistant",
        type: "Component"
      }
    }
  }
}