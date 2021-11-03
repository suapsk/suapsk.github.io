// Random Seed Generator

function getTime() {
	var t = new Date();
    var sec = t.getSeconds();
    var msec = t.getMilliseconds();
    var min = t.getMinutes();
    var hr = t.getHours();
    var d = t.getDate();
    var m = t.getMonth();
    var y = t.getFullYear();
    const arg0 = m + d + hr + min + sec + msec;
    const arg1 = y - sec;
    const num0 = y * arg0 + arg1 ;
    const arg2 = y * num0;
    const num1 = y + arg2 + 1;
    const num2 = num1 - sec * y;
    const arg3 = sec * msec * arg0 + 1;
    const timehash = num2 * arg3 + 1;
    const locate = document.getElementById("timehash");
    locate.innerHTML = timehash;
}
setInterval(getTime, 100);

function generateSeed() {
	var t = new Date();
    var sec = t.getSeconds();
    var msec = t.getMilliseconds();
    var min = t.getMinutes();
    var hr = t.getHours();
    var d = t.getDate();
    var m = t.getMonth();
    var y = t.getFullYear();
    const arg0 = m + d + hr + min + sec + msec;
    const arg1 = y - sec;
    const num0 = y * arg0 + arg1 ;
    const arg2 = y * num0;
    const num1 = y + arg2 + 1;
    const num2 = num1 - sec * y;
    const arg3 = sec * msec * arg0 + 1;
    const seed = num2 * arg3 + 1;
    const locate = document.getElementById("uid_19");
	locate.value = seed;
}

function copyseed() {
	const seedvalue = document.getElementById('uid_19').value;
	navigator.clipboard.writeText(seedvalue);
}
