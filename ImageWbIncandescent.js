module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/wb-incandescent": require('material-ui/svg-icons/image/wb-incandescent')
    }
  },
  name: "ImageWbIncandescent",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageWbIncandescent",
        type: "Component"
      }
    }
  }
}