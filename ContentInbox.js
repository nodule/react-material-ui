module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/content/inbox": require('material-ui/svg-icons/content/inbox')
    }
  },
  name: "ContentInbox",
  ports: {
    input: {},
    output: {
      component: {
        title: "ContentInbox",
        type: "Component"
      }
    }
  }
}