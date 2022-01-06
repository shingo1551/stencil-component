import { Component, Host, h, State } from '@stencil/core';
import state, { purge, done, push } from './todo';

@Component({
  tag: 'app-todo',
  styleUrl: 'app-todo.css',
  shadow: true,
})
export class AppToDo {
  @State() disabled = true;
  @State() loading = true;

  input: HTMLInputElement;

  onPurge = (ev: Event) => {
    ev.preventDefault();
    purge();
  };

  onAdd = (ev: MouseEvent) => {
    ev.preventDefault();
    push({ text: this.input.value, done: false });
    this.input.value = '';
    this.disabled = true;
  };

  onKeyUp = () => {
    this.disabled = !this.input.value;
  };

  render() {
    if (this.loading)
      setTimeout(() => {
        this.loading = false;
      }, 0);
    else
      return (
        <Host>
          <h2>Todo</h2>
          <Purge purge={this.onPurge}></Purge>
          <Ul></Ul>
          <Form comp={this}></Form>
        </Host>
      );
  }
}

const Purge = ({ purge }) => (
  <span>
    {state.count} of {state.list.length} remaining [
    <a href='' onClick={purge}>
      purge
    </a>
    ]
  </span>
);

const Ul = () => (
  <ul>
    {state.list.map((todo, n) => (
      <check-todo
        done={todo.done}
        text={todo.text}
        n={n}
        onTodo={(e) => done(e.detail)}
      />
    ))}
  </ul>
);

const Form = ({ comp }: { comp: AppToDo }) => (
  <form>
    <input
      type='text'
      size={30}
      placeholder='add new todo here'
      ref={(el) => (comp.input = el)}
      onKeyUp={comp.onKeyUp}
    />
    <input
      type='submit'
      value='add'
      onClick={comp.onAdd}
      disabled={comp.disabled}
    />
  </form>
);
