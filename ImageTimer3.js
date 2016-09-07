module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/timer-3": require('material-ui/svg-icons/image/timer-3')
    }
  },
  name: "ImageTimer3",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageTimer3",
        type: "Component"
      }
    }
  }
}