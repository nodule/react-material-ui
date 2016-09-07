module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/web": require('material-ui/svg-icons/av/web')
    }
  },
  name: "AvWeb",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvWeb",
        type: "Component"
      }
    }
  }
}