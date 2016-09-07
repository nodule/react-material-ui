module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/navigation/more-vert": require('material-ui/svg-icons/navigation/more-vert')
    }
  },
  name: "NavigationMoreVert",
  ports: {
    input: {},
    output: {
      component: {
        title: "NavigationMoreVert",
        type: "Component"
      }
    }
  }
}