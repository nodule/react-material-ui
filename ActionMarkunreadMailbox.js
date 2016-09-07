module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/markunread-mailbox": require('material-ui/svg-icons/action/markunread-mailbox')
    }
  },
  name: "ActionMarkunreadMailbox",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionMarkunreadMailbox",
        type: "Component"
      }
    }
  }
}