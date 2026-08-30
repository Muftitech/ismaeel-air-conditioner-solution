document.getElementById("bookingForm").addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let location = document.getElementById("location").value;
let vehicle = document.getElementById("vehicle").value;
let date = document.getElementById("date").value;
let time = document.getElementById("time").value;
let problem = document.getElementById("problem").value;

let message =
`*NEW ON-SITE SERVICE BOOKING*

👤 Name: ${name}

📞 Phone: ${phone}

📍 Location: ${location}

🚗 Vehicle: ${vehicle}

📅 Date: ${date}

🕒 Time: ${time}

❄️ AC Problem:
${problem}`;

let url = "https://wa.me/2348063302549?text=" + encodeURIComponent(message);

window.open(url, "_blank");

});
