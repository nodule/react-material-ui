module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/subway": require('material-ui/svg-icons/maps/subway')
    }
  },
  name: "MapsSubway",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsSubway",
        type: "Component"
      }
    }
  }
}