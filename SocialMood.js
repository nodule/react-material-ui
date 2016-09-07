module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/social/mood": require('material-ui/svg-icons/social/mood')
    }
  },
  name: "SocialMood",
  ports: {
    input: {},
    output: {
      component: {
        title: "SocialMood",
        type: "Component"
      }
    }
  }
}