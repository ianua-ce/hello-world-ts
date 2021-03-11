import helloWorld from '.';

describe('Hello world!', () => {
  it('hello-world module exports "Hello world!" string', () => {
    expect(helloWorld).toEqual('Hello world!');
  });
});
