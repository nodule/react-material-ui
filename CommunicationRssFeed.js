module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/communication/rss-feed": require('material-ui/svg-icons/communication/rss-feed')
    }
  },
  name: "CommunicationRssFeed",
  ports: {
    input: {},
    output: {
      component: {
        title: "CommunicationRssFeed",
        type: "Component"
      }
    }
  }
}