module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/grain": require('material-ui/svg-icons/image/grain')
    }
  },
  name: "ImageGrain",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageGrain",
        type: "Component"
      }
    }
  }
}