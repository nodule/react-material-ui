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
        name: "icon",
        required: false
      },
      label: {
        type: "node",
        name: "label",
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
        title: "BottomNavigationItem",
        type: "Component"
      }
    }
  }
}