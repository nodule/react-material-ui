module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/card-membership": require('material-ui/svg-icons/action/card-membership')
    }
  },
  name: "ActionCardMembership",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionCardMembership",
        type: "Component"
      }
    }
  }
}