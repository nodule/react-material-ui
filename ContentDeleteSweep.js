module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/content/delete-sweep": require('material-ui/svg-icons/content/delete-sweep')
    }
  },
  name: "ContentDeleteSweep",
  ports: {
    input: {},
    output: {
      component: {
        title: "ContentDeleteSweep",
        type: "Component"
      }
    }
  }
}