module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/content/flag": require('material-ui/svg-icons/content/flag')
    }
  },
  name: "ContentFlag",
  ports: {
    input: {},
    output: {
      component: {
        title: "ContentFlag",
        type: "Component"
      }
    }
  }
}