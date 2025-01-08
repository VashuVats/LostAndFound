const detailsData = {
    1: {
        itemName: "Wallet",
        name: "Rohan",
        description: "A black leather wallet containing IDs and cash.",
        location: "Gauri Cafe",
        date: "2025-01-01",
        contact: "+91-9876543210",
        image: "#"
    },
    2: {
        itemName: "Watch",
        name: "Raju",
        description: "A silver analog wristwatch.",
        location: "Mandir",
        date: "2025-01-03",
        contact: "+91-9876543211",
        image: "#"
    },
    3: {
        itemName: "Water Bottle",
        name: "Sita",
        description: "A blue plastic water bottle with a logo.",
        location: "Mandir",
        date: "2025-01-05",
        contact: "+91-9876543212",
        image: "#"
    }
};

const viewDetailsButtons = document.querySelectorAll(".view-details-btn");
const modal = document.getElementById("detailsModal");
const overlay = document.getElementById("overlay");
const closeModalButton = document.querySelector(".close-btn");

const modalItemName = document.getElementById("modalItemName");
const modalName = document.getElementById("modalName");
const modalDescription = document.getElementById("modalDescription");
const modalLocation = document.getElementById("modalLocation");
const modalDate = document.getElementById("modalDate");
const modalContact = document.getElementById("modalContact");
const modalImageLink = document.getElementById("modalImageLink");

viewDetailsButtons.forEach(button => {
    button.addEventListener("click", () => {
        const id = button.getAttribute("data-id");
        const data = detailsData[id];

        modalItemName.textContent = data.itemName;
        modalName.textContent = data.name;
        modalDescription.textContent = data.description;
        modalLocation.textContent = data.location;
        modalDate.textContent = data.date;
        modalContact.textContent = data.contact;
        modalImageLink.href = data.image;

        modal.style.display = "block";
        overlay.style.display = "block";
    });
});

closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
    overlay.style.display = "none";
});

overlay.addEventListener("click", () => {
    modal.style.display = "none";
    overlay.style.display = "none";
});