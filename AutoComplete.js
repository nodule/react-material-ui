module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/AutoComplete/AutoComplete": require('material-ui/AutoComplete/AutoComplete')
    }
  },
  name: "AutoComplete",
  ports: {
    input: {
      anchorOrigin: {
        type: "custom",
        name: "anchorOrigin",
        "default": null
      },
      animated: {
        type: "boolean",
        name: "animated",
        "default": false
      },
      animation: {
        title: "Enable animation",
        type: "boolean",
        name: "animation",
        required: false
      },
      dataSource: {
        type: "array",
        name: "dataSource",
        required: true
      },
      dataSourceConfig: {
        type: "object",
        name: "dataSourceConfig",
        "default": {}
      },
      disableFocusRipple: {
        type: "boolean",
        name: "disableFocusRipple",
        "default": false
      },
      errorStyle: {
        type: "object",
        name: "errorStyle",
        required: false
      },
      errorText: {
        type: "node",
        name: "errorText",
        required: false
      },
      filter: {
        title: "Enable filter",
        type: "boolean",
        name: "filter",
        "default": false
      },
      floatingLabelText: {
        type: "node",
        name: "floatingLabelText",
        required: false
      },
      fullWidth: {
        type: "boolean",
        name: "fullWidth",
        "default": false
      },
      hintText: {
        type: "node",
        name: "hintText",
        required: false
      },
      listStyle: {
        type: "object",
        name: "listStyle",
        required: false
      },
      maxSearchResults: {
        type: "number",
        name: "maxSearchResults",
        required: false
      },
      menuCloseDelay: {
        type: "number",
        name: "menuCloseDelay",
        "default": 0
      },
      menuProps: {
        type: "object",
        name: "menuProps",
        required: false
      },
      menuStyle: {
        type: "object",
        name: "menuStyle",
        required: false
      },
      onBlur: {
        title: "Enable onBlur",
        type: "boolean",
        name: "onBlur",
        required: false
      },
      onFocus: {
        title: "Enable onFocus",
        type: "boolean",
        name: "onFocus",
        required: false
      },
      onKeyDown: {
        title: "Enable onKeyDown",
        type: "boolean",
        name: "onKeyDown",
        required: false
      },
      onNewRequest: {
        title: "Enable onNewRequest",
        type: "boolean",
        name: "onNewRequest",
        "default": false
      },
      onUpdateInput: {
        title: "Enable onUpdateInput",
        type: "boolean",
        name: "onUpdateInput",
        "default": false
      },
      open: {
        type: "boolean",
        name: "open",
        "default": false
      },
      openOnFocus: {
        type: "boolean",
        name: "openOnFocus",
        "default": false
      },
      searchText: {
        type: "string",
        name: "searchText",
        "default": ""
      },
      style: {
        type: "object",
        name: "style",
        required: false
      },
      targetOrigin: {
        type: "custom",
        name: "targetOrigin",
        "default": null
      },
      textFieldStyle: {
        type: "object",
        name: "textFieldStyle",
        required: false
      }
    },
    output: {
      component: {
        title: "AutoComplete",
        type: "Component"
      },
      animation: {
        type: "any"
      },
      filter: {
        type: "any"
      },
      onBlur: {
        type: "any"
      },
      onFocus: {
        type: "any"
      },
      onKeyDown: {
        type: "any"
      },
      onNewRequest: {
        type: "any"
      },
      onUpdateInput: {
        type: "any"
      }
    }
  }
}