module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/web-asset": require('material-ui/svg-icons/av/web-asset')
    }
  },
  name: "AvWebAsset",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvWebAsset",
        type: "Component"
      }
    }
  }
}