module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/explicit": require('material-ui/svg-icons/av/explicit')
    }
  },
  name: "AvExplicit",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvExplicit",
        type: "Component"
      }
    }
  }
}