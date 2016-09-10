module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/RadioButton/RadioButtonGroup": require('material-ui/RadioButton/RadioButtonGroup')
    }
  },
  name: "RadioButtonGroup",
  ports: {
    input: {
      children: {
        type: "array",
        propType: "node",
        name: "children",
        required: false
      },
      className: {
        type: "string",
        name: "className",
        required: false
      },
      defaultSelected: {
        type: "any",
        name: "defaultSelected",
        required: false
      },
      labelPosition: {
        type: "enum",
        name: "labelPosition",
        required: false
      },
      name: {
        type: "string",
        name: "name",
        required: true
      },
      onChange: {
        title: "Enable onChange",
        type: "boolean",
        name: "onChange",
        required: false
      },
      style: {
        type: "object",
        name: "style",
        "default": {}
      },
      valueSelected: {
        type: "any",
        name: "valueSelected",
        required: false
      }
    },
    output: {
      component: {
        title: "RadioButtonGroup",
        type: "Component"
      },
      onChange: {
        type: "any"
      }
    }
  }
}