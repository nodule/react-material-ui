module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/hd": require('material-ui/svg-icons/av/hd')
    }
  },
  name: "AvHd",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvHd",
        type: "Component"
      }
    }
  }
}