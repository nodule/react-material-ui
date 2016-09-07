module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/view-module": require('material-ui/svg-icons/action/view-module')
    }
  },
  name: "ActionViewModule",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionViewModule",
        type: "Component"
      }
    }
  }
}