module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/svg-icons/action/speaker-notes-off": require('material-ui/svg-icons/action/speaker-notes-off')
    }
  },
  name: "ActionSpeakerNotesOff",
  ports: {
    input: {},
    output: {
      component: {
        title: "ActionSpeakerNotesOff",
        type: "Component"
      }
    }
  }
}