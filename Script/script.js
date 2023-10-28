const searchButton = document.getElementById('search-button');
const GuestsContainer = document.getElementById('GuestsContainer');
const Guests = document.getElementById('Guests');

let c =false;
GuestsContainer.addEventListener("click",(event) =>{
    event.stopPropagation();
    c=!c; 
    if(c){
        Guests.style.display = "block"
    }
    else{
        Guests.style.display = "none"
    }
});



searchButton.addEventListener("click", searchResults);
function searchResults(event){
    event.stopPropagation();
const locationSearch = document.getElementById('Search-location').value;
const checkInDate = document.getElementById('check-in-date').value;
const checkOutDate = document.getElementById('Check-out-date').value;
const adult = document.getElementById('adult').value;
const child = document.getElementById('child').value;
const infant = document.getElementById('infant').value;
const pets = document.getElementById('pets').value;
const data = { locationTobeSearched: locationSearch,
                checkIn:checkInDate,
                checkOut:checkOutDate,
                adult:adult,
                child:child,
                infant:infant,
                pets:pets,
            };
localStorage.setItem('searchData',JSON.stringify(data))
window.location.href = "Search.html";
}



            
            