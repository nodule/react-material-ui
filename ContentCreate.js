module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/content/create": require('material-ui/svg-icons/content/create')
    }
  },
  name: "ContentCreate",
  ports: {
    input: {},
    output: {
      component: {
        title: "ContentCreate",
        type: "Component"
      }
    }
  }
}