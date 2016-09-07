module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/content/remove": require('material-ui/svg-icons/content/remove')
    }
  },
  name: "ContentRemove",
  ports: {
    input: {},
    output: {
      component: {
        title: "ContentRemove",
        type: "Component"
      }
    }
  }
}