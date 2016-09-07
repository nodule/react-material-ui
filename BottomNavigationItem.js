module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/BottomNavigation/BottomNavigationItem": require('material-ui/BottomNavigation/BottomNavigationItem')
    }
  },
  name: "BottomNavigationItem",
  ports: {
    input: {
      icon: {
        type: "node",
        name: "icon"
      },
      label: {
        type: "node",
        name: "label"
      },
      style: {
        type: "object",
        name: "style"
      }
    },
    output: {
      component: {
        title: "BottomNavigationItem",
        type: "Component"
      }
    }
  }
}