module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/social/party-mode": require('material-ui/svg-icons/social/party-mode')
    }
  },
  name: "SocialPartyMode",
  ports: {
    input: {},
    output: {
      component: {
        title: "SocialPartyMode",
        type: "Component"
      }
    }
  }
}