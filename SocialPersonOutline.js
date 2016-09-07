module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/social/person-outline": require('material-ui/svg-icons/social/person-outline')
    }
  },
  name: "SocialPersonOutline",
  ports: {
    input: {},
    output: {
      component: {
        title: "SocialPersonOutline",
        type: "Component"
      }
    }
  }
}