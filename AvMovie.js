module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/movie": require('material-ui/svg-icons/av/movie')
    }
  },
  name: "AvMovie",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvMovie",
        type: "Component"
      }
    }
  }
}