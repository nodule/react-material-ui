module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/content/move-to-inbox": require('material-ui/svg-icons/content/move-to-inbox')
    }
  },
  name: "ContentMoveToInbox",
  ports: {
    input: {},
    output: {
      component: {
        title: "ContentMoveToInbox",
        type: "Component"
      }
    }
  }
}