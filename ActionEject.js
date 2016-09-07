module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/eject": require('material-ui/svg-icons/action/eject')
    }
  },
  name: "ActionEject",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionEject",
        type: "Component"
      }
    }
  }
}