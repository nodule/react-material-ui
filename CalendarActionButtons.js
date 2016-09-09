module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/DatePicker/CalendarActionButtons": require('material-ui/DatePicker/CalendarActionButtons')
    }
  },
  name: "CalendarActionButtons",
  ports: {
    input: {
      autoOk: {
        type: "boolean",
        name: "autoOk",
        required: false
      },
      cancelLabel: {
        type: "node",
        name: "cancelLabel",
        required: false
      },
      okLabel: {
        type: "node",
        name: "okLabel",
        required: false
      },
      onTouchTapCancel: {
        title: "Enable onTouchTapCancel",
        type: "boolean",
        name: "onTouchTapCancel",
        required: false
      },
      onTouchTapOk: {
        title: "Enable onTouchTapOk",
        type: "boolean",
        name: "onTouchTapOk",
        required: false
      }
    },
    output: {
      component: {
        title: "CalendarActionButtons",
        type: "Component"
      },
      onTouchTapCancel: {
        type: "any"
      },
      onTouchTapOk: {
        type: "any"
      }
    }
  }
}