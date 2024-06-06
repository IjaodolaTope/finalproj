document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menuIcon');
    const closeIcon = document.getElementById('closeIcon');
    const sidebar = document.getElementById('sidebar');
    const modal = document.getElementById('detailsModal');
    const modalImg = document.querySelector('.modal-img');
    const modalText = document.querySelector('.modal-text');
    const closeModal = document.querySelector('.close-modal');

    // Sidebar toggle functionality
    menuIcon.addEventListener('click', () => {
        sidebar.style.width = '100%';
        // document.body.style.marginLeft = '250px';
    });

    closeIcon.addEventListener('click', () => {
        sidebar.style.width = '0';
        document.body.style.marginLeft = '0';
    });

    // Modal functionality for media descriptions
    const mediaDescriptions = document.querySelectorAll('.media_description');
    mediaDescriptions.forEach(description => {
        description.addEventListener('click', () => {
            const imgDiv = description.querySelector('.img_div');
            const imgDivClone = imgDiv.cloneNode(true);
            const imgText = description.querySelector('.img_div_text').textContent;

            // Clear previous modal content
            modalImg.innerHTML = '';
            modalText.textContent = '';

            // Add new content to modal
            modalImg.appendChild(imgDivClone);
            modalText.textContent = imgText;

            // Show the modal
            modal.style.display = 'block';
        });
    });

    // Close modal when clicking the close button
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });


});
    // Function to display "submitted successfully" alert with entered email and message
    function displaySuccessAlert() {
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const alertMessage = `Submitted successfully!\nYour email is: ${email}\nYour message is: ${message}`;
        alert(alertMessage);
    }

    // Get the form element
    const form = document.querySelector('form');

    // Add event listener to the form for form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        displaySuccessAlert(); // Call the function to display the alert
    });