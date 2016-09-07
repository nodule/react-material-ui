module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/av-timer": require('material-ui/svg-icons/av/av-timer')
    }
  },
  name: "AvAvTimer",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvAvTimer",
        type: "Component"
      }
    }
  }
}