module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/g-translate": require('material-ui/svg-icons/action/g-translate')
    }
  },
  name: "ActionGTranslate",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionGTranslate",
        type: "Component"
      }
    }
  }
}