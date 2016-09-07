module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/movie-creation": require('material-ui/svg-icons/image/movie-creation')
    }
  },
  name: "ImageMovieCreation",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageMovieCreation",
        type: "Component"
      }
    }
  }
}