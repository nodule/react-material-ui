module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/content/drafts": require('material-ui/svg-icons/content/drafts')
    }
  },
  name: "ContentDrafts",
  ports: {
    input: {},
    output: {
      component: {
        title: "ContentDrafts",
        type: "Component"
      }
    }
  }
}