import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-profile',
  styleUrl: 'my-profile.css',
  shadow: true,
})
export class AppProfile {
  @Prop() name: string;

  normalize = (name: string) =>
    name
      ? name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase()
      : 'NO NAME';

  render() {
    return (
      <div>
        <p>Hello! My name is {this.normalize(this.name)}.</p>
      </div>
    );
  }
}
