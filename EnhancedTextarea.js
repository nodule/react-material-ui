module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/TextField/EnhancedTextarea": require('material-ui/TextField/EnhancedTextarea')
    }
  },
  name: "EnhancedTextarea",
  ports: {
    input: {
      defaultValue: {
        type: "any",
        name: "defaultValue",
        required: false
      },
      disabled: {
        type: "boolean",
        name: "disabled",
        required: false
      },
      onChange: {
        title: "Enable onChange",
        type: "boolean",
        name: "onChange",
        required: false
      },
      onHeightChange: {
        title: "Enable onHeightChange",
        type: "boolean",
        name: "onHeightChange",
        required: false
      },
      rows: {
        type: "number",
        name: "rows",
        "default": 0
      },
      rowsMax: {
        type: "number",
        name: "rowsMax",
        required: false
      },
      shadowStyle: {
        type: "object",
        name: "shadowStyle",
        required: false
      },
      style: {
        type: "object",
        name: "style",
        required: false
      },
      textareaStyle: {
        type: "object",
        name: "textareaStyle",
        required: false
      },
      value: {
        type: "string",
        name: "value",
        required: false
      },
      valueLink: {
        type: "object",
        name: "valueLink",
        required: false
      }
    },
    output: {
      component: {
        title: "EnhancedTextarea",
        type: "Component"
      },
      onChange: {
        type: "any"
      },
      onHeightChange: {
        type: "any"
      }
    }
  }
}