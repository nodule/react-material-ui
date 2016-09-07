module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/places/hot-tub": require('material-ui/svg-icons/places/hot-tub')
    }
  },
  name: "PlacesHotTub",
  ports: {
    input: {},
    output: {
      component: {
        title: "PlacesHotTub",
        type: "Component"
      }
    }
  }
}