module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/polymer": require('material-ui/svg-icons/action/polymer')
    }
  },
  name: "ActionPolymer",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionPolymer",
        type: "Component"
      }
    }
  }
}