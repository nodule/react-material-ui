module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/local-bar": require('material-ui/svg-icons/maps/local-bar')
    }
  },
  name: "MapsLocalBar",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsLocalBar",
        type: "Component"
      }
    }
  }
}