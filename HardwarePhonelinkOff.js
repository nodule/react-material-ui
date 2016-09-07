module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/phonelink-off": require('material-ui/svg-icons/hardware/phonelink-off')
    }
  },
  name: "HardwarePhonelinkOff",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwarePhonelinkOff",
        type: "Component"
      }
    }
  }
}