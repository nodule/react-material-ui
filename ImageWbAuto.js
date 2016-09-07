module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/wb-auto": require('material-ui/svg-icons/image/wb-auto')
    }
  },
  name: "ImageWbAuto",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageWbAuto",
        type: "Component"
      }
    }
  }
}