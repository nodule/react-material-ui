module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/bookmark": require('material-ui/svg-icons/action/bookmark')
    }
  },
  name: "ActionBookmark",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionBookmark",
        type: "Component"
      }
    }
  }
}