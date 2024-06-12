const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
  console.log('this is response inside event listener:\n', xhr.response);
});

xhr.open('GET', 'https://supersimplebackend.dev');
// xhr.open('GET', 'https://supersimplebackend.dev/hello');
// xhr.open('GET', 'https://supersimplebackend.dev/products/first');
// xhr.open('GET', 'https://supersimplebackend.dev/documentation');
// xhr.open('GET', 'https://supersimplebackend.dev/images/apple.jpg');

xhr.send();