module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/brightness-medium": require('material-ui/svg-icons/device/brightness-medium')
    }
  },
  name: "DeviceBrightnessMedium",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceBrightnessMedium",
        type: "Component"
      }
    }
  }
}