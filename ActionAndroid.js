module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/android": require('material-ui/svg-icons/action/android')
    }
  },
  name: "ActionAndroid",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionAndroid",
        type: "Component"
      }
    }
  }
}