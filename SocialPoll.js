module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/social/poll": require('material-ui/svg-icons/social/poll')
    }
  },
  name: "SocialPoll",
  ports: {
    input: {},
    output: {
      component: {
        title: "SocialPoll",
        type: "Component"
      }
    }
  }
}