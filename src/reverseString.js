export const reverseString = (text) => {
    if (!text) return '';
    if (!text.trim()) return '';

    return text.split('').reverse().join('');
};
