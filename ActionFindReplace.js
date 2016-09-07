module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/find-replace": require('material-ui/svg-icons/action/find-replace')
    }
  },
  name: "ActionFindReplace",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionFindReplace",
        type: "Component"
      }
    }
  }
}