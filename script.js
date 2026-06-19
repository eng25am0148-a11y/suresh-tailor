  function login(){

    let email =
    document.getElementById("email").value;

    let password =
    document.getElementById("password").value;

    if(

    (email==="gajanankubade12345@gmail.com"
    &&
    password==="74117411")

    ||

    (email==="kubadegajanan12345@gmail.com"
    &&
    password==="sureshtailor")

    ){

        document.getElementById("loginPage")
        .style.display="none";

        document.getElementById("dashboard")
        .style.display="block";

    }

    else{

        alert("Invalid Email or Password");

    }

}
function saveCustomer(){

    let data = {

        workerName: document.getElementById("workerName").value,
        customerId: document.getElementById("customerId").value,
        customerName: document.getElementById("customerName").value,
        phoneNumber: document.getElementById("phoneNumber").value,
        pickupDate: document.getElementById("pickupDate").value,
        deliveryDate: document.getElementById("deliveryDate").value,
        dressType: document.getElementById("dressType").value,
        totalAmount: document.getElementById("totalAmount").value,
        paymentStatus: document.getElementById("paymentStatus").value,
        orderStatus: document.getElementById("orderStatus").value,
        notes: document.getElementById("notes").value

    };

    fetch("https://script.google.com/macros/s/AKfycbwslcbI01uXFmhKvYsUzpxjE_Y-r_Q8TnpZjTfxo-IRpllWvgOtfMM_AlgZh2-TkYJlww/exec", {

        method: "POST",

        body: JSON.stringify(data)

    })

    .then(response => response.text())

    .then(result => {

        alert("Customer Saved Successfully ✅");

        clearForm();

    })

    .catch(error => {

        alert("Error Saving Data ❌");

        console.log(error);

    });

}

function clearForm(){

    document.getElementById("workerName").value="";
    document.getElementById("customerId").value="";
    document.getElementById("customerName").value="";
    document.getElementById("phoneNumber").value="";
    document.getElementById("pickupDate").value="";
    document.getElementById("deliveryDate").value="";
    document.getElementById("dressType").value="";
    document.getElementById("totalAmount").value="";
    document.getElementById("notes").value="";

}
async function downloadBill(){

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    doc.rect(10, 10, 190, 277);

    let customerId =
    document.getElementById("customerId").value;

    let customerName =
    document.getElementById("customerName").value;

    let phoneNumber =
    document.getElementById("phoneNumber").value;

    let dressType =
    document.getElementById("dressType").value;

    let totalAmount =
    document.getElementById("totalAmount").value;

    let deliveryDate =
    document.getElementById("deliveryDate").value;

    doc.setFontSize(20);

    doc.text("SURESH TAILOR", 20, 20);

    doc.setFontSize(12);

    doc.text("Ladies  Specialist", 20, 28);

    doc.text(" 4.8 Customer Rating", 20, 36);

    doc.text(" 35+ Years Experience", 20, 44);

    doc.text(" 7000+ Happy Customers", 20, 52);

    doc.setFontSize(11);

    doc.text("Near Savita Hotel, Karwar", 20, 62);

    doc.text("Phone: 9845280524", 20, 70);

    doc.line(20, 80, 190, 80);

    doc.text("Customer ID: " + customerId, 20, 95);

    doc.text("Customer Name: " + customerName, 20, 105);

    doc.text("Phone Number: " + phoneNumber, 20, 115);

    doc.text("Dress Type: " + dressType, 20, 125);

    doc.text("Delivery Date: " + deliveryDate, 20, 135);

    doc.setFontSize(18);

    doc.text("TOTAL AMOUNT", 20, 155);

    doc.setFontSize(24);

    doc.text("Rs. " + totalAmount, 20, 170);

    doc.line(20, 130, 190, 130);

    doc.setFontSize(12);

    doc.text("Thank You For Visiting", 20, 200);

    doc.text("Your Satisfaction Is Our Priority", 20, 210);

    doc.line(120, 230, 190, 230);

    doc.text("Authorized Signature", 130, 240);

    doc.text("Suresh Tailor", 140, 248);

    doc.save("Bill_" + customerId + ".pdf");

}
