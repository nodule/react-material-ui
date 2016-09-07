module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/alert/add-alert": require('material-ui/svg-icons/alert/add-alert')
    }
  },
  name: "AlertAddAlert",
  ports: {
    input: {},
    output: {
      component: {
        title: "AlertAddAlert",
        type: "Component"
      }
    }
  }
}