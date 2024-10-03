document.getElementById('studentForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission behavior

    // Collect form data
    const formData = {
        studName: document.getElementById('studName').value,
        email: document.getElementById('email').value,
        strongSub: document.getElementById('strongSub').value,
        strongSubtop: document.getElementById('strongSubtop').value,
        weakSub: document.getElementById('weakSub').value,
        weakSubtop: document.getElementById('weakSubtop').value,
        descriptionstu: document.getElementById('descriptionstu').value,
        student: document.getElementById('student').value
    };

    // Send data to the server
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Registration successful!');
        } else {
            alert('Registration failed: ' + data.message);
        }
    })
    .catch(error => console.error('Error:', error));
});
