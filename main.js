document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const toast = document.getElementById("toast");

    const nameInput = document.querySelector(".input1");
    const phoneInput = document.querySelector(".input2");
    const dateInput = document.querySelector(".input3");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        
        if (
            nameInput.value.trim() === "" ||
            phoneInput.value.trim() === "" ||
            dateInput.value === ""
        ) {
            alert("PLEASE Fill in the Reservation details first");
            return;
        }

        // لو البيانات صحيحة
        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
        }, 5000);
    });
});