module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/translate": require('material-ui/svg-icons/action/translate')
    }
  },
  name: "ActionTranslate",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionTranslate",
        type: "Component"
      }
    }
  }
}