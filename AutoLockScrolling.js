module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/internal/AutoLockScrolling": require('material-ui/internal/AutoLockScrolling')
    }
  },
  name: "AutoLockScrolling",
  ports: {
    input: {
      lock: {
        type: "boolean",
        name: "lock",
        required: true
      }
    },
    output: {
      component: {
        title: "AutoLockScrolling",
        type: "Component"
      }
    }
  }
}