module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/find-in-page": require('material-ui/svg-icons/action/find-in-page')
    }
  },
  name: "ActionFindInPage",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionFindInPage",
        type: "Component"
      }
    }
  }
}