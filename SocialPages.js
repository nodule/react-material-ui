module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/social/pages": require('material-ui/svg-icons/social/pages')
    }
  },
  name: "SocialPages",
  ports: {
    input: {},
    output: {
      component: {
        title: "SocialPages",
        type: "Component"
      }
    }
  }
}