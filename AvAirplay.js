module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/airplay": require('material-ui/svg-icons/av/airplay')
    }
  },
  name: "AvAirplay",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvAirplay",
        type: "Component"
      }
    }
  }
}