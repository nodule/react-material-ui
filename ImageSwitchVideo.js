module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/switch-video": require('material-ui/svg-icons/image/switch-video')
    }
  },
  name: "ImageSwitchVideo",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageSwitchVideo",
        type: "Component"
      }
    }
  }
}