let phrases = [
    { text: 'Реализация DIY(Do it yourself)-проектов.', image: 'https://thumb.cloud.mail.ru/weblink/thumb/xw1/6ozq/R9FEQE3yt' },
    { text: 'Высокооплачиваемая работа.', image: 'https://thumb.cloud.mail.ru/weblink/thumb/xw1/daP9/syb9xuuia' },
    { text: 'Территориальная свобода: работаешь, где хочешь.', image: 'https://thumb.cloud.mail.ru/weblink/thumb/xw1/HyHJ/VHkPyz3cD' },
    { text: 'Гибкий рабочий график.', image: 'https://thumb.cloud.mail.ru/weblink/thumb/xw1/yupJ/5mZwm6phm' },
    { text: 'Финансовая возможность помочь родителям.', image: 'https://thumb.cloud.mail.ru/weblink/thumb/xw1/R72M/p12UMByR5' },
    { text: 'Возможность откладывать деньги на безбедную старость.', image: 'https://thumb.cloud.mail.ru/weblink/thumb/xw1/4BgV/ZfwJpGijZ' },
    { text: 'Поехать в отпуск на море.', image: 'https://thumb.cloud.mail.ru/weblink/thumb/xw1/6wby/1rgJjvNU9' },
    { text: 'Собрать мощный компьютер.', image: 'https://thumb.cloud.mail.ru/weblink/thumb/xw1/yBag/3TUMB3tCr' },
    { text: 'Обустроить свое рабочее место профессиональным креслом, столом, светом, монитором.', image: 'https://thumb.cloud.mail.ru/weblink/thumb/xw1/QqjC/78SvaSZum' }
  
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