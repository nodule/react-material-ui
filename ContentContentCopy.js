module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/content/content-copy": require('material-ui/svg-icons/content/content-copy')
    }
  },
  name: "ContentContentCopy",
  ports: {
    input: {},
    output: {
      component: {
        title: "ContentContentCopy",
        type: "Component"
      }
    }
  }
}