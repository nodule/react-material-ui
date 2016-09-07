module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/social/cake": require('material-ui/svg-icons/social/cake')
    }
  },
  name: "SocialCake",
  ports: {
    input: {},
    output: {
      component: {
        title: "SocialCake",
        type: "Component"
      }
    }
  }
}