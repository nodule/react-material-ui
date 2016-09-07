module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/book": require('material-ui/svg-icons/action/book')
    }
  },
  name: "ActionBook",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionBook",
        type: "Component"
      }
    }
  }
}