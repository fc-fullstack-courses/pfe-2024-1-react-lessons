/*
  React - точка входу в бібліотеку реакт (як document для DOM)

  React.createElement(
    type,
    props,
    ...children
  ) - створює реактівський елемент

  type - тип елемента
  props - "атрибути" елемент, об'єкт
  children - будь-яка кількість дітей елемента

  ReactDOM - інтерфейс для роботи з віртуальним DOM реакту.

  ReactDOM.createRoot(htmlElement) - створує кореневий елемент реакту
  в якому будуть відобрежаені всі інші елементи
*/
/*
  через ДОМ створити параграф з текстом, надати йому клас
  та відобразити на сторінці
*/

// const root = document.getElementById('root');

// const par = document.createElement('p');
// par.textContent = 'Lorem Ipsum';
// par.classList.add('text');

// root.append(par);

const htmlContainer = document.getElementById('root');
const root = ReactDOM.createRoot(htmlContainer);

// в реакті класи заносятся в атрибут className
const par = React.createElement(
  'p',
  { className: 'text', title: 'this is title' },
  'Lorem Ipsum'
);

console.log(par);

root.render(par);

/*
  Під'єднанти до html файлу скрипти з реактом і ReactDOM
  створити дів з айдішником root знайти його у коді

  створити реактівський елемент h1 з класомб тайтлом і id
  і якимось текстом

  потім відобразити цей елемент через реактівський рут
*/
