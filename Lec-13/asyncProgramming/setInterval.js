
const id = setInterval(() => {
    console.log("hello guys!!");
}, 2000);

setTimeout(() => {
    clearInterval(id);
}, 6000);