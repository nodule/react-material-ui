module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/hardware/phonelink": require('material-ui/svg-icons/hardware/phonelink')
    }
  },
  name: "HardwarePhonelink",
  ports: {
    input: {},
    output: {
      component: {
        title: "HardwarePhonelink",
        type: "Component"
      }
    }
  }
}