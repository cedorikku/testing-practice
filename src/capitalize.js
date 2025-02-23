export const capitalize = (text) => {
    if (!text) return null;
    if (!text.trim()) return null;

    let letters = text.split('');
    letters[0] = letters[0].toUpperCase();

    return letters.join('');
};