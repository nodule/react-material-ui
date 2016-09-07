module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/fiber-new": require('material-ui/svg-icons/av/fiber-new')
    }
  },
  name: "AvFiberNew",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvFiberNew",
        type: "Component"
      }
    }
  }
}