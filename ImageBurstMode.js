module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/image/burst-mode": require('material-ui/svg-icons/image/burst-mode')
    }
  },
  name: "ImageBurstMode",
  ports: {
    input: {},
    output: {
      component: {
        title: "ImageBurstMode",
        type: "Component"
      }
    }
  }
}