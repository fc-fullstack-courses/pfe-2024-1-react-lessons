
/*
  через ДОМ створити параграф з текстом, надати йому клас
  та відобразити на сторінці
*/

const root = document.getElementById('root');

const par = document.createElement('p');
par.textContent = 'Lorem Ipsum';
par.classList.add('text');

root.append(par);