module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/notification/folder-special": require('material-ui/svg-icons/notification/folder-special')
    }
  },
  name: "NotificationFolderSpecial",
  ports: {
    input: {},
    output: {
      component: {
        title: "NotificationFolderSpecial",
        type: "Component"
      }
    }
  }
}