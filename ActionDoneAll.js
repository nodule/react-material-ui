module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/done-all": require('material-ui/svg-icons/action/done-all')
    }
  },
  name: "ActionDoneAll",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionDoneAll",
        type: "Component"
      }
    }
  }
}