module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/card-giftcard": require('material-ui/svg-icons/action/card-giftcard')
    }
  },
  name: "ActionCardGiftcard",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionCardGiftcard",
        type: "Component"
      }
    }
  }
}