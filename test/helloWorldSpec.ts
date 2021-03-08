import helloWorld from 'hello-world';

describe('Hello world!', () => {
  it('hello-world module exports "Hello world!" string', () => {
    expect(helloWorld).toEqual('Hello world!');
  });
});
