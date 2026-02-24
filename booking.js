// Get package info from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const packageName = urlParams.get('package');
const packagePrice = urlParams.get('price');

// Package display names and details
const packageDetails = {
    'phoenix-spark': {
        name: 'Phoenix Spark — Single Coaching Session',
        price: '$210',
        details: [
            'Includes one coaching session (50 minutes)',
            'One AO Inner-Voice Scan',
            'Targeted coaching',
            'Personalized frequency tones',
            'Clarity & emotional balancing'
        ]
    },
    'phoenix-ignite': {
        name: 'Phoenix Ignite — 1-Month Intensive',
        price: '$500',
        details: [
            'Weekly coaching (4 sessions, 50 minutes each)',
            'Weekly OA scans (4 total)',
            'Frequency tones',
            'Personalized blueprint session'
        ]
    },
    'phoenix-reset': {
        name: 'Phoenix Reset — 3-Month Transformation Package',
        price: '$1,500',
        details: [
            'Two coaching sessions/month (6 total, 50 minutes each)',
            'Weekly OA Inner-Voice scans (12 total)',
            'Frequency optimization tones',
            'Monthly progress check-ins',
            'Personalized Wellness Action Plan',
            'Text/email accountability'
        ]
    },
    'phoenix-rebirth': {
        name: 'Phoenix Rebirth — 6-Month Premium Coaching Package',
        price: '$2,500',
        details: [
            'Two to Four coaching sessions/month (50 minutes each)',
            'Weekly OA scans (24 total, includes 15 minute review each)',
            'Full plan customization',
            'Priority messaging support',
            'Monthly rebalance review',
            'One emergency clarity call/month'
        ]
    },
    'inner-voice-insight': {
        name: 'Inner-Voice Insight — Single OA Scan',
        price: '$75',
        details: [
            'Full Inner-Voice OA scan (includes 15 minute review)',
            'Frequency optimization tones',
            '15-minute review session'
        ]
    },
    'inner-voice-weekly': {
        name: 'Inner-Voice Weekly Balance — 1-Month Package',
        price: '$250',
        details: [
            'Four OA scans (includes 15 minute review each)',
            'Weekly tones',
            'Four 15-minute review sessions'
        ]
    },
    'inner-voice-evolution': {
        name: 'Inner-Voice Evolution — 3-Month Package',
        price: '$800',
        details: [
            'Weekly scans (12 total, includes 15 minute review each)',
            'Weekly tones',
            'Weekly review sessions',
            'Monthly progress snapshot'
        ]
    },
    'inner-voice-ascension': {
        name: 'Inner-Voice Ascension — 6-Month Package',
        price: '$1,500',
        details: [
            'Weekly scans (24 total, includes 15 minute review each)',
            'Weekly tones',
            'Weekly review sessions',
            'Emotional trends report each month'
        ]
    }
};

// Display selected package with details
if (packageName && packagePrice && packageDetails[packageName]) {
    const pkg = packageDetails[packageName];
    
    // Update package name and price
    document.getElementById('packageName').textContent = pkg.name;
    document.getElementById('packagePrice').textContent = pkg.price;
    
    // Create and display package details list
    const packageDisplay = document.getElementById('packageDisplay');
    const detailsList = document.createElement('ul');
    detailsList.className = 'package-details-list';
    
    pkg.details.forEach(detail => {
        const li = document.createElement('li');
        li.textContent = detail;
        detailsList.appendChild(li);
    });
    
    packageDisplay.appendChild(detailsList);
    
    // Set hidden form fields
    document.getElementById('selectedPackage').value = pkg.name;
    document.getElementById('selectedPrice').value = pkg.price;
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
    
    // For custom form handlers (not Formspree), uncomment below:
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
