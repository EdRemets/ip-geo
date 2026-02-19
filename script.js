const ipinput = document.querySelector(".ipinput");
const getgeobtn = document.querySelector(".getgeobtn");
const box = document.querySelector(".box");

async function getip2location(ip) {
    const response = await fetch('https://apip.cc/api-json/' + ip);
    const data = await response.json();
    const datastring = JSON.stringify(data);
    // dataparagraph.textContent = datastring;
    let paragraphsdiv = document.querySelector(".paragraphsdiv");
    let dataparagraph = document.querySelector(".dataparagraph");
    let infoparagraph = document.querySelector(".infoparagraph");
    if (!paragraphsdiv) {
        paragraphsdiv = document.createElement('div');
        paragraphsdiv.className = "paragraphsdiv";
        dataparagraph = document.createElement('p');
        dataparagraph.className = "dataparagraph";
        infoparagraph = document.createElement('p');
        infoparagraph.className = "infoparagraph";
        paragraphsdiv.appendChild(dataparagraph);
        paragraphsdiv.appendChild(infoparagraph);
        box.appendChild(paragraphsdiv);
    }
    if (data.status !== "success") {
        dataparagraph.textContent = "Error";
        return;
    }
    infoparagraph.textContent = "Country: " + data.CountryName + "\n\n" 
        + "Organization: " + data.org + "\n\n" 
        + "Latitude: " + data.Latitude + "\n\n"
        + "Longitude: " + data.Longitude + "\n\n";
        + "Timezone: " + data.TimeZone;
}

getgeobtn.addEventListener('click', function() {
    getip2location(ipinput.value);
});