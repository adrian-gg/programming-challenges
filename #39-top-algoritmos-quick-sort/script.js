/*
 * Reto #39
 * TOP ALGORITMOS: QUICK SORT
 * Dificultad: MEDIA
 * Enunciado: Implementa uno de los algoritmos de ordenación más famosos: el "Quick Sort",
 * creado por C.A.R. Hoare.
 * - Entender el funcionamiento de los algoritmos más utilizados de la historia nos ayuda a
 *   mejorar nuestro conocimiento sobre ingeniería de software. Dedícale tiempo a entenderlo,
 *   no únicamente a copiar su implementación.
 * - Esta es una nueva serie de retos llamada "TOP ALGORITMOS", donde trabajaremos y entenderemos
 *   los más famosos de la historia.
 */

function toSort(nums, left = 0, right = nums.length - 1) {
  let array = [...nums]
  const pivot = (array[left] + array[right]) / 2
  let newLeft = left
  let newRight = right

  while (newLeft < newRight) {
    while (array[newLeft] < pivot) {
      newLeft += 1
    }
    while (array[newRight] > pivot) {
      newRight -= 1
    }

    if (newLeft < newRight) {
      array[newLeft] = nums[newRight]
      array[newRight] = nums[newLeft]
      newLeft += 1
      newRight -= 1
    }
  }

  if (left !== newRight) {
    array = toSort(array, left, newRight)
  }

  if (right !== newLeft) {
    array = toSort(array, newLeft, right)
  }

  return array
}

console.log(toSort([24, 9, 29, 14, 19, 27])) //[ 9, 14, 19, 24, 27, 29 ]
console.log(
  toSort([
    17, 5, 10, 14, 3, 11, 19, 7, 2, 15, 8, 1, 20, 13, 4, 6, 12, 9, 18, 16,
  ])
) //[ 1,  2,  3,  4,  5,  6,  7, 8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]
console.log(toSort([3, 5, 1, 8, 9, 0])) //[ 0, 1, 3, 5, 8, 9 ]
console.log(toSort([9, -3, 5, -2, 6, 8, -6, 1, 3])) //[ -6, -3, -2, 1, 3, 5,  6,  8, 9 ]
