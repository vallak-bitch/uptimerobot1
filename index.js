const axios = require("axios")
const urls = ["https://lean-pyroraptor-lcx41j4oo.glitch.me/"]
setInterval(function() {
            urls.forEach(url => {
            axios.get(url).then(console.log("Pong at " + Date.now())).catch(() => {});
        })
    }, 60 * 1000);
