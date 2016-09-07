module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/social/sentiment-neutral": require('material-ui/svg-icons/social/sentiment-neutral')
    }
  },
  name: "SocialSentimentNeutral",
  ports: {
    input: {},
    output: {
      component: {
        title: "SocialSentimentNeutral",
        type: "Component"
      }
    }
  }
}