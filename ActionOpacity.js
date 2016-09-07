module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/opacity": require('material-ui/svg-icons/action/opacity')
    }
  },
  name: "ActionOpacity",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionOpacity",
        type: "Component"
      }
    }
  }
}