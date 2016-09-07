module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/social/school": require('material-ui/svg-icons/social/school')
    }
  },
  name: "SocialSchool",
  ports: {
    input: {},
    output: {
      component: {
        title: "SocialSchool",
        type: "Component"
      }
    }
  }
}