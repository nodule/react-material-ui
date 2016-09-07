module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/social/group-add": require('material-ui/svg-icons/social/group-add')
    }
  },
  name: "SocialGroupAdd",
  ports: {
    input: {},
    output: {
      component: {
        title: "SocialGroupAdd",
        type: "Component"
      }
    }
  }
}