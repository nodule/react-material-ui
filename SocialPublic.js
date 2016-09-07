module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/social/public": require('material-ui/svg-icons/social/public')
    }
  },
  name: "SocialPublic",
  ports: {
    input: {},
    output: {
      component: {
        title: "SocialPublic",
        type: "Component"
      }
    }
  }
}