module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/social/mood-bad": require('material-ui/svg-icons/social/mood-bad')
    }
  },
  name: "SocialMoodBad",
  ports: {
    input: {},
    output: {
      component: {
        title: "SocialMoodBad",
        type: "Component"
      }
    }
  }
}