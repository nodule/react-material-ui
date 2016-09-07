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
        name: "autoOk"
      },
      cancelLabel: {
        type: "node",
        name: "cancelLabel"
      },
      okLabel: {
        type: "node",
        name: "okLabel"
      },
      onTouchTapCancel: {
        title: "Enable onTouchTapCancel",
        type: "boolean",
        name: "onTouchTapCancel"
      },
      onTouchTapOk: {
        title: "Enable onTouchTapOk",
        type: "boolean",
        name: "onTouchTapOk"
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