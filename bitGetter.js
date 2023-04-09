// ## Написать функцию, которая принимает Uint8Array и позволяет обратиться к биту конкретного элемента

// 1110
// 0010
// ====
// 0010

const bitGetter = createBitGetter(new Uint8Array([0b1110, 0b1101]));

// Второй параметр это порядок бита "справа-налево"
console.log(bitGetter.get(0, 1)); // 1
console.log(bitGetter.get(1, 1)); // 0

// ## Расширить функцию из прошлого задания возможностью изменять значение конкретного бита


const bitAccessor = createBitGetter(new Uint8Array([0b1110, 0b1101]));


// Второй параметр это порядок бита "справа-налево"
console.log(bitAccessor.set(0, 1, 0)); // 
console.log(bitAccessor.get(0, 1));    // 0

function createBitGetter(unitArray) {
  return {
    
    get(indexOfNumber, indexOfBit) {
      return (unitArray[indexOfNumber] & (1 << indexOfBit)) === 0 ? 0 : 1
    },
    
    set(indexOfNumber, indexOfBit, bit) {

      if (this.get(indexOfNumber, indexOfBit) !== bit) {
        unitArray[indexOfNumber] = unitArray[indexOfNumber] ^ (1 << indexOfBit);
      }
      
    }
    
  }
}
