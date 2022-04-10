for (var i = 0; i < 10; i++) {
    console.log("hello world"). {

    }
    console.log("i");
}

for (let i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log("i");
    }, 1000);
})
}
for (var i = 0; i < 10; i++) {
    setTimeout(console.log.bind(console, i), 1000);
}