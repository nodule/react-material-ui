module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/phone-android": require('material-ui/svg-icons/hardware/phone-android')
    }
  },
  name: "HardwarePhoneAndroid",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwarePhoneAndroid",
        type: "Component"
      }
    }
  }
}