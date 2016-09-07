module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/bluetooth-audio": require('material-ui/svg-icons/notification/bluetooth-audio')
    }
  },
  name: "NotificationBluetoothAudio",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationBluetoothAudio",
        type: "Component"
      }
    }
  }
}