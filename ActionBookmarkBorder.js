module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/bookmark-border": require('material-ui/svg-icons/action/bookmark-border')
    }
  },
  name: "ActionBookmarkBorder",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionBookmarkBorder",
        type: "Component"
      }
    }
  }
}