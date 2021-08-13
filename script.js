/* eslint-disable no-plusplus */
const button = document.querySelector('button');
const input = document.querySelector('.input');
const output = document.querySelector('.output');

// получение ответов
// eslint-disable-next-line consistent-return
function getAnswers() {
  const entry = input.value;
  const answers = [
    'Привет, я чат-бот по аффирмациям! Готова помочь тебе в трудную минуту. Главное правило, мысленно представлять, что всё это уже есть у тебя',
    'Всё прекрасно, а у тебя?',
    'Я тебя не понимаю',
    'На какую тематику хочется получить аффирмацию? Здоровье, счастье, любовь, богатство, успех?',
    'Моя работа приносит мне удовольствие и радость!',
    'Я выгляжу великолепно!',
    'Я впускаю в свою жизнь прекрасные отношения',
    'У меня отличное здоровье',
    'Удача всегда со мной',
    'Я - магнит для денег',
  ];
  for (let j = 0; j < answers.length; j++) {
    if (entry.toLowerCase().includes('прив')
      || entry.toLowerCase().includes('знаком')
      || entry.toLowerCase().includes('здра')
      || entry.toLowerCase().includes('хел')) {
      return answers[0];
    } if (entry.toLowerCase().includes('как')) {
      return answers[1];
    } if (entry.toLowerCase().includes('аффирм')
      || entry.toLowerCase().includes('афирм')
      || entry.toLowerCase().includes('аферм')
      || entry.toLowerCase().includes('жизн')
      || entry.toLowerCase().includes('делать')
      || entry.toLowerCase().includes('меня')
      || entry.toLowerCase().includes('отличн')
      || entry.toLowerCase().includes('хорош')
      || entry.toLowerCase().includes('готов')
      || entry.toLowerCase().includes('получ')
      || entry.toLowerCase().includes('тем')
      || entry.toLowerCase().includes('проблем')) {
      return answers[3];
    } if (entry.toLowerCase().includes('здоров')
      || entry.toLowerCase().includes('кож')
      || entry.toLowerCase().includes('функц')
      || entry.toLowerCase().includes('сердц')
      || entry.toLowerCase().includes('живот')) {
      return answers[7];
    } if (entry.toLowerCase().includes('отношен')
      || entry.toLowerCase().includes('люб')
      || entry.toLowerCase().includes('семь')
      || entry.toLowerCase().includes('близ')
      || entry.toLowerCase().includes('страст')
      || entry.toLowerCase().includes('девуш')
      || entry.toLowerCase().includes('пар')
      || entry.toLowerCase().includes('муж')
      || entry.toLowerCase().includes('жен')) {
      return answers[6];
    } if (entry.toLowerCase().includes('cчасть')
      || entry.toLowerCase().includes('удач')
      || entry.toLowerCase().includes('успе')
      || entry.toLowerCase().includes('самооценк')
      || entry.toLowerCase().includes('мозг')
      || entry.toLowerCase().includes('решительн')
      || entry.toLowerCase().includes('гармон')
      || entry.toLowerCase().includes('вер')
      || entry.toLowerCase().includes('спокойств')
      || entry.toLowerCase().includes('весел')
      || entry.toLowerCase().includes('побед')
      || entry.toLowerCase().includes('проигр')
      || entry.toLowerCase().includes('вер')
      || entry.toLowerCase().includes('вез')
      || entry.toLowerCase().includes('позитив')
      || entry.toLowerCase().includes('безопасн')
      || entry.toLowerCase().includes('возможн')
      || entry.toLowerCase().includes('перем')
      || entry.toLowerCase().includes('энерг')
      || entry.toLowerCase().includes('расслаб')) {
      return answers[8];
    } if (entry.toLowerCase().includes('работ')
      || entry.toLowerCase().includes('профес')
      || entry.toLowerCase().includes('иде')
      || entry.toLowerCase().includes('труд')) {
      return answers[4];
    } if (entry.toLowerCase().includes('лучш')
      || entry.toLowerCase().includes('внешност')
      || entry.toLowerCase().includes('крас')) {
      return answers[5];
    } if (entry.toLowerCase().includes('богат')
      || entry.toLowerCase().includes('деньг')
      || entry.toLowerCase().includes('бабл')
      || entry.toLowerCase().includes('мани')
      || entry.toLowerCase().includes('доход')
      || entry.toLowerCase().includes('зарплат')) {
      return answers[9];
    } if (entry.toLowerCase().includes('уверен')
      || entry.toLowerCase().includes('расска')
      || entry.toLowerCase().includes('повеств')
      || entry.toLowerCase().includes('поговор')
      || entry.toLowerCase().includes('поболта')) {
      return 'Положительные утверждения повышают уверенность в себе. Это лучший способ изменить себя, совершенствоваться и обрести гармонию.';
    } if (entry.toLowerCase().includes('дур')
      || entry.toLowerCase().includes('хулиган')
      || entry.toLowerCase().includes('чудовищ')
      || entry.toLowerCase().includes('сук')) {
      return 'Сам такой';
    } if (entry.toLowerCase().includes('ху')
      || entry.toLowerCase().includes('жоп')
      || entry.toLowerCase().includes('поп')
      || entry.toLowerCase().includes('баню')) {
      return 'Иди сам туда';
    }
    return answers[2];
  }
}

// при большом объеме текста скролл автоматически двигается вниз
function scrollDown() {
  output.scrollTop = output.scrollHeight;
}

// добавление вопросов и ответов в правую часть
function create() {
  const entry = input.value;
  const newDiv1 = document.createElement('div');
  const newDiv2 = document.createElement('div');
  newDiv1.className = 'textOfQuestion';
  newDiv2.className = 'textOfAnswer';
  const answer = getAnswers(entry);
  const question = entry;
  newDiv1.innerText = question;
  newDiv2.innerText = answer;
  output.append(newDiv1);
  output.append(newDiv2);
  scrollDown();
}

// очищение поля ввода при нажатии на кнопку
function clear() {
  input.value = '';
}

button.addEventListener('click', create);
button.addEventListener('click', clear);

// кнопка 'Enter' = 'Нажми меня'
input.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    button.click();
  }
});
