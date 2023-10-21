const url = "./data.json";
let SortedArrObj;

const dataLoader = async () => {
  let SiteData = await fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((result) => {
      return result.data;
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(SiteData);
  SortedArrObj = SiteData;
  /***********Accessing Element Of Search.HTML page**********/

  //   All Filters
  let SearchButton = document.getElementById("SearchButton");
  let sortByPrice = document.getElementById("sortByPrice");
  let sortByPlaceType = document.getElementById("sortByPlaceType");
  let sortByFreeCancellation = document.getElementById(
    "sortByFreeCancellation"
  );
  let sortByWifi = document.getElementById("sortByWifi");
  let sortByKitchen = document.getElementById("sortByKitchen");
  let sortByAC = document.getElementById("sortByAC");
  let sortByWasher = document.getElementById("sortByWasher");
  let sortByIron = document.getElementById("sortByIron");
  let sortByWorkspace = document.getElementById("sortByWorkspace");
  let sortByParking = document.getElementById("sortByParking");
  let sortByDryer = document.getElementById("sortByDryer");
  let filterButton = document.getElementById("filterButton");

  //  Search List & Element
  let results_list = document.getElementById("results_list");
  let results = document.querySelectorAll(".results");

  /*****************All functions****************/
  //   Rendering Search result function
  function createResults(ArrObj) {
    results_list.innerHTML = ``;

    for (var i = 0; i < ArrObj.length; i++) {
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

  //   filtering function
  function filterResults(ArrObj, FilterProperty) {
    ArrObj = ArrObj.filter((Element) => {
      for (let i = 0; i < Element.previewAmenities.length; i++) {
        if (
          Element.previewAmenities[i].toLowerCase() ==
          FilterProperty.toLowerCase()
        ) {
          return Element;
        }
      }
    });
    return ArrObj;
  }

  /**All events Handlers for search & sorting*/
  SearchButton.addEventListener("click", () => {
    console.log("Search Button clicked");
    let sortByLocation = document.getElementById("sortByLocation").value;
    let sortByDate = document.getElementById("sortByDate").value;
    let sortByGuest = document.getElementById("sortByGuest").value;
    SortedArrObj = SiteData.filter((Element) =>{
       return (Element.city.toLowerCase() == sortByLocation.toLowerCase() /*&& Element.persons >= Number(sortByGuest)*/ )});
       console.log(SortedArrObj);
    createResults(SortedArrObj);
  });

  sortByFreeCancellation.addEventListener("click", () => {
    console.log("FreeCancellation Button clicked");
    SortedArrObj = filterResults(SortedArrObj, "FreeCancellation");
    console.log(SortedArrObj);
    createResults(SortedArrObj);
  });

  sortByWifi.addEventListener("click", () => {
    console.log("wifi Button clicked");
    SortedArrObj = filterResults(SortedArrObj, "wifi");
    console.log(SortedArrObj);
    createResults(SortedArrObj);
  });

  sortByKitchen.addEventListener("click", () => {
    console.log("Kitchen Button clicked");
    SortedArrObj = filterResults(SortedArrObj, "Kitchen");
    console.log(SortedArrObj);
    createResults(SortedArrObj);
  });

  sortByAC.addEventListener("click", () => {
    console.log("AC Button clicked");
    SortedArrObj = filterResults(SortedArrObj, "Air conditioning");
    console.log(SortedArrObj);
    createResults(SortedArrObj);
  });
  
  sortByWasher.addEventListener("click", () => {
    console.log("Washer Button clicked");
    SortedArrObj = filterResults(SortedArrObj, "Washer");
    console.log(SortedArrObj);
    createResults(SortedArrObj);
  });
  
  sortByIron.addEventListener("click", () => {
    console.log("Iron Button clicked");
    SortedArrObj = filterResults(SortedArrObj, "Iron");
    console.log(SortedArrObj);
    createResults(SortedArrObj);
  });
  
  sortByWorkspace.addEventListener("click", () => {
    console.log("Workspace Button clicked");
    SortedArrObj = filterResults(SortedArrObj, "Workspace");
    console.log(SortedArrObj);
    createResults(SortedArrObj);
  });

  sortByParking.addEventListener("click", () => {
    console.log("Parking Button clicked");
    SortedArrObj = filterResults(SortedArrObj, "Free parking");
    console.log(SortedArrObj);
    createResults(SortedArrObj);
  });
  
  sortByDryer.addEventListener("click", () => {
    console.log("Dryer Button clicked");
    SortedArrObj = filterResults(SortedArrObj, "Dryer");
    console.log(SortedArrObj);
    createResults(SortedArrObj);
  });
  
  
};
dataLoader();
