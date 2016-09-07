module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/offline-pin": require('material-ui/svg-icons/action/offline-pin')
    }
  },
  name: "ActionOfflinePin",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionOfflinePin",
        type: "Component"
      }
    }
  }
}