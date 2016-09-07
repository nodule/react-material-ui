module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/local-parking": require('material-ui/svg-icons/maps/local-parking')
    }
  },
  name: "MapsLocalParking",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsLocalParking",
        type: "Component"
      }
    }
  }
}