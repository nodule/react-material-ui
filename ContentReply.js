module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/content/reply": require('material-ui/svg-icons/content/reply')
    }
  },
  name: "ContentReply",
  ports: {
    input: {},
    output: {
      component: {
        title: "ContentReply",
        type: "Component"
      }
    }
  }
}