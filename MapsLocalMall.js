module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/maps/local-mall": require('material-ui/svg-icons/maps/local-mall')
    }
  },
  name: "MapsLocalMall",
  ports: {
    input: {},
    output: {
      component: {
        title: "MapsLocalMall",
        type: "Component"
      }
    }
  }
}