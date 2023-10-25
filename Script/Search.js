/***********Global Variable Declaration**********/
let SiteData;
let SortedArrObj;
let NoSpecificType = [];
let noPriceRanges = [];
let NoCancelPolicyFlexible = [];
let NoWifi = [];
let NoKitchen = [];
let NoAC = [];
let NoWasher = [];
let NoIron = [];
let NoDedicatedWorkspace = [];
let NoFreeParking = [];
let NoDryer = [];
let priceRanges = {
  "$30-50": { min: 30, max: 50 },
  "$50-70": { min: 50, max: 70 },
  "$70-90": { min: 70, max: 90 },
  "$90-110": { min: 90, max: 110 },
  "$110-130": { min: 110, max: 130 },
  "$130-150": { min: 130, max: 150 },
  "$150-170": { min: 150, max: 170 },
  "$170-190": { min: 170, max: 190 },
  "$190-210": { min: 190, max: 210 },
  "$210-230": { min: 210, max: 230 },
};
/*********************************************Accessing Data from local JSON*********************************************************** */
const url = "../Json/data.json";
const dataLoader = async () => {
  try {
    const response = await fetch(url);
    const result = await response.json();
    const dataArray = result; // Assuming "results" is an array of objects
    return dataArray;
  } catch (error) {
    console.error(error);
  }
};

