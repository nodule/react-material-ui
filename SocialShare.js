module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/social/share": require('material-ui/svg-icons/social/share')
    }
  },
  name: "SocialShare",
  ports: {
    input: {},
    output: {
      component: {
        title: "SocialShare",
        type: "Component"
      }
    }
  }
}