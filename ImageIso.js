module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/iso": require('material-ui/svg-icons/image/iso')
    }
  },
  name: "ImageIso",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageIso",
        type: "Component"
      }
    }
  }
}