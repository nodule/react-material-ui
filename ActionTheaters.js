module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/theaters": require('material-ui/svg-icons/action/theaters')
    }
  },
  name: "ActionTheaters",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionTheaters",
        type: "Component"
      }
    }
  }
}