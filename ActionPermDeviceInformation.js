module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/perm-device-information": require('material-ui/svg-icons/action/perm-device-information')
    }
  },
  name: "ActionPermDeviceInformation",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionPermDeviceInformation",
        type: "Component"
      }
    }
  }
}