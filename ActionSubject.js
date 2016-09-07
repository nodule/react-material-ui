module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/subject": require('material-ui/svg-icons/action/subject')
    }
  },
  name: "ActionSubject",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionSubject",
        type: "Component"
      }
    }
  }
}