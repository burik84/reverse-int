module.exports = function reverse(n) {
    let num = String(n)
        .replace(/^\D/g, "")
        .split("")
        .reverse()
        .join("");

    // console.log(num);

    return Number(num);
}