module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/ev-station": require('material-ui/svg-icons/maps/ev-station')
    }
  },
  name: "MapsEvStation",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsEvStation",
        type: "Component"
      }
    }
  }
}