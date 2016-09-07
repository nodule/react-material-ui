module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/fiber-pin": require('material-ui/svg-icons/av/fiber-pin')
    }
  },
  name: "AvFiberPin",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvFiberPin",
        type: "Component"
      }
    }
  }
}