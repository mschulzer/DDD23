function findGGMotiver(inputStreng) {
    
    // Lav et objekt til at holde styr på frekvenserne af mønstrene
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
            //console.log(`Match ved index: ${i}`);
        }
    }

    return frekvenser;
}

let dnaStump = "AGTCCAGTTTAAGTCTGCCGTTTGCTGACAGGACGGCATTGGCTGGGTCGCGGGCAACGTGGTGTCTAC";

console.log(findGGMotiver(dnaStump)); // Output: {GGA: 1, GGC: 3, GGG: 2, GGT: 2}
