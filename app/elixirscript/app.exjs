defmodule App do
  @on_js_load :main  
  require JS
  use R

  def initial_state() do
    %{name: "", email: ""}
  end

  def update(event, msg) do
    Agent.update(:model, fn(state) ->
      case msg do
        :name ->
                %{state | name: event.target.value}
        :email ->
                %{state | email: event.target.value}
      end
    end)

    render()
  end

  def my_form(model) do
    form do
      input [type: "text", placeholder: "Name", onChange: &update(&1, :name), value: model.name]
      input [type: "email", placeholder: "Email", onChange: &update(&1, :email), value: model.email]
    end    
  end

  def field(title, value) do
    div do
      "#{title}: #{value}"
    end
  end

  def view(model) do
    div do
      my_form(model)
      field("Name", model.name)
      field("Email", model.email)
    end
  end

  def render() do
    Agent.get(:model, fn(state) -> state end)
    |> view
    |> ReactDOM.render(:document.getElementById("main"))
  end

  def main() do
    Agent.start(&initial_state/0, [name: :model])
    render()
  end
end
