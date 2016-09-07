module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/picture-in-picture": require('material-ui/svg-icons/action/picture-in-picture')
    }
  },
  name: "ActionPictureInPicture",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionPictureInPicture",
        type: "Component"
      }
    }
  }
}