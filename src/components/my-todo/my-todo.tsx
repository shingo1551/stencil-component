import { Component, Host, h, State } from '@stencil/core';
import state, { purge, done, push } from './todo';

@Component({
  tag: 'my-todo',
  styleUrl: 'my-todo.css',
  shadow: true,
})
export class MyToDo {
  @State() loading = true;
  @State() disabled = true;

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
    return (
      <Host>
        <h2>Todo</h2>
        <Purge purge={this.onPurge}></Purge>
        <List></List>
        <Form comp={this}></Form>
      </Host>
    )
  }
}

const Purge = ({ purge }) => (
  <span>
    {state.count} of {state.list.length} remaining
    <button onClick={purge}>
      purge
    </button>
  </span>
);

const List = () => (
  <ul>
    {state.list.map((todo, n) => (
      <my-check-todo
        done={todo.done}
        text={todo.text}
        n={n}
        onTodo={(e) => done(e.detail)}
      />
    ))}
  </ul>
);

const Form = ({ comp }: { comp: MyToDo }) => (
  <form>
    <input
      type='text'
      size={30}
      placeholder='add new todo here'
      ref={(el) => (comp.input = el)}
      onKeyUp={comp.onKeyUp}
    />
    <button onClick={comp.onAdd} disabled={comp.disabled}>add</button>
  </form>
);
