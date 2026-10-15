/*prettierrc*/

/*{
  "printWidth": 100,
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "useTabs": false,
  "plugins": ["prettier-plugin-astro"],
  "tailwindStylesheet": "./src/styles/globals.css",
  "overrides": [
    {
      "files": ["*.astro"],
      "options": {
        "parser": "astro"
      }
    }
  ]
} 
*/
/* settings.jso  */
`
{
  "css.customData": [".vscode/tailwindcss.json"],
  "prettier.documentSelectors": ["**/*.astro"],
  "[astro]": {
    /*  "editor.defaultFormatter": "esbenp.prettier-vscode" */
    "editor.formatOnSave": false,
    "editor.defaultFormatter": null
  },
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit",
    "source.fixAll.eslint": "explicit"
  },
  "files.associations": {
    "*.css": "tailwindcss"
  },
  "editor.quickSuggestions": {
    "strings": "on"
  },
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}`;
