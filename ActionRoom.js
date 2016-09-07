module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/room": require('material-ui/svg-icons/action/room')
    }
  },
  name: "ActionRoom",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionRoom",
        type: "Component"
      }
    }
  }
}