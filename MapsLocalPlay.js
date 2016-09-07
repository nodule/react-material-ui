module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/local-play": require('material-ui/svg-icons/maps/local-play')
    }
  },
  name: "MapsLocalPlay",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsLocalPlay",
        type: "Component"
      }
    }
  }
}