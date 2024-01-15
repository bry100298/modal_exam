// modal.js
document.addEventListener("DOMContentLoaded", function () {
    const cancelButton = document.getElementById("cancelButton");
    const modal = document.getElementById("confirmationModal");
    const modalText = document.getElementById("modalText");
    const noButton = document.getElementById("noButton");
    const yesButton = document.getElementById("yesButton");

    // When you click "Cancel," make the pop-up window appear haha
    cancelButton.addEventListener("click", function () {
        showModal();
    });

    // When you hover over "Cancel," make it look like you can click it hahaha
    cancelButton.addEventListener("mouseover", function () {
        cancelButton.style.cursor = "pointer";
    });

    // When you click "No," make the pop-up window go away hahaha
    noButton.addEventListener("click", function () {
        hideModal();
    });

    // When you click "Yes," change the words in the pop-up and close it after 2 seconds
    yesButton.addEventListener("click", function () {
        modalText.textContent = "Subscription successfully cancelled!";
        setTimeout(() => {
            hideModal();
            cancelButton.textContent = "Cancelled";
        }, 2000);
    });

    // pop-up window show up
    function showModal() {
        modal.style.display = "block";
    }

    // pop-up window hide
    function hideModal() {
        modal.style.display = "none";
    }
});
