const javaScriptQuestions = [
  {
    title: 'JavaScript - це ... ?',
    variants: [
      "динамічна, об'єктно-орієнтована прототипна мова програмування",
      'фреймворк мови програмування java',
      'мова програмування для взлому систем безпеки',
    ],
    correct: 0,
  },
  {
    title: 'Скільки типів даних є у JavaScript?',
    variants: ['6', '9', '8'],
    correct: 2,
  },
  {
    title: "Як перевірити, чи є об'єкт масивом?",
    variants: [
      'зробити порівняня с класом Array',
      'є встроєний метод Array.isArray()',
      'просто поставити обьект в console.log(object)',
    ],
    correct: 1,
  },
  {
    title: 'Хибноподібне значення?',
    variants: [
      'false,0,null,undefined',
      '10,javaScript,[1, 2, 3]',
      'всі відповіді не правдиві',
    ],
    correct: 0,
  },
  {
    title: 'Що таке DOM?',
    variants: [
      'це функція',
      "DOM – Document Object Model (об'єктна модель документа). Скрипт який знаходиться на сервері і приходить нам при запросі",
      'DOM – Document Object Model. Іншими словами це дерево всіх вузлів сторінки, які розпізнав браузер в процесі обробки HTML-розмітки',
    ],
    correct: 3,
  },
];

export { javaScriptQuestions };
