module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/content/content-paste": require('material-ui/svg-icons/content/content-paste')
    }
  },
  name: "ContentContentPaste",
  ports: {
    input: {},
    output: {
      component: {
        title: "ContentContentPaste",
        type: "Component"
      }
    }
  }
}