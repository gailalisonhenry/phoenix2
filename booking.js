// Get package info from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const packageName = urlParams.get('package');
const packagePrice = urlParams.get('price');

// Package display names
const packageNames = {
    'phoenix-spark': 'Phoenix Spark — Single Coaching Session',
    'phoenix-ignite': 'Phoenix Ignite — 1-Month Intensive',
    'phoenix-reset': 'Phoenix Reset — 3-Month Transformation Package',
    'phoenix-rebirth': 'Phoenix Rebirth — 6-Month Premium Coaching Package',
    'inner-voice-insight': 'Inner-Voice Insight — Single OA Scan',
    'inner-voice-weekly': 'Inner-Voice Weekly Balance — 1-Month Package',
    'inner-voice-evolution': 'Inner-Voice Evolution — 3-Month Package',
    'inner-voice-ascension': 'Inner-Voice Ascension — 6-Month Package'
};

// Display selected package
if (packageName && packagePrice) {
    const displayName = packageNames[packageName] || packageName;
    document.getElementById('packageName').textContent = displayName;
    document.getElementById('packagePrice').textContent = '$' + packagePrice;
    document.getElementById('selectedPackage').value = displayName;
    document.getElementById('selectedPrice').value = packagePrice;
} else {
    document.getElementById('packageName').textContent = 'No package selected';
    document.getElementById('packagePrice').textContent = 'Please select a package from the packages page';
}

// Form submission handling
document.getElementById('bookingForm').addEventListener('submit', function(e) {
    // If no package selected, prevent submission
    if (!packageName || !packagePrice) {
        e.preventDefault();
        alert('Please select a package from the packages page before submitting.');
        window.location.href = 'packages.html';
        return false;
    }
    
    // If using Formspree, it will handle the submission
    // After successful submission, redirect to thank you page
    // Formspree will redirect automatically if you set it up in their dashboard
    // OR we can handle it with JavaScript for other form handlers
    
    <form class="booking-form" id="bookingForm" action="https://formspree.io/f/xeelakqa" method="POST">
    /*
    e.preventDefault();
    const formData = new FormData(this);
    
    fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            window.location.href = 'thankyou.html';
        } else {
            alert('There was a problem submitting your form. Please try again or email us directly.');
        }
    })
    .catch(error => {
        alert('There was a problem submitting your form. Please try again or email us directly.');
    });
    */
});
