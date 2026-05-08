document.addEventListener("DOMContentLoaded", function () {
    console.log("Consult Doctor page loaded");
    
    // Add functionality for doctor consultation booking if needed
    const specialties = document.querySelectorAll(".specialty");
    specialties.forEach((specialty) => {
        specialty.addEventListener("click", function () {
            const specialtyName = specialty.querySelector("p").textContent;
            alert(`You selected: ${specialtyName}\nBooking feature coming soon!`);
        });
    });
});
