module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/edit-location": require('material-ui/svg-icons/maps/edit-location')
    }
  },
  name: "MapsEditLocation",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsEditLocation",
        type: "Component"
      }
    }
  }
}