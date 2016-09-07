module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/social/sentiment-satisfied": require('material-ui/svg-icons/social/sentiment-satisfied')
    }
  },
  name: "SocialSentimentSatisfied",
  ports: {
    input: {},
    output: {
      component: {
        title: "SocialSentimentSatisfied",
        type: "Component"
      }
    }
  }
}