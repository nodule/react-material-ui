module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/social/whatshot": require('material-ui/svg-icons/social/whatshot')
    }
  },
  name: "SocialWhatshot",
  ports: {
    input: {},
    output: {
      component: {
        title: "SocialWhatshot",
        type: "Component"
      }
    }
  }
}