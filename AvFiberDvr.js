module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/fiber-dvr": require('material-ui/svg-icons/av/fiber-dvr')
    }
  },
  name: "AvFiberDvr",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvFiberDvr",
        type: "Component"
      }
    }
  }
}