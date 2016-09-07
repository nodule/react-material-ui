module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/info-outline": require('material-ui/svg-icons/action/info-outline')
    }
  },
  name: "ActionInfoOutline",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionInfoOutline",
        type: "Component"
      }
    }
  }
}