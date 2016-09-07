module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/content/markunread": require('material-ui/svg-icons/content/markunread')
    }
  },
  name: "ContentMarkunread",
  ports: {
    input: {},
    output: {
      component: {
        title: "ContentMarkunread",
        type: "Component"
      }
    }
  }
}