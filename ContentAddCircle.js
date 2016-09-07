module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/content/add-circle": require('material-ui/svg-icons/content/add-circle')
    }
  },
  name: "ContentAddCircle",
  ports: {
    input: {},
    output: {
      component: {
        title: "ContentAddCircle",
        type: "Component"
      }
    }
  }
}