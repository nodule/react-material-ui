module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/fiber-smart-record": require('material-ui/svg-icons/av/fiber-smart-record')
    }
  },
  name: "AvFiberSmartRecord",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvFiberSmartRecord",
        type: "Component"
      }
    }
  }
}