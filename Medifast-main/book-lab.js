document.addEventListener("DOMContentLoaded", function () {
    console.log("Book Lab Test page loaded");

    // Example Add event listeners for future functionality
    const bookNowBtn = document.getElementById("book-now");
    
    if (bookNowBtn) {
        bookNowBtn.addEventListener("click", function () {
            alert("Booking feature coming soon!");
        });
    }
});
