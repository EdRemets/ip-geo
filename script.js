const ipinput = document.querySelector(".ipinput");
const getgeobtn = document.querySelector(".getgeobtn");
const infoparagraph = document.querySelector(".infoparagraph");
const countryparagraph = document.querySelector(".countryparagraph");
const organizationparagraph = document.querySelector(".organizationparagraph");
const latitudeparagraph = document.querySelector(".latitudeparagraph");
const longitudeparagraph = document.querySelector(".longitudeparagraph");
const timezoneparagraph = document.querySelector(".timezoneparagraph");

async function getip2location(ip) {
    const response = await fetch('https://apip.cc/api-json/' + ip);
    const data = await response.json();
    const datastring = JSON.stringify(data);
    // infoparagraph.textContent = datastring;
    countryparagraph.textContent = "Country: " + data.CountryName;
    organizationparagraph.textContent = "Organization: " + data.org;
    latitudeparagraph.textContent = "Latitude: " + data.Latitude;
    longitudeparagraph.textContent = "Longitude: " + data.Longitude;
    timezoneparagraph.textContent = "Timezone: " + data.TimeZone;
}

getgeobtn.addEventListener('click', function() {
    getip2location(ipinput.value);
});

