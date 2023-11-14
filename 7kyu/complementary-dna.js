// ❓DESCRIPTION:
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side.
// DNA strand is never empty or there is no DNA at all (again, except for Haskell).
// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

// ✅ Solution1:(моё решение):
function x(str) {
  let arr = []
  for (let values of [...str]) {
    if (values === 'A') {
      arr.push('T')
    }
    if (values === 'T') {
      arr.push('A')
    }
    if (values === 'C') {
      arr.push('G')
    }
    if (values === 'G') {
      arr.push('C')
    }
  }
  return arr.join('')
}
console.log(x('ATCCGT')) // 'TAGGCA'

// ✅ Solution2:

function DNAStrand(dna) {
  const pairs = { A: 'T', T: 'A', C: 'G', G: 'C' }
  return dna
    .split('')
    .map(function (v) {
      return pairs[v]
    })
    .join('')
}

console.log(DNAStrand('AAATTTCCCGGG')) //TTTAAAGGGCCC
