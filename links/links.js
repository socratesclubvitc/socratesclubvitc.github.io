const PAPA_OPTIONS = {
    header: true,
    delimiter: ',',
    newline: '\n',
    quoteChar: '"',
    skipEmptyLines: false,
}

function init() {
    fetch("links.json").then((res) => {
        return res.json()
    }).then((parsed) => {
        let container = document.querySelector("#landing-container");
        for (let obj of parsed) {
            if (obj.category) {
                let h2 = document.createElement('h2');
                h2.innerHTML = obj.category;
                container.appendChild(h2);
            }
            let btn = document.createElement("a");
            btn.classList = 'landing-btn'
            btn.href = obj.url;
            btn.target = "_blank";
            btn.innerHTML = `${obj.text}`;
            container.appendChild(btn);
        }
    }).catch((reason) => {
        document.querySelector("#landing-container").appendChild(document.createTextNode(`Error loading link file: ${reason}`));
    })
}

window.onload = init;