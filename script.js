let phrases = [
    { text: 'Реализация DIY(Do it yourself)-проектов.', image: 'https://archonkod.github.io/public/img/1_DIY.jpg' },
    { text: 'Высокооплачиваемая работа.', image: 'https://archonkod.github.io/public/img/2_JobMoney.jpg' },
    { text: 'Территориальная свобода: работаешь, где хочешь.', image: 'https://archonkod.github.io/public/img/3_WorkOnline.jpg' },
    { text: 'Гибкий рабочий график.', image: 'https://archonkod.github.io/public/img/4_gibkiy_grafik.jpg' },
    { text: 'Финансовая возможность помочь родителям.', image: 'https://archonkod.github.io/public/img/5_FinHelp.jpg' },
    { text: 'Возможность откладывать деньги на безбедную старость.', image: 'https://archonkod.github.io/public/img/6_FinCheck.jpg' },
    { text: 'Поехать в отпуск на море.', image: 'https://archonkod.github.io/public/img/7_weekend.jpg' },
    { text: 'Собрать мощный компьютер.', image: 'https://archonkod.github.io/public/img/8_pc.jpg' },
    { text: 'Обустроить свое рабочее место профессиональным креслом, столом, светом, монитором.', image: 'https://archonkod.github.io/public/img/9_workPlace.jpg' }
  
  ];
  
  function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
  }
  
  let button = document.querySelector('.button');
  let phrase = document.querySelector('.phrase');
  let advice = document.querySelector('.advice');
  let image = document.querySelector('.image');
  
  button.addEventListener('click', function () {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement.text);
    smoothly(image, 'src', randomElement.image);
  
    if (randomElement.text.length > 40) {
      advice.style.fontSize = '33px';
    } else {
      advice.style.fontSize = '42px';
    }
  });
  for(let i=0;i<=2;i=i+1){
    smoothly(phrase,'textContent', phrases[i].text);
    smoothly(image,'src', phrases[i].image);
  }