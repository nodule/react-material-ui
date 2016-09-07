module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/phone-bluetooth-speaker": require('material-ui/svg-icons/notification/phone-bluetooth-speaker')
    }
  },
  name: "NotificationPhoneBluetoothSpeaker",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationPhoneBluetoothSpeaker",
        type: "Component"
      }
    }
  }
}