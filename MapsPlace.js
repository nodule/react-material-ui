module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/place": require('material-ui/svg-icons/maps/place')
    }
  },
  name: "MapsPlace",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsPlace",
        type: "Component"
      }
    }
  }
}