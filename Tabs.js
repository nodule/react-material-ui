module.exports = {
  description: "",
  ns: "react-material-ui",
  type: "ReactNode",
  dependencies: {
    npm: {
      "material-ui/Tabs/Tabs": require('material-ui/Tabs/Tabs')
    }
  },
  name: "Tabs",
  ports: {
    input: {
      children: {
        type: "node",
        name: "children",
        required: false
      },
      className: {
        type: "string",
        name: "className",
        required: false
      },
      contentContainerClassName: {
        type: "string",
        name: "contentContainerClassName",
        required: false
      },
      contentContainerStyle: {
        type: "object",
        name: "contentContainerStyle",
        required: false
      },
      initialSelectedIndex: {
        type: "number",
        name: "initialSelectedIndex",
        "default": 0
      },
      inkBarStyle: {
        type: "object",
        name: "inkBarStyle",
        required: false
      },
      onChange: {
        title: "Enable onChange",
        type: "boolean",
        name: "onChange",
        "default": false
      },
      style: {
        type: "object",
        name: "style",
        required: false
      },
      tabItemContainerStyle: {
        type: "object",
        name: "tabItemContainerStyle",
        required: false
      },
      tabTemplate: {
        title: "Enable tabTemplate",
        type: "boolean",
        name: "tabTemplate",
        required: false
      },
      value: {
        type: "any",
        name: "value",
        required: false
      }
    },
    output: {
      component: {
        title: "Tabs",
        type: "Component"
      },
      onChange: {
        type: "any"
      },
      tabTemplate: {
        type: "any"
      }
    }
  }
}