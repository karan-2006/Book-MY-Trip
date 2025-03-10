document.addEventListener('DOMContentLoaded', function () {
    const offerContainer = document.getElementById('offers-container');
    const navLinks = document.querySelectorAll('#offers .nav-link');

    const offers = {
        'All Offers': [
            { img: 'Plane/Flight1.jpg', Title: 'Offer By Air India', src: 'Upgrade to premium economy, starting @ $599*', category: ['Flights'] },
            { img: 'Holiday/Holiday1.jpg', Title: 'Bookings Open for Summer 2025 Holiday Packages.', src: 'Plan your international vacation in advance.', category: ['Holidays'] },
            { img: 'Plane/Flight2.jpg', Title: 'Super Seat Sale by Air Arabia', src: 'With light fares starting @ $5,914*', category: ['Flights'] },
            { img: 'Train/Train1.jpg', Title: 'Presenting TRIP GUARANTEE on Trains', src: 'Waitlisted tickets no more.', category: ['Trains'] },
            { img: 'Bus/bus1.jpg', Title: 'Book Buses', src: '@ up to 15% OFF*', category: ['Bus'] },
            { img: 'Plane/Flight3.jpg', Title: 'Meals for Your Flights @ up to 20% Lower Prices!', src: 'Now book your meal in advance & save BIG bucks on your journey.', category: ['Flights'] },
            { img: 'Hotel/Hotel1.jpg', Title: 'For your royal getaways in Rajasthan:', src: 'Book Stays for 2 Nights & Pay for JUST 1.', category: ['Hotels'] },
            { img: 'Holiday/Holiday2.jpg', Title: 'Get, Set, Sail with Our Cruise Holiday Packages!', src: 'Plan your holiday.', category: ['Holidays'] },
            { img: 'Cabs/Cab.jpg', Title: 'Your outstation cabs made more comfortable', src: 'With New Features!', category: ['Cabs'] },
            { img: 'Train/Train2.jpg', Title: 'For Train bookings: FLAT 40 OFF*', src: 'On AC Class Tickets', category: ['Trains'] },
            { img: 'Bus/Bus2.jpg', Title: 'Grab FLAT 8% OFF* on Buses', src: 'From Delhi, Uttar Pradesh & more', category: ['Bus'] },
            { img: 'Hotel/Hotel2.jpg', Title: 'FOR STAYS AT MOUNTAINS, BEACHES & MORE:', src: 'Enjoy Stays for 2 Nights and Pay for JUST 1 Night with Summit Hotels &...', category: ['Hotels'] },
        ],
        'Flights': [
            { img: 'Plane/Flight1.jpg', Title: 'Offer By Air India', src: 'Upgrade to premium economy, starting @ $599*', category: ['Flights'] },
            { img: 'Plane/Flight2.jpg', Title: 'Super Seat Sale by Air Arabia', src: 'With light fares starting @ $5,914*', category: ['Flights'] },
            { img: 'Plane/Flight3.jpg', Title: 'Meals for Your Flights @ up to 20% Lower Prices!', src: 'Now book your meal in advance & save BIG bucks on your journey.', category: ['Flights'] },
        ],
        'Hotels': [
            { img: 'Hotel/Hotel1.jpg', Title: 'For your royal getaways in Rajasthan:', src: 'Book Stays for 2 Nights & Pay for JUST 1.', category: ['Hotels'] },
            { img: 'Hotel/Hotel2.jpg', Title: 'FOR STAYS AT MOUNTAINS, BEACHES & MORE:', src: 'Enjoy Stays for 2 Nights and Pay for JUST 1 Night with Summit Hotels &...', category: ['Hotels'] },
        ],
        'Holidays': [
            { img: 'Holiday/Holiday1.jpg', Title: 'Bookings Open for Summer 2025 Holiday Packages.', src: 'Plan your international vacation in advance.', category: ['Holidays'] },
            { img: 'Holiday/Holiday2.jpg', Title: 'Get, Set, Sail with Our Cruise Holiday Packages!', src: 'Plan your holiday.', category: ['Holidays'] },
        ],
        'Trains': [
            { img: 'Train/Train1.jpg', Title: 'Presenting TRIP GUARANTEE on Trains', src: 'Waitlisted tickets no more.', category: ['Trains'] },
            { img: 'Train/Train2.jpg', Title: 'For Train bookings: FLAT 40 OFF*', src: 'On AC Class Tickets', category: ['Trains'] },
        ],
        'Cabs': [
            { img: 'Cabs/Cab.jpg', Title: 'Your outstation cabs made more comfortable', src: 'With New Features!', category: ['Cabs'] },
        ],
        'Bus': [
            { img: 'Bus/Bus1.jpg', Title: 'Book Buses', src: '@ up to 15% OFF*', category: ['Bus'] },
            { img: 'Bus/Bus2.jpg', Title: 'Grab FLAT 8% OFF* on Buses', src: 'From Delhi, Uttar Pradesh & more', category: ['Bus'] },
        ]
    };

    function displayOffers(category) {
        const selectedOffers = offers[category] || offers['All Offers'];
        offerContainer.innerHTML = selectedOffers.map(function (offer) {
            return `
        <div class="col-12 col-sm-12 col-md-6 col-lg-4 mb-4">
    <div class="card h-100">
        <div class="row g-0 h-100 flex-column flex-md-row">
            <!-- Image Section -->
            <div class="col-12 col-md-4">
                <img src="${offer.img}" class="img-fluid rounded-start w-100 h-100" alt="${offer.Title}" style="object-fit: cover;">
            </div>

            <!-- Text Content -->
            <div class="col-12 col-md-8">
                <div class="card-body d-flex flex-column h-100">
                    <h5 class="card-title">${offer.Title}</h5>
                    <p class="card-text">${offer.src}</p>
                    <div class="mt-auto">
                        <a href="#" class="btn btn-outline-primary">Book Now</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>




        `;
        }).join('');
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const category = this.textContent.trim();
            displayOffers(category);
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            this.classList.add('active');
        });
    });

    displayOffers('All Offers');

    // Tab Functionality Responsiveness
    const searchButton = document.getElementById('searchButton');
    const formContainers = document.querySelectorAll('.form-container');
    const navLinksTabs = document.querySelectorAll('.nav-link[data-bs-toggle="tab"]');

    formContainers.forEach(form => form.classList.remove('show', 'active'));
    document.getElementById('flightForm').classList.add('show', 'active');

    navLinksTabs.forEach(tab => {
        tab.addEventListener('click', (event) => {
            event.preventDefault();

            navLinksTabs.forEach(link => link.classList.remove('active'));
            formContainers.forEach(form => form.classList.remove('show', 'active'));

            event.currentTarget.classList.add('active');

            const targetFormId = event.currentTarget.getAttribute('href').substring(1);
            const targetForm = document.getElementById(targetFormId);
            if (targetForm) {
                targetForm.classList.add('show', 'active');
            }
        });
    });

    searchButton.addEventListener('click', () => {
        const activeForm = document.querySelector('.form-container.show');
        if (!activeForm) return;

        switch (activeForm.id) {
            case 'flightForm':
                searchFlight(activeForm);
                break;
            case 'hotelForm':
                searchHotel(activeForm);
                break;
            case 'homestayForm':
                searchHomestay(activeForm);
                break;
            case 'packageForm':
                searchPackage(activeForm);
                break;
        }
    });

    function searchFlight(form) {
        const from = form.querySelector('input[placeholder="From"]').value.trim();
        const to = form.querySelector('input[placeholder="To"]').value.trim();
        const departureDate = form.querySelector('input[type="date"]').value;

        if (!from || !to || !departureDate) {
            alert("Please fill in all flight search details.");
            return;
        }
        console.log("Flight Search:", { from, to, departureDate });
    }

    function searchHotel(form) {
        const location = form.querySelector('input[placeholder="Location"]').value.trim();
        const checkIn = form.querySelector('input[type="date"]:nth-of-type(1)').value;
        const checkOut = form.querySelector('input[type="date"]:nth-of-type(2)').value;
        const price = form.querySelector('input[placeholder="Price"]').value.trim();


        if (!location || !checkIn || !checkOut || !price) {
            alert("Please fill in all hotel search details.");
            return;
        }
        console.log("Hotel Search:", { location, checkIn, checkOut, price });
    }

    function searchHomestay(form) {
        const location = form.querySelector('input[placeholder="Location"]').value.trim();
        const guests = form.querySelector('input[type="number"]').value;

        if (!location || !guests) {
            alert("Please fill in all homestay search details.");
            return;
        }
        console.log("Homestay Search:", { location, guests });
    }

    function searchPackage(form) {
        const destination = form.querySelector('input[placeholder="Destination"]').value.trim();
        const startDate = form.querySelector('input[type="date"]:nth-of-type(1)').value;
        const endDate = form.querySelector('input[type="date"]:nth-of-type(2)').value;

        if (!destination || !startDate || !endDate) {
            alert("Please fill in all package search details.");
            return;
        }
        console.log("Package Search:", { destination, startDate, endDate });

    }

  

    // Best Selling Destinations Responsiveness
    const destinationContainer = document.querySelector(".destination-container");

    const bestSellingDestinations = [
        {
            image: "Vacation/Bali.jpeg",
            title: "Bali",
            description: "Luxury resorts, <br> crystal-clear waters.",
            price: "Starting from $1200",
            link: "#"
        },
        {
            image: "Vacation/Paris.jpeg",
            title: "Paris",
            description: "Romantic city with <br> iconic landmarks.",
            price: "Starting from $900",
            link: "#"
        },
        {
            image: "Vacation/New york.jpeg",
            title: "New York",
            description: "Beautiful beaches,<br> vibrant culture.",
            price: "Starting from $800",
            link: "#"
        },
        {
            image: "Vacation/Tokyo.jpeg",
            title: "Tokyo",
            description: "Modern architecture,<br> luxury shopping.",
            price: "Starting from $1100",
            link: "#"
        }
    ];

    bestSellingDestinations.forEach(destination => {
        const cardHTML = `
            <div class="col-12 col-md-6 col-lg-3 mb-2">
    <a href="${destination.link}" class="card-link">
        <div class="card text-bg-dark my-3">
            <img src="${destination.image}" class="card-img" alt="${destination.title}" style="width:100%; height: 200px; object-fit: cover;">
            <div class="card-img-overlay">
                <div class="overlay-content">
                    <h5 class="card-title"><b>${destination.title}</b></h5>
                    <p class="card-text"><b>${destination.description}</b></p>
                    <p class="card-text"><b>${destination.price}</b></p>
                    <button type='button' class='btn btn-danger btn-book'>Book Now</button>
                </div>
            </div>
        </div>
    </a>
</div>
        `;
        destinationContainer.insertAdjacentHTML("beforeend", cardHTML);
    });

    destinationContainer.classList.add('row');

    const blogData = {
        tipsAndAdvice: [
            {
                image: "Blog/packing.jpg",
                title: "How to Pack Like a Pro: Tips for Every Traveler",
                date: "March 4, 2025",
                excerpt: "Packing can make or break your trip. Learn the best tips for packing light, efficiently, and with everything you need.",
                link: "full-article.html",
                info: "A well-packed suitcase ensures comfort and convenience...",
            },
            {
                image: "Blog/passport.jpg",
                title: "Top 10 Essentials for Your First International Trip",
                date: "March 2, 2025",
                excerpt: "From documents to gadgets, these essentials will ensure your international travel is smooth and stress-free.",
                link: "full-article.html",
                info: "Packing smartly makes your trip hassle-free and enjoyable...",
            }
        ],
        customerStories: [
            {
                image: "Blog/valley.jpg",
                title: "Our Unforgettable Journey Through the Alps",
                date: "February 25, 2025",
                excerpt: "Read about how the Smith family experienced the thrill of skiing in the Swiss Alps.",
                link: "full-article.html",
                info: "Exploring the Alps was an exhilarating adventure...",
            },
            {
                image: "Blog/japan.jpg",
                title: "A Cultural Escape: Our Trip to Japan",
                date: "February 20, 2025",
                excerpt: "Join us as we recount our amazing cultural experience in Japan, from ancient temples to modern wonders.",
                link: "full-article.html",
                info: "Japan’s rich history and modern culture amazed us...",
            }
        ],
        industryNews: [
            {
                image: "Blog/trend.jpg",
                title: "What’s New in Travel for 2025: Trends to Watch",
                date: "January 30, 2025",
                excerpt: "The travel industry is evolving, and 2025 promises new trends. Stay updated with the latest insights.",
                link: "full-article.html",
                info: "Eco-tourism, high-tech travel, and more trends are shaping the industry...",
            },
            {
                image: "Blog/tech.jpg",
                title: "How New Travel Technologies Are Shaping the Future",
                date: "January 15, 2025",
                excerpt: "From AI-powered travel assistants to drone-guided tours, the future of travel is being reshaped.",
                link: "full-article.html",
                info: "Technology is revolutionizing travel experiences...",
            }
        ]
    };
    
    // Function to generate blog posts dynamically with alternating layout
    function generateBlogPosts(posts, containerId) {
        const container = document.getElementById(containerId);
        container.innerHTML = ''; // Clear previous content
    
        posts.forEach((post, index) => {
            const isEven = index % 2 === 0;
            const postHTML = `
                <div class="col-12">
                    <div class="d-flex flex-column flex-md-row${isEven ? '' : ' flex-md-row-reverse'} align-items-center gap-3 shadow-sm p-3 rounded border">
                        <!-- Blog Content -->
                        <div class="col-md-6 col-12">
                            <h3 class="post-title">${post.title}</h3>
                            <p class="post-date text-muted">${post.date}</p>
                            <p class="post-excerpt">${post.excerpt}</p>
                            <button class="btn btn-outline-primary" data-bs-toggle="collapse" data-bs-target="#collapse-${containerId}-${index}" aria-expanded="false">
                                Read More
                            </button>
                            <div class="collapse mt-2" id="collapse-${containerId}-${index}">
                                <div class="card card-body">
                                    <p>${post.info}</p>
                                </div>
                            </div>
                        </div>
                        <!-- Blog Image -->
                        <div class="col-md-6 col-12">
                            <img src="${post.image}" class="p-2 img-fluid w-100 rounded" alt="${post.title}">
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += postHTML;
        });
    }
    
    // Load blog posts dynamically on page load
    window.onload = () => {
        generateBlogPosts(blogData.tipsAndAdvice, 'tips-container');
        generateBlogPosts(blogData.customerStories, 'customer-stories-container');
        generateBlogPosts(blogData.industryNews, 'industry-news-container');
    };
    
    // Login Form Responsiveness
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            console.log("Login Attempt:", username, password);
            // Add your login logic here
        });
    }
});
