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
        name: "children"
      },
      className: {
        type: "string",
        name: "className"
      },
      contentContainerClassName: {
        type: "string",
        name: "contentContainerClassName"
      },
      contentContainerStyle: {
        type: "object",
        name: "contentContainerStyle"
      },
      initialSelectedIndex: {
        type: "number",
        name: "initialSelectedIndex",
        "default": ""
      },
      inkBarStyle: {
        type: "object",
        name: "inkBarStyle"
      },
      onChange: {
        title: "Enable onChange",
        type: "boolean",
        name: "onChange",
        "default": false
      },
      style: {
        type: "object",
        name: "style"
      },
      tabItemContainerStyle: {
        type: "object",
        name: "tabItemContainerStyle"
      },
      tabTemplate: {
        title: "Enable tabTemplate",
        type: "boolean",
        name: "tabTemplate"
      },
      value: {
        type: "any",
        name: "value"
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