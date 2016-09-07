module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/local-florist": require('material-ui/svg-icons/maps/local-florist')
    }
  },
  name: "MapsLocalFlorist",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsLocalFlorist",
        type: "Component"
      }
    }
  }
}