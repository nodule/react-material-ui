module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/social/location-city": require('material-ui/svg-icons/social/location-city')
    }
  },
  name: "SocialLocationCity",
  ports: {
    input: {},
    output: {
      component: {
        title: "SocialLocationCity",
        type: "Component"
      }
    }
  }
}