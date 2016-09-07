module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/gif": require('material-ui/svg-icons/action/gif')
    }
  },
  name: "ActionGif",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionGif",
        type: "Component"
      }
    }
  }
}