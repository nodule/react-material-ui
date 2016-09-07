module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/picture-in-picture-alt": require('material-ui/svg-icons/action/picture-in-picture-alt')
    }
  },
  name: "ActionPictureInPictureAlt",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionPictureInPictureAlt",
        type: "Component"
      }
    }
  }
}