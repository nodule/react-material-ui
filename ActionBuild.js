module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/build": require('material-ui/svg-icons/action/build')
    }
  },
  name: "ActionBuild",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionBuild",
        type: "Component"
      }
    }
  }
}