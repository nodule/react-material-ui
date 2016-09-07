module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/device/battery-20": require('material-ui/svg-icons/device/battery-20')
    }
  },
  name: "DeviceBattery20",
  ports: {
    input: {},
    output: {
      component: {
        title: "DeviceBattery20",
        type: "Component"
      }
    }
  }
}