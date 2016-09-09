module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Slider/Slider": require('material-ui/Slider/Slider')
    }
  },
  name: "Slider",
  ports: {
    input: {
      axis: {
        type: "enum",
        name: "axis",
        "default": ""
      },
      defaultValue: {
        type: "custom",
        name: "defaultValue",
        required: false
      },
      description: {
        type: "custom",
        name: "description",
        required: false
      },
      disableFocusRipple: {
        type: "boolean",
        name: "disableFocusRipple",
        "default": false
      },
      disabled: {
        type: "boolean",
        name: "disabled",
        "default": false
      },
      error: {
        type: "custom",
        name: "error",
        required: false
      },
      max: {
        type: "custom",
        name: "max",
        "default": null
      },
      min: {
        type: "custom",
        name: "min",
        "default": null
      },
      name: {
        type: "string",
        name: "name",
        required: false
      },
      onBlur: {
        title: "Enable onBlur",
        type: "boolean",
        name: "onBlur",
        required: false
      },
      onChange: {
        title: "Enable onChange",
        type: "boolean",
        name: "onChange",
        required: false
      },
      onDragStart: {
        title: "Enable onDragStart",
        type: "boolean",
        name: "onDragStart",
        required: false
      },
      onDragStop: {
        title: "Enable onDragStop",
        type: "boolean",
        name: "onDragStop",
        required: false
      },
      onFocus: {
        title: "Enable onFocus",
        type: "boolean",
        name: "onFocus",
        required: false
      },
      required: {
        type: "boolean",
        name: "required",
        "default": false
      },
      sliderStyle: {
        type: "object",
        name: "sliderStyle",
        required: false
      },
      step: {
        type: "number",
        name: "step",
        "default": 0
      },
      style: {
        type: "object",
        name: "style",
        "default": {}
      },
      value: {
        type: "custom",
        name: "value",
        required: false
      }
    },
    output: {
      component: {
        title: "Slider",
        type: "Component"
      },
      onBlur: {
        type: "any"
      },
      onChange: {
        type: "any"
      },
      onDragStart: {
        type: "any"
      },
      onDragStop: {
        type: "any"
      },
      onFocus: {
        type: "any"
      }
    }
  }
}