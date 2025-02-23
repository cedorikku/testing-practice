const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

export const caesarCipher = (text, key) => {
    return text
        .split('')
        .map((char) => {
            const index = alphabet.indexOf(char.toLowerCase());
            if (index === -1) return char;
            const shiftedIndex = (index + key) % alphabet.length;

            return char === char.toUpperCase()
                ? alphabet[shiftedIndex].toUpperCase()
                : alphabet[shiftedIndex];
        })
        .join('');
};