module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/speaker-notes": require('material-ui/svg-icons/action/speaker-notes')
    }
  },
  name: "ActionSpeakerNotes",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionSpeakerNotes",
        type: "Component"
      }
    }
  }
}