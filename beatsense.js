if (/.*beatsense\.com\/jinnyttyofflinechat.*/.test(window.location.href)){

    setTimeout(() => {
        console.log("content script running...");
        const myScript = document.createElement("script");
        myScript.innerHTML = 'document.querySelector("my-room-chat").remove();const element = document.createElement("iframe");element.setAttribute("src", "https://www.twitch.tv/embed/jinnytty/chat?parent=beatsense.com");element.setAttribute("width", "350");document.querySelector("#playerAndPlaylistArea").prepend(element);'
        document.body.append(myScript);
    }, 2000);
}

document.querySelector("my-room-chat").remove();
const el = document.createElement("iframe");
el.setAttribute("src", "https://www.twitch.tv/embed/jinnytty/chat?parent=beatsense.com");
document.querySelector("#playerAndPlaylistArea").prepend(el);