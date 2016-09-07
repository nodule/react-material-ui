module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/open-with": require('material-ui/svg-icons/action/open-with')
    }
  },
  name: "ActionOpenWith",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionOpenWith",
        type: "Component"
      }
    }
  }
}