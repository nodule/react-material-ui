module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/rate-review": require('material-ui/svg-icons/maps/rate-review')
    }
  },
  name: "MapsRateReview",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsRateReview",
        type: "Component"
      }
    }
  }
}