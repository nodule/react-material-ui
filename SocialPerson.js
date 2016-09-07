module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/social/person": require('material-ui/svg-icons/social/person')
    }
  },
  name: "SocialPerson",
  ports: {
    input: {},
    output: {
      component: {
        title: "SocialPerson",
        type: "Component"
      }
    }
  }
}