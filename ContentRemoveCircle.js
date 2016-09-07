module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/content/remove-circle": require('material-ui/svg-icons/content/remove-circle')
    }
  },
  name: "ContentRemoveCircle",
  ports: {
    input: {},
    output: {
      component: {
        title: "ContentRemoveCircle",
        type: "Component"
      }
    }
  }
}