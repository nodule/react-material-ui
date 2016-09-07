module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/content/send": require('material-ui/svg-icons/content/send')
    }
  },
  name: "ContentSend",
  ports: {
    input: {},
    output: {
      component: {
        title: "ContentSend",
        type: "Component"
      }
    }
  }
}