module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/social/plus-one": require('material-ui/svg-icons/social/plus-one')
    }
  },
  name: "SocialPlusOne",
  ports: {
    input: {},
    output: {
      component: {
        title: "SocialPlusOne",
        type: "Component"
      }
    }
  }
}