module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/alert/error-outline": require('material-ui/svg-icons/alert/error-outline')
    }
  },
  name: "AlertErrorOutline",
  ports: {
    input: {},
    output: {
      component: {
        title: "AlertErrorOutline",
        type: "Component"
      }
    }
  }
}