module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/places/golf-course": require('material-ui/svg-icons/places/golf-course')
    }
  },
  name: "PlacesGolfCourse",
  ports: {
    input: {},
    output: {
      component: {
        title: "PlacesGolfCourse",
        type: "Component"
      }
    }
  }
}