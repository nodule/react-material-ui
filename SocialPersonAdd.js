module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/social/person-add": require('material-ui/svg-icons/social/person-add')
    }
  },
  name: "SocialPersonAdd",
  ports: {
    input: {},
    output: {
      component: {
        title: "SocialPersonAdd",
        type: "Component"
      }
    }
  }
}