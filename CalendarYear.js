module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/DatePicker/CalendarYear": require('material-ui/DatePicker/CalendarYear')
    }
  },
  name: "CalendarYear",
  ports: {
    input: {
      displayDate: {
        type: "object",
        name: "displayDate",
        required: true
      },
      maxDate: {
        type: "object",
        name: "maxDate",
        required: false
      },
      minDate: {
        type: "object",
        name: "minDate",
        required: false
      },
      onTouchTapYear: {
        title: "Enable onTouchTapYear",
        type: "boolean",
        name: "onTouchTapYear",
        required: false
      },
      selectedDate: {
        type: "object",
        name: "selectedDate",
        required: true
      },
      wordings: {
        type: "object",
        name: "wordings",
        required: false
      }
    },
    output: {
      component: {
        title: "CalendarYear",
        type: "Component"
      },
      onTouchTapYear: {
        type: "any"
      }
    }
  }
}