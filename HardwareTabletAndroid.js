module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/tablet-android": require('material-ui/svg-icons/hardware/tablet-android')
    }
  },
  name: "HardwareTabletAndroid",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwareTabletAndroid",
        type: "Component"
      }
    }
  }
}