module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/healing": require('material-ui/svg-icons/image/healing')
    }
  },
  name: "ImageHealing",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageHealing",
        type: "Component"
      }
    }
  }
}