

/******************************************************
 *    ALGORITME # 1
 ******************************************************/
function findGGMotiver(inputStreng) {
    // Lav et objekt over frekvensen af de respektive mønstre
    let frekvenser = {
        'GGA': 0,
        'GGC': 0,
        'GGG': 0,
        'GGT': 0
    };

    // Løb strengen igennem og find eventuelle GG* mønstre
    for (let i = 0; i < inputStreng.length - 2; i++) {
        let moenster = inputStreng.substring(i, i+3); // Udtag en understreng af 3 nukleotider
        if (moenster.startsWith('GG') && frekvenser.hasOwnProperty(moenster)) {
            frekvenser[moenster]++;
        }
    }

    return frekvenser;
}

let dnaStump = "AGTCCAGTTTAAGTCTGCCGTTTGCTGACAGGACGGCATTGGCTGGGTCGCGGGCAACGTGGTGTCTAC";

console.log(findGGMotiver(dnaStump));
