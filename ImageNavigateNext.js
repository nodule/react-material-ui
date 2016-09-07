module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/navigate-next": require('material-ui/svg-icons/image/navigate-next')
    }
  },
  name: "ImageNavigateNext",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageNavigateNext",
        type: "Component"
      }
    }
  }
}