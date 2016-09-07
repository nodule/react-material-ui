module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/timer": require('material-ui/svg-icons/image/timer')
    }
  },
  name: "ImageTimer",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageTimer",
        type: "Component"
      }
    }
  }
}