
/**
 * Greeting class
 */
export class Hello {
  /**
   * Greeting string
   */
  protected greeting = 'Hello';
}

/**
 * Entity class
 */
export class World extends Hello {
  // Entity name
  public name = 'world';

  // Entity greeting
  public greet() {
    return `${this.greeting} ${this.name}!`;
  }
}

/**
 * HelloWorld class
 */
export class HelloWorld {

  /**
   * String value
   */
  toString() {
    return new World().greet();
  }
}
