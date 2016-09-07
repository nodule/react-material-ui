module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/add-to-queue": require('material-ui/svg-icons/av/add-to-queue')
    }
  },
  name: "AvAddToQueue",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvAddToQueue",
        type: "Component"
      }
    }
  }
}