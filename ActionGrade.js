module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/grade": require('material-ui/svg-icons/action/grade')
    }
  },
  name: "ActionGrade",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionGrade",
        type: "Component"
      }
    }
  }
}