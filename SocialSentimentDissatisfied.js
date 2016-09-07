module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/social/sentiment-dissatisfied": require('material-ui/svg-icons/social/sentiment-dissatisfied')
    }
  },
  name: "SocialSentimentDissatisfied",
  ports: {
    input: {},
    output: {
      component: {
        title: "SocialSentimentDissatisfied",
        type: "Component"
      }
    }
  }
}