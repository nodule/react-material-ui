module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/done": require('material-ui/svg-icons/action/done')
    }
  },
  name: "ActionDone",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionDone",
        type: "Component"
      }
    }
  }
}