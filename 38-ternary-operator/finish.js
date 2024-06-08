/** ЗАДАЧА 38 - Тернарный оператор
 *
 * 1. Перепишите инструкцию "if .. else" без использования "else"
 *
 * 2. Перепишите содержимое функции, используя тернарный оператор
 *
 * 3. Замените обычную функцию на стрелочную функцию
 */

function isArrayEmpty(inputArray) {
  if (inputArray.length > 0) {
    return 'Массив не пустой'
  }
    return 'Массив пустой'
}
function isArrayEmpty2(inputArray) {
  return (inputArray.length > 0) ? 'Массив не пустой' : 'Массив пустой'
}

const isArrayEmpty3 = (inputArray) => inputArray.length > 0 ? 'Массив не пустой' : 'Массив пустой'

console.log(isArrayEmpty([1, 3]))
console.log(isArrayEmpty([]))

console.log(isArrayEmpty2([1, 3]))
console.log(isArrayEmpty2([]))

console.log(isArrayEmpty3([1, 3]))
console.log(isArrayEmpty3([]))