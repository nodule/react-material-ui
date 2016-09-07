module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/satellite": require('material-ui/svg-icons/maps/satellite')
    }
  },
  name: "MapsSatellite",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsSatellite",
        type: "Component"
      }
    }
  }
}