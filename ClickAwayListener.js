module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/internal/ClickAwayListener": require('material-ui/internal/ClickAwayListener')
    }
  },
  name: "ClickAwayListener",
  ports: {
    input: {
      children: {
        type: "node",
        name: "children"
      },
      onClickAway: {
        type: "any",
        name: "onClickAway"
      }
    },
    output: {
      component: {
        title: "ClickAwayListener",
        type: "Component"
      }
    }
  }
}