module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/view-list": require('material-ui/svg-icons/action/view-list')
    }
  },
  name: "ActionViewList",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionViewList",
        type: "Component"
      }
    }
  }
}