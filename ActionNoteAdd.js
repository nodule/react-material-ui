module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/note-add": require('material-ui/svg-icons/action/note-add')
    }
  },
  name: "ActionNoteAdd",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionNoteAdd",
        type: "Component"
      }
    }
  }
}