module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/not-interested": require('material-ui/svg-icons/av/not-interested')
    }
  },
  name: "AvNotInterested",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvNotInterested",
        type: "Component"
      }
    }
  }
}