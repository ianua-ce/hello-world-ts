import { HelloWorld } from '.';

describe('Hello world!', () => {
  it('"HelloWorld" class string value is "Hello World!"', () => {
    expect(String(new HelloWorld()) ).toEqual('Hello world!');
  });
});
