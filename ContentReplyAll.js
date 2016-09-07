module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/content/reply-all": require('material-ui/svg-icons/content/reply-all')
    }
  },
  name: "ContentReplyAll",
  ports: {
    input: {},
    output: {
      component: {
        title: "ContentReplyAll",
        type: "Component"
      }
    }
  }
}