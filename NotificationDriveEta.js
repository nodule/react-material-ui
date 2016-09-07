module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/drive-eta": require('material-ui/svg-icons/notification/drive-eta')
    }
  },
  name: "NotificationDriveEta",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationDriveEta",
        type: "Component"
      }
    }
  }
}