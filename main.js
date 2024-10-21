const key = "AIzaSyDw2FK7h4hvoTPRWMSni0XZHKcAd8xite0";
const channelId = "UCZFdYZT2VBHONg9a7FWxHtw";
const descriptionLabel = document.querySelector("#description")

let getSubscribers = () => {
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${key}`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        const subCount = data.items[0].statistics.subscriberCount;
        const subCountWithCommas = subCount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        descriptionLabel.innerHTML = `Hi! I'm Noob1e, a Roblox content creator with ${subCountWithCommas} subscribers.`;
    });
}

getSubscribers();

const ytDiv = document.querySelector("#yt-link");
const xDiv = document.querySelector("#x-link");
const rblxDiv = document.querySelector("#rblx-link");
const dcDiv = document.querySelector("#dc-linl");

ytDiv.addEventListener("click", () => {
    window.open("https://youtube.com/@noob1eplaysroblox?sub_confirmation=1", "_blank").focus();
});

xDiv.addEventListener("click", () => {
    window.open("https://x.com/noob1eplaysrblx", "_blank").focus();
});

rblxDiv.addEventListener("click", () => {
    window.open("https://www.roblox.com/users/2674144365/profile", "_blank").focus();
});

dcDiv.addEventListener("click", () => {
    window.open("https://discord.gg/ZxfuN77tBd", "_blank").focus();
});