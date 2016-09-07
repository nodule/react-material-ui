module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/fiber-manual-record": require('material-ui/svg-icons/av/fiber-manual-record')
    }
  },
  name: "AvFiberManualRecord",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvFiberManualRecord",
        type: "Component"
      }
    }
  }
}