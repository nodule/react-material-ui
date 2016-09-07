module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/phone-iphone": require('material-ui/svg-icons/hardware/phone-iphone')
    }
  },
  name: "HardwarePhoneIphone",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwarePhoneIphone",
        type: "Component"
      }
    }
  }
}