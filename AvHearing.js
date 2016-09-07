module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/hearing": require('material-ui/svg-icons/av/hearing')
    }
  },
  name: "AvHearing",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvHearing",
        type: "Component"
      }
    }
  }
}