module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/stars": require('material-ui/svg-icons/action/stars')
    }
  },
  name: "ActionStars",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionStars",
        type: "Component"
      }
    }
  }
}