(async () => {
  SiteData = await dataLoader();
  console.log(SiteData); // Now SiteData contains the array of objects

  // You can perform further processing or actions with SiteData here.
  SortedArrObj = SiteData;
  /******************************************************************************************************************************* */

  /**********************************************Accessing Data from API*********************************************************** */

  // const url = 'https://airbnb13.p.rapidapi.com/search-location?location=Paris&checkin=2023-11-16&checkout=2023-11-17&adults=1&children=0&infants=0&pets=0&page=1&currency=USD';
  // let SiteData; // Define the global variable
  // let SortedArrObj;

  // const options = {
  // 	method: 'GET',
  // 	headers: {
  // 		'X-RapidAPI-Key': '4f025f3c90mshcd7cc3f6e18df3cp1342dejsn4acacb873d5a',
  // 		'X-RapidAPI-Host': 'airbnb13.p.rapidapi.com'
  // 	}
  // };

  // const dataLoader = async () => {
  //   try {
  //     const response = await fetch(url, options);
  //     const result = await response.json();
  //     const dataArray = result.results; // Assuming "results" is an array of objects
  //     // console.log(dataArray);
  //     return dataArray;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // (async () => {
  //   SiteData = await dataLoader(); // Wait for dataLoader to complete and assign the result to SiteData
  //   console.log(SiteData); // Now SiteData contains the array of objects

  // You can perform further processing or actions with SiteData here.
  // SortedArrObj=SiteData;

  /******************************************************************************************************************************** */

  /***********Accessing Element Of Search.HTML page**********/

  //   All Filters
  let sortByLocation = document.getElementById("sortByLocation").value;
  let sortByDate = document.getElementById("sortByDate").value;
  let sortByGuest = document.getElementById("sortByGuest").value;
  let sortByPlaceType = document.getElementById("sortByPlaceType");
  let sortByPrice = document.getElementById("sortByPrice");
  let SearchButton = document.getElementById("SearchButton");
  let totalAvailable = document.getElementById("totalAvailable");
  let results_list = document.getElementById("results_list");
  const filterButton = document.getElementsByClassName("filterButton");

  /*********Initialize the rendering**************/
  //  initializing All Data of site
  AssignTypesFilter();
  InitialResultList();

  /*******************************************All functions*******************************************************/

  //Assigning all types of property to the filter elements (type)
  function AssignTypesFilter() {
    const uniqueTypes = [...new Set(SiteData.map((obj) => obj.type))];
    console.log("Type Filter Initiated");
    uniqueTypes.forEach((Element) => {
      const option = document.createElement("option");
      option.value = Element;
      option.innerText = Element;
      sortByPlaceType.appendChild(option);
    });
  }

  //  Initial Rendering of list of All available properties
  function InitialResultList() {
    console.log("Initial list Rendered");
    createResults(SiteData);
  }

  //   Rendering Search result function
  function createResults(ArrObj) {
    let total = 0;
    results_list.innerHTML = ``;
    for (var i = 0; i < ArrObj.length; i++) {
      totalAvailable.innerHTML = `${++total}+ stays in Area`;
      let results = document.createElement(`div`);
      results.className = `results`;
      results.id = `${ArrObj[i].id}`;
      results.innerHTML = `
      <div class="result-img">
      <img src="${ArrObj[i].hostThumbnail}" alt="resultThumbnail">
    </div>
    <div class="result-details">
      <div class="name_favorite">
        <div>
          <p>${ArrObj[i].type} in ${ArrObj[i].city}</p>
          <h4 class="result-name" id="result-name">${ArrObj[i].name}</h4>
        </div>
        <div class="favorite">
          <i class="fa-solid fa-heart fa-xl" style="color: #e41111;"></i>
        </div>
      </div>
      <div>
        <p>${ArrObj[i].persons} guests · ${ArrObj[i].type} · ${
        ArrObj[i].beds
      } beds · ${ArrObj[i].bathrooms} bath</p>
        <p>${ArrObj[i].previewAmenities.reduce((accu, a) => {
          return accu + " · " + a;
        }, "")}</p>
      </div>
      <div class="rating_price">
        <p>${
          ArrObj[i].rating
        } <i class="fa-solid fa-star" style="color: #ffd43b;"></i> (${
        ArrObj[i].reviewsCount
      } reviews)</p>
        <p class="price"><span>$${ArrObj[i].price.rate}</span> / night</p>
      </div>
    </div>`;

      results_list.appendChild(results);
    }
  }

  // searching the result(incomplete)
  function SearchedResult(Element, Loc, Date, GuestCount) {
    Loc = Loc.toLowerCase();
    Date = Date.toLowerCase();
    GuestCount = Number(GuestCount);
    let ElementCity = Element.city.toLowerCase();

    Element.persons >= Number(sortByGuest);
  }

  /**All events Handlers for search & sorting(incomplete)*/
  SearchButton.addEventListener("click", () => {
    console.log("Search Button clicked");
    if (sortByLocation == null && sortByDate == null && sortByGuest == null) {
      alert("Please enter a location, Duration of stay & Guest Counts");
    } else {
      SortedArrObj = SiteData.filter((Element) => {
        return SearchedResult(Element, sortByLocation, sortByDate, sortByGuest);
      });
      console.log(SortedArrObj);
      createResults(SortedArrObj);
    }
  });

 // Event handler for filter buttons
for (let i = 0; i < filterButton.length; i++) {
  filterButton[i].addEventListener("click", (e) => {
    let id = Number(e.target.id);
    switch (id) {
      case 1: // Cancel Policy - Flexible
      filterButton[i].classList.toggle("Active");
        if (NoCancelPolicyFlexible.length === 0) {
          NoCancelPolicyFlexible = SortedArrObj.filter((a) => a.cancelPolicy !== "CANCEL_FLEXIBLE");
          SortedArrObj = SortedArrObj.filter((a) => a.cancelPolicy === "CANCEL_FLEXIBLE");
        } else {
          SortedArrObj = SortedArrObj.concat(NoCancelPolicyFlexible);
          NoCancelPolicyFlexible = [];
        }
        createResults(SortedArrObj);
        break;
      case 2: // Wifi filter button
      filterButton[i].classList.toggle("Active");
        if (NoWifi.length === 0) {
          NoWifi = SortedArrObj.filter((a) => !a.previewAmenities.includes("Wifi"));
          SortedArrObj = SortedArrObj.filter((a) => a.previewAmenities.includes("Wifi"));
        } else {
          SortedArrObj = SortedArrObj.concat(NoWifi);
          NoWifi = [];
        }
        createResults(SortedArrObj);
        break;
      case 3: // Kitchen filter button
      filterButton[i].classList.toggle("Active");
        if (NoKitchen.length === 0) {
          NoKitchen = SortedArrObj.filter((a) => !a.previewAmenities.includes("Kitchen"));
          SortedArrObj = SortedArrObj.filter((a) => a.previewAmenities.includes("Kitchen"));
        } else {
          SortedArrObj = SortedArrObj.concat(NoKitchen);
          NoKitchen = [];
        }
        createResults(SortedArrObj);
        break;
      case 4: // Air conditioning filter button
      filterButton[i].classList.toggle("Active");
        if (NoAC.length === 0) {
          NoAC = SortedArrObj.filter((a) => !a.previewAmenities.includes("Air conditioning"));
          SortedArrObj = SortedArrObj.filter((a) => a.previewAmenities.includes("Air conditioning"));
        } else {
          SortedArrObj = SortedArrObj.concat(NoAC);
          NoAC = [];
        }
        createResults(SortedArrObj);
        break;
      case 5: // Washer filter button
      filterButton[i].classList.toggle("Active");
        if (NoWasher.length === 0) {
          NoWasher = SortedArrObj.filter((a) => !a.previewAmenities.includes("Washer"));
          SortedArrObj = SortedArrObj.filter((a) => a.previewAmenities.includes("Washer"));
        } else {
          SortedArrObj = SortedArrObj.concat(NoWasher);
          NoWasher = [];
        }
        createResults(SortedArrObj);
        break;
      case 6: // Iron filter button
      filterButton[i].classList.toggle("Active");
        if (NoIron.length === 0) {
          NoIron = SortedArrObj.filter((a) => !a.previewAmenities.includes("Iron"));
          SortedArrObj = SortedArrObj.filter((a) => a.previewAmenities.includes("Iron"));
        } else {
          SortedArrObj = SortedArrObj.concat(NoIron);
          NoIron = [];
        }
        createResults(SortedArrObj);
        break;
      case 7: // Dedicated workspace filter button
      filterButton[i].classList.toggle("Active");
        if (NoDedicatedWorkspace.length === 0) {
          NoDedicatedWorkspace = SortedArrObj.filter((a) => !a.previewAmenities.includes("Dedicated workspace"));
          SortedArrObj = SortedArrObj.filter((a) => a.previewAmenities.includes("Dedicated workspace"));
        } else {
          SortedArrObj = SortedArrObj.concat(NoDedicatedWorkspace);
          NoDedicatedWorkspace = [];
        }
        createResults(SortedArrObj);
        break;
      case 8: // Free parking filter button
      filterButton[i].classList.toggle("Active");
        if (NoFreeParking.length === 0) {
          NoFreeParking = SortedArrObj.filter((a) => !a.previewAmenities.includes("Free parking"));
          SortedArrObj = SortedArrObj.filter((a) => a.previewAmenities.includes("Free parking"));
        } else {
          SortedArrObj = SortedArrObj.concat(NoFreeParking);
          NoFreeParking = [];
        }
        createResults(SortedArrObj);
        break;
      case 9: // Dryer filter button
      filterButton[i].classList.toggle("Active");
        if (NoDryer.length === 0) {
          NoDryer = SortedArrObj.filter((a) => !a.previewAmenities.includes("Dryer"));
          SortedArrObj = SortedArrObj.filter((a) => a.previewAmenities.includes("Dryer"));
        } else {
          SortedArrObj = SortedArrObj.concat(NoDryer);
          NoDryer = [];
        }
        createResults(SortedArrObj);
        break;   
      default:
        console.log("Error: Unknown/Undefined filter case");
        break;
    }
  });
}
// price filter
sortByPrice.addEventListener("change", () => {
  // Retrieve the selected price range from sortByPrice.value
  const selectedPriceRange = sortByPrice.value;
  if(selectedPriceRange == "Price"){
    SortedArrObj = SiteData;
  }
  else if(selectedPriceRange != "Price" || noPriceRanges.length != 0 ){
      for (const range in priceRanges) {
        if(selectedPriceRange == range){
          console.log(typeof selectedPriceRange + " is " + typeof range);
          SortedArrObj = SortedArrObj.filter((a) => a.price.rate >= priceRanges[range].min && a.price.rate <= priceRanges[range].max);
        }
        else{
          noPriceRanges = SortedArrObj.filter((a) => a.price.rate <= priceRanges[range].min || a.price.rate >= priceRanges[range].max);
        }
      }
  }
  else {
    SortedArrObj = SortedArrObj.concat(noPriceRanges);
    noPriceRanges = [];
  }
    createResults(SortedArrObj);
  });

  // place filter
  sortByPlaceType.addEventListener("change", () => {
    // Retrieve the selected type of place from sortByPlaceType.value
    const selectedType = sortByPlaceType.value;
  
    if (selectedType === "null") {
      // Handle the case where the default option is selected (all types)
      SortedArrObj = SiteData; // Restore the original data
    } else {
      // Filter the results based on the selected type of place
          SortedArrObj = SiteData.filter((a) => a.type === selectedType);
    }
    createResults(SortedArrObj);
  });
  



})();
