module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/content/add": require('material-ui/svg-icons/content/add')
    }
  },
  name: "ContentAdd",
  ports: {
    input: {},
    output: {
      component: {
        title: "ContentAdd",
        type: "Component"
      }
    }
  }
}