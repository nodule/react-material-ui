module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/av/games": require('material-ui/svg-icons/av/games')
    }
  },
  name: "AvGames",
  ports: {
    input: {},
    output: {
      component: {
        title: "AvGames",
        type: "Component"
      }
    }
  }
}