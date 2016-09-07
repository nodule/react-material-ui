module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/content/unarchive": require('material-ui/svg-icons/content/unarchive')
    }
  },
  name: "ContentUnarchive",
  ports: {
    input: {},
    output: {
      component: {
        title: "ContentUnarchive",
        type: "Component"
      }
    }
  }
}