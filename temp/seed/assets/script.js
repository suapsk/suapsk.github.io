// Random Seed Generator

function getTime() {
	var t = new Date();
    var sec = t.getSeconds();
    var msec = t.getMilliseconds();
    const locate = document.getElementById("timehash");
    const num0 = sec;
    const num1 = msec;
    const num2 = sec + msec;
    const num3 = msec - sec;
    const num4 = sec * msec;
    const hash0 = num2  + num1 + num3 + num4 + num4 + num3 + num0 * num1 * num2 * num4;
    const hash1 = num2 * num0 +  num1 + num3 + num4 + num4 + num3 * num4 + num4 * num2;
    const timehash = hash0 + hash1 * hash0 + 1;
    locate.innerHTML = timehash;
}
setInterval(getTime, 100);


function generateSeed() {
	var t = new Date();
    var sec = t.getSeconds();
    var msec = t.getMilliseconds();
    const locate = document.getElementById("uid_19");
    const num0 = sec;
    const num1 = msec;
    const num2 = sec + msec;
    const num3 = msec - sec;
    const num4 = sec * msec;
    const hash0 = num2  + num2 + num3 + num4 + num4 + num3 + num0 * num1 * num2 * num4;
    const hash1 = num2 * num0 +  num1 + num3 + num4 + num4 + num3 * num4 + num4 * num2;
    const seed = hash0 + hash1 * hash0 + 1;
	locate.value = seed;
}

function copyseed() {
	const seedvalue = document.getElementById('uid_19').value;
	navigator.clipboard.writeText(seedvalue);
}











 /*
return `${Math.floor(Math.random() * 0*ffffffffffffffff)
		.toString(16)
		.padEnd(16, "0")}`;









 */