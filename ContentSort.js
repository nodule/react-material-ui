module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/content/sort": require('material-ui/svg-icons/content/sort')
    }
  },
  name: "ContentSort",
  ports: {
    input: {},
    output: {
      component: {
        title: "ContentSort",
        type: "Component"
      }
    }
  }
}