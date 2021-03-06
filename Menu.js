module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Menu/Menu": require('material-ui/Menu/Menu')
    }
  },
  name: "Menu",
  ports: {
    input: {
      autoWidth: {
        type: "boolean",
        name: "autoWidth",
        "default": false
      },
      children: {
        type: "array",
        propType: "node",
        name: "children",
        required: false
      },
      desktop: {
        type: "boolean",
        name: "desktop",
        "default": false
      },
      disableAutoFocus: {
        type: "boolean",
        name: "disableAutoFocus",
        "default": false
      },
      initiallyKeyboardFocused: {
        type: "boolean",
        name: "initiallyKeyboardFocused",
        "default": false
      },
      listStyle: {
        type: "object",
        name: "listStyle",
        required: false
      },
      maxHeight: {
        type: "number",
        name: "maxHeight",
        "default": 0
      },
      multiple: {
        type: "boolean",
        name: "multiple",
        "default": false
      },
      onChange: {
        title: "Enable onChange",
        type: "boolean",
        name: "onChange",
        "default": false
      },
      onEscKeyDown: {
        title: "Enable onEscKeyDown",
        type: "boolean",
        name: "onEscKeyDown",
        "default": false
      },
      onItemTouchTap: {
        title: "Enable onItemTouchTap",
        type: "boolean",
        name: "onItemTouchTap",
        "default": false
      },
      onKeyDown: {
        title: "Enable onKeyDown",
        type: "boolean",
        name: "onKeyDown",
        "default": false
      },
      selectedMenuItemStyle: {
        type: "object",
        name: "selectedMenuItemStyle",
        required: false
      },
      style: {
        type: "object",
        name: "style",
        required: false
      },
      value: {
        type: "any",
        name: "value",
        required: false
      },
      valueLink: {
        type: "object",
        name: "valueLink",
        required: false
      },
      width: {
        type: "custom",
        name: "width",
        required: false
      }
    },
    output: {
      component: {
        title: "Menu",
        type: "Component"
      },
      onChange: {
        type: "any"
      },
      onEscKeyDown: {
        type: "any"
      },
      onItemTouchTap: {
        type: "any"
      },
      onKeyDown: {
        type: "any"
      }
    }
  }
}