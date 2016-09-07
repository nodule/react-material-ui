module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/wb-sunny": require('material-ui/svg-icons/image/wb-sunny')
    }
  },
  name: "ImageWbSunny",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageWbSunny",
        type: "Component"
      }
    }
  }
}