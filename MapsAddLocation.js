module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/add-location": require('material-ui/svg-icons/maps/add-location')
    }
  },
  name: "MapsAddLocation",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsAddLocation",
        type: "Component"
      }
    }
  }
}