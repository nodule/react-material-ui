module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/BottomNavigation/BottomNavigation": require('material-ui/BottomNavigation/BottomNavigation')
    }
  },
  name: "BottomNavigation",
  ports: {
    input: {
      children: {
        type: "node",
        name: "children",
        required: false
      },
      selectedIndex: {
        type: "number",
        name: "selectedIndex",
        required: false
      },
      style: {
        type: "object",
        name: "style",
        required: false
      }
    },
    output: {
      component: {
        title: "BottomNavigation",
        type: "Component"
      }
    }
  }
}