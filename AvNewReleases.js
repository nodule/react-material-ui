module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/new-releases": require('material-ui/svg-icons/av/new-releases')
    }
  },
  name: "AvNewReleases",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvNewReleases",
        type: "Component"
      }
    }
  }
}