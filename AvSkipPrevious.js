module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/skip-previous": require('material-ui/svg-icons/av/skip-previous')
    }
  },
  name: "AvSkipPrevious",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvSkipPrevious",
        type: "Component"
      }
    }
  }
}