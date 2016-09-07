module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/youtube-searched-for": require('material-ui/svg-icons/action/youtube-searched-for')
    }
  },
  name: "ActionYoutubeSearchedFor",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionYoutubeSearchedFor",
        type: "Component"
      }
    }
  }
}