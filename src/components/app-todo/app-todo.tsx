import { Component, Host, h, State } from '@stencil/core';
import state, { purge, done, push } from './todo';

@Component({
  tag: 'app-todo',
  styleUrl: 'app-todo.css',
  shadow: true,
})
export class AppToDo {
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
        <span>
          {state.count} of {state.list.length} remaining
        </span>
        [{' '}
        <a href='' onClick={this.onPurge}>
          purge
        </a>{' '}
        ]
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
        <form>
          <input
            type='text'
            size={30}
            placeholder='add new todo here'
            ref={(el) => (this.input = el)}
            onKeyUp={this.onKeyUp}
          />
          <input
            type='submit'
            value='add'
            onClick={this.onAdd}
            disabled={this.disabled}
          />
        </form>
      </Host>
    );
  }
}
