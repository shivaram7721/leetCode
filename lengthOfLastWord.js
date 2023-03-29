var lengthOfLastWord = function(s) {
    const words = s.trim().split(' ');
    return words[words.length - 1].length;
};

// const res = console.log(lengthOfLastWord("   fly me   to   the moon  "))
const res = console.log(lengthOfLastWord("Hello World"))