module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/account-balance-wallet": require('material-ui/svg-icons/action/account-balance-wallet')
    }
  },
  name: "ActionAccountBalanceWallet",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionAccountBalanceWallet",
        type: "Component"
      }
    }
  }
}