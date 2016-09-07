module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/social/people": require('material-ui/svg-icons/social/people')
    }
  },
  name: "SocialPeople",
  ports: {
    input: {},
    output: {
      component: {
        title: "SocialPeople",
        type: "Component"
      }
    }
  }
}