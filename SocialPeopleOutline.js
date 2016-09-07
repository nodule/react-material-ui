module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/social/people-outline": require('material-ui/svg-icons/social/people-outline')
    }
  },
  name: "SocialPeopleOutline",
  ports: {
    input: {},
    output: {
      component: {
        title: "SocialPeopleOutline",
        type: "Component"
      }
    }
  }
}