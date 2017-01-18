# Elixirscript React Example

This project is an example of using Elixirscript with React.

The `R` module at `app/elixirscript/r.ex` defines macros that create React elements.

The `App` module at `app/elixirscript/app.ex`, uses these macros to create React components. The rest of the module uses a Model, View, Update architecture.

The model here is just a map with name and email fields. An Agent holds the model.

The update function handles taking messages and using them to update the model. Finally, it renders the new view.

The view is a function that creates HTML via React components. In the example, it also defines helper view functions to compose together the main view. This is less typical of something you would see in React and more like the patterns seen in Elm.

## Requirements

Must have [elixirscript](https://github.com/bryanjos/elixirscript) installed.

## Comands

Install Dependencies: `npm install`

Build: `npm run build` - Build result will be in the `dist` folder

Dev Server: `npm run server` - Runs the webpack development server
