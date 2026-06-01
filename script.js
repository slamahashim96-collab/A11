// ==========================
// FLIGHT BOOKING SYSTEM JS
// ==========================

let ticketID = "";

// STEP 1: GO TO PAYMENT PAGE
function goPayment(){

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let date = document.getElementById("date").value;

    // Validation
    if(name === "" || phone === "" || email === "" || from === "" || to === "" || date === ""){
        alert("Please fill all the fields before continuing.");
        return;
    }

    // Show payment box
    document.getElementById("paymentBox").style.display = "block";

    // Scroll to payment
    document.getElementById("paymentBox").scrollIntoView({behavior: "smooth"});
}


// STEP 2: FAKE PAYMENT PROCESS
function payNow(){

    let email = document.getElementById("email").value;

    // Generate Ticket ID
    ticketID = "TKT-" + Math.floor(Math.random() * 1000000000);

    // Show email status (fake sending)
    document.getElementById("emailBox").style.display = "block";
    document.getElementById("emailStatus").innerText =
    "✅ Payment Successful! Ticket has been sent to: " + email;


    // Show ticket box
    document.getElementById("ticketBox").style.display = "block";

    // Fill ticket details
    document.getElementById("tid").innerText = ticketID;
    document.getElementById("tname").innerText = document.getElementById("name").value;
    document.getElementById("tfrom").innerText = document.getElementById("from").value;
    document.getElementById("tto").innerText = document.getElementById("to").value;
    document.getElementById("tdate").innerText = document.getElementById("date").value;


    // Generate QR Code
    document.getElementById("qrcode").innerHTML = "";

    new QRCode(document.getElementById("qrcode"), {
        text: `
Ticket ID: ${ticketID}
Name: ${document.getElementById("name").value}
From: ${document.getElementById("from").value}
To: ${document.getElementById("to").value}
Date: ${document.getElementById("date").value}
        `,
        width: 180,
        height: 180
    });

}


// OPTIONAL: RESET SYSTEM
function resetForm(){
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("from").value = "";
    document.getElementById("to").value = "";
    document.getElementById("date").value = "";

    document.getElementById("paymentBox").style.display = "none";
    document.getElementById("ticketBox").style.display = "none";
    document.getElementById("emailBox").style.display = "none";

    document.getElementById("qrcode").innerHTML = "";
}
