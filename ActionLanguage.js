module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/language": require('material-ui/svg-icons/action/language')
    }
  },
  name: "ActionLanguage",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionLanguage",
        type: "Component"
      }
    }
  }
}