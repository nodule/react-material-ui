module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/swap-vert": require('material-ui/svg-icons/action/swap-vert')
    }
  },
  name: "ActionSwapVert",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionSwapVert",
        type: "Component"
      }
    }
  }
}