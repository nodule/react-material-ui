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
        type: "array",
        propType: "node",
        name: "children",
        required: false
      },
      onClickAway: {
        type: "any",
        name: "onClickAway",
        required: false
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