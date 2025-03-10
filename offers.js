document.addEventListener('DOMContentLoaded', function() {
            const offerGrid = document.getElementById('offers-grid');
            const filterSelect = document.getElementById('filter-select');
            const clearFilterButton = document.getElementById('clear-filter');

            const offers = {
                'All Offers': [
                    { img: 'Plane/Flight1.jpg', Title: 'Offer By Air India', src: 'Upgrade to premium economy, starting @ $599*', category: ['Flights'] },
                    { img: 'Holiday/Holiday1.jpg', Title: 'Bookings Open for Summer 2025 Holiday Packages.', src: 'Plan your international vacation in advance.', category: ['Holidays'] },
                    { img: 'Plane/Flight2.jpg', Title: 'Super Seat Sale by Air  Arabia', src: 'With light fares starting @ $5,914*', category: ['Flights'] },
                    { img: 'Train/Train1.jpg', Title: 'Presenting TRIP GUARANTEE on Trains', src: 'Waitlisted tickets no more.', category: ['Trains'] },
                    { img: 'Bus/bus1.jpeg', Title: 'Book Buses', src: '@ up to 15% OFF*', category: ['Bus'] },
                    { img: 'Plane/Flight3.jpg', Title: 'Meals for Your Flights @ up to 20% Lower Prices!', src: 'Now book your meal in advance & save BIG bucks on your journey.', category: ['Flights'] },
                    { img: 'Hotel/Hotel1.jpg', Title: 'For your royal getaways in Rajasthan:', src: 'Book Stays for 2 Nights & Pay for JUST 1.', category: ['Hotels'] },
                    { img: 'Holiday/Holiday2.jpg', Title: 'Get, Set, Sail with Our Cruise Holiday Packages!', src: 'Plan your holiday.', category: ['Holidays'] },
                    { img: 'Cabs/Cab.jpg', Title: 'Your outstation cabs made more comfortable', src: 'With New Features!', category: ['Cabs'] },
                    { img: 'Train/Train2.jpg', Title: 'For Train bookings: FLAT 40 OFF*', src: 'On AC Class Tickets', category: ['Trains'] },
                    { img: 'Bus/Bus2.jpg', Title: 'Grab FLAT 8% OFF* on Buses', src: 'from Delhi, Uttar Pradesh & more', category: ['Bus'] },
                    { img: 'Hotel/Hotel2.jpg', Title: 'FOR STAYS AT MOUNTAINS, BEACHES & MORE:', src: 'Enjoy Stays for 2 Nights and Pay for JUST 1 Night with Summit Hotels &...', category: ['Hotels'] },
                ],
                'Flights': [
                    { img: 'Plane/Flight1.jpg', Title: 'Offer By Air India', src: 'Upgrade to premium economy, starting @ $599*', category: ['Flights'] },
                    { img: 'Plane/Flight2.jpg', Title: 'Super Seat Sale by Air  Arabia', src: 'With light fares starting @ $5,914*', category: ['Flights'] },
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
                    { img: 'Bus/Bus2.jpg', Title: 'Grab FLAT 8% OFF* on Buses', src: 'from Delhi, Uttar Pradesh & more', category: ['Bus'] },
                ],
            };

            function displayOffers(category) {
                const selectedOffers = offers[category] || offers['All Offers'];
                offerGrid.innerHTML = ''; // Clear existing cards

                selectedOffers.forEach(offer => {
                    const cardDiv = document.createElement('div');
                    cardDiv.classList.add('card');
                    cardDiv.innerHTML = `
                        
                        <img src="${offer.img}" class="card-img-top" alt="..." style="height: 200px; object-fit: cover;">
                        <div class="card-body">
                            <h5 class="card-title"><span class="math-inline">${offer.Title}</h5>
                            <p class="card-text"></span>${offer.src}</p>
                            <a style="text-decoration: none;" href="#">Book Now</a>
                        </div>
                        
                    `;
                    offerGrid.appendChild(cardDiv);
                });
            }

            filterSelect.addEventListener('change', () => {
                const selectedCategory = filterSelect.value;
                displayOffers(selectedCategory);
            });

            clearFilterButton.addEventListener('click', () => {
                filterSelect.value = "all";
                displayOffers("All Offers");
            });

            displayOffers('All Offers');
        });