module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/remove-from-queue": require('material-ui/svg-icons/av/remove-from-queue')
    }
  },
  name: "AvRemoveFromQueue",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvRemoveFromQueue",
        type: "Component"
      }
    }
  }
}