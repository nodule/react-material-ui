module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/local-convenience-store": require('material-ui/svg-icons/maps/local-convenience-store')
    }
  },
  name: "MapsLocalConvenienceStore",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsLocalConvenienceStore",
        type: "Component"
      }
    }
  }
}