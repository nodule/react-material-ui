module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/social/group": require('material-ui/svg-icons/social/group')
    }
  },
  name: "SocialGroup",
  ports: {
    input: {},
    output: {
      component: {
        title: "SocialGroup",
        type: "Component"
      }
    }
  }
}