document.addEventListener("DOMContentLoaded", function () {
    console.log("Health Checkups page loaded");

    const bookCheckupBtn = document.getElementById("book-health-checkup");

    if (bookCheckupBtn) {
        bookCheckupBtn.addEventListener("click", function () {
            alert("Health checkup booking feature coming soon!");
        });
    }
});
