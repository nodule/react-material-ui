module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/featured-video": require('material-ui/svg-icons/av/featured-video')
    }
  },
  name: "AvFeaturedVideo",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvFeaturedVideo",
        type: "Component"
      }
    }
  }
}