module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/social/domain": require('material-ui/svg-icons/social/domain')
    }
  },
  name: "SocialDomain",
  ports: {
    input: {},
    output: {
      component: {
        title: "SocialDomain",
        type: "Component"
      }
    }
  }
}