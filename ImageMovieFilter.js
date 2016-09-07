module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/movie-filter": require('material-ui/svg-icons/image/movie-filter')
    }
  },
  name: "ImageMovieFilter",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageMovieFilter",
        type: "Component"
      }
    }
  }
}