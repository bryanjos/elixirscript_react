# Elixirscript React Example

This project shows an example of using Elixirscript with React. 

There is an Elixir module ,`R`, defined at `app/elixirscript/r.ex` that creates macros that create React elements.

The module, `App`, defined at `app/elixirscript/app.ex` uses these macros to create React elements thanks to React's ability to make stateless components. The rest of the module shows something
similar to the Elm architecture: Model, View, Update.

The model here is just a map with name and email fields. The model is saved within an Agent.

The update function is responsible for taking messages and using them to update the model. At the very end, it renders the new view.

The view is a function that creates HTML via React components. In the example, it also defines helper view functions to compose together the main view. This is less typical of something you would see in React and more like the patterns seen in Elm.

## Requirements

Must have [elixirscript](https://github.com/bryanjos/elixirscript) installed.

## Comands

Build: `npm run build` - Build result will be in the `dist` folder

Dev Server: `npm run server` - Runs the webpack development server
