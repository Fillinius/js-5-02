const myName = 'Vladimir'

const programmingLanguage = 'JavaScript'

const courseCreatorName = 'Vladilen'

const reasonText = 'I  am want work in IT'

const numberOfMounth = '2'

let allInfoText = `Всем привет! Меня зовут ${myName} Сейчас я изучаю язык программирования ${programmingLanguage.replaceAll(
  'JavaScript',
  'javascript'
)}  на курсе по ${programmingLanguage.replaceAll(
  'JavaScript',
  'javascript'
)} У ${courseCreatorName} . Я хочу стать веб-разработчиком, потому что ${reasonText} . До этого я изучал ${programmingLanguage.replaceAll(
  'JavaScript',
  'javascript'
)} ${numberOfMounth} месяца. Я уверен, что пройду данный курс до конца!"`
console.log(allInfoText)

console.log('Замена слова курс', allInfoText.replaceAll('курс', 'КУРС'))

console.log('Длина строки', allInfoText.length)

console.log('Первый и последний символы', allInfoText[0], allInfoText[267])

allInfoText = 'JavaScript'
console.log(allInfoText)
