module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/question-answer": require('material-ui/svg-icons/action/question-answer')
    }
  },
  name: "ActionQuestionAnswer",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionQuestionAnswer",
        type: "Component"
      }
    }
  }
}