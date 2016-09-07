module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/subscriptions": require('material-ui/svg-icons/av/subscriptions')
    }
  },
  name: "AvSubscriptions",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvSubscriptions",
        type: "Component"
      }
    }
  }
}