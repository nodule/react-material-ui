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
        name: "children"
      },
      selectedIndex: {
        type: "number",
        name: "selectedIndex"
      },
      style: {
        type: "object",
        name: "style"
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