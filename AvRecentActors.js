module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/recent-actors": require('material-ui/svg-icons/av/recent-actors')
    }
  },
  name: "AvRecentActors",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvRecentActors",
        type: "Component"
      }
    }
  }
}