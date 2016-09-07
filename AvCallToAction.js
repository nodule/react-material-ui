module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/call-to-action": require('material-ui/svg-icons/av/call-to-action')
    }
  },
  name: "AvCallToAction",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvCallToAction",
        type: "Component"
      }
    }
  }
}