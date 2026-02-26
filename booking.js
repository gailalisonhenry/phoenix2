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
} else {
    document.getElementById('packageName').textContent = 'No package selected';
    document.getElementById('packagePrice').textContent = 'Please select a package from the packages page';
}

// Update Tally iframe with package information via URL parameters
// Tally will receive the package info through hidden fields in the form
if (packageName && packagePrice) {
    const iframe = document.querySelector('iframe[data-tally-src]');
    if (iframe) {
        const pkg = packageDetails[packageName];
        // Add package info as URL parameters to Tally
        const tallyUrl = new URL(iframe.getAttribute('data-tally-src'));
        tallyUrl.searchParams.append('packageName', pkg.name);
        tallyUrl.searchParams.append('packagePrice', pkg.price);
        iframe.setAttribute('data-tally-src', tallyUrl.toString());
    }
}
