module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/local-movies": require('material-ui/svg-icons/maps/local-movies')
    }
  },
  name: "MapsLocalMovies",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsLocalMovies",
        type: "Component"
      }
    }
  }
}