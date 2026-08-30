document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("bookingForm");

    if (!form) return;

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const location = document.getElementById("location").value;
        const vehicle = document.getElementById("vehicle").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const problem = document.getElementById("problem").value;

        const message =
`🚗 *NEW HOME / ON-SITE AC SERVICE BOOKING*

👤 Name: ${name}

📞 Phone: ${phone}

📍 Location: ${location}

🚘 Vehicle: ${vehicle}

📅 Preferred Date: ${date}

🕒 Preferred Time: ${time}

❄️ AC Problem:
${problem}`;

        const whatsapp =
"https://wa.me/2348063302549?text=" +
encodeURIComponent(message);

        window.open(whatsapp, "_blank");

    });

});
