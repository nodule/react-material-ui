module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/pregnant-woman": require('material-ui/svg-icons/action/pregnant-woman')
    }
  },
  name: "ActionPregnantWoman",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionPregnantWoman",
        type: "Component"
      }
    }
  }
}