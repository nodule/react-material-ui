module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/content/archive": require('material-ui/svg-icons/content/archive')
    }
  },
  name: "ContentArchive",
  ports: {
    input: {},
    output: {
      component: {
        title: "ContentArchive",
        type: "Component"
      }
    }
  }
}