module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/featured-play-list": require('material-ui/svg-icons/av/featured-play-list')
    }
  },
  name: "AvFeaturedPlayList",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvFeaturedPlayList",
        type: "Component"
      }
    }
  }
}