module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/note": require('material-ui/svg-icons/av/note')
    }
  },
  name: "AvNote",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvNote",
        type: "Component"
      }
    }
  }
}