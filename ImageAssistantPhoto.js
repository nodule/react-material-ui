module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/assistant-photo": require('material-ui/svg-icons/image/assistant-photo')
    }
  },
  name: "ImageAssistantPhoto",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageAssistantPhoto",
        type: "Component"
      }
    }
  }
}