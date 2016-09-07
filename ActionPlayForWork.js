module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/play-for-work": require('material-ui/svg-icons/action/play-for-work')
    }
  },
  name: "ActionPlayForWork",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionPlayForWork",
        type: "Component"
      }
    }
  }
}