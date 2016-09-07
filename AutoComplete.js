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
        name: "animation"
      },
      dataSource: {
        type: "array",
        name: "dataSource"
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
        name: "errorStyle"
      },
      errorText: {
        type: "node",
        name: "errorText"
      },
      filter: {
        title: "Enable filter",
        type: "boolean",
        name: "filter",
        "default": false
      },
      floatingLabelText: {
        type: "node",
        name: "floatingLabelText"
      },
      fullWidth: {
        type: "boolean",
        name: "fullWidth",
        "default": false
      },
      hintText: {
        type: "node",
        name: "hintText"
      },
      listStyle: {
        type: "object",
        name: "listStyle"
      },
      maxSearchResults: {
        type: "number",
        name: "maxSearchResults"
      },
      menuCloseDelay: {
        type: "number",
        name: "menuCloseDelay",
        "default": ""
      },
      menuProps: {
        type: "object",
        name: "menuProps"
      },
      menuStyle: {
        type: "object",
        name: "menuStyle"
      },
      onBlur: {
        title: "Enable onBlur",
        type: "boolean",
        name: "onBlur"
      },
      onFocus: {
        title: "Enable onFocus",
        type: "boolean",
        name: "onFocus"
      },
      onKeyDown: {
        title: "Enable onKeyDown",
        type: "boolean",
        name: "onKeyDown"
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
        name: "style"
      },
      targetOrigin: {
        type: "custom",
        name: "targetOrigin",
        "default": null
      },
      textFieldStyle: {
        type: "object",
        name: "textFieldStyle"
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