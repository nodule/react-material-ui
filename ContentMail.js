module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/content/mail": require('material-ui/svg-icons/content/mail')
    }
  },
  name: "ContentMail",
  ports: {
    input: {},
    output: {
      component: {
        title: "ContentMail",
        type: "Component"
      }
    }
  }
}