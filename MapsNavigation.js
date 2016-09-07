module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/navigation": require('material-ui/svg-icons/maps/navigation')
    }
  },
  name: "MapsNavigation",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsNavigation",
        type: "Component"
      }
    }
  }
}