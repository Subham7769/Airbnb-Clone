/*********************************************Accessing Data from local JSON*********************************************************** */
const url = "../Json/data.json";
let SiteData;
let myResult;

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
  //   console.log(SiteData); // Now SiteData contains the array of objects

  // You can perform further processing or actions with SiteData here.
  myResult = SiteData[0];
  console.log(myResult);
  /******************************************************************************************************************************* */

  const search = document.getElementById("search-button");

  search.addEventListener("click", () => {
    console.log("search clicked");
    renderResult(myResult);
  });

  function renderResult(myResult) {
    console.log("renderResult() start rendering");
    const main = document.getElementsByTagName("main")[0];
    const Section = document.createElement("section");
    Section.className = "result_view";
    main.innerHTML = ``;

    Section.innerHTML = `
<h2>${myResult.name}</h2>
<section class="result_details">
  <div>
    <p>
      <i class="fa-solid fa-star" style="color: #ffd43b"></i>
      <span id="result_rating">${myResult.rating}</span> ${
      myResult.reviewsCount
    } reviews
      ${
        myResult.isSuperhost
          ? `<i class="fa-solid fa-medal" style="color: #f00000"></i>
      Superhost`
          : ``
      } <span id="result_location">${myResult.address}</span>
    </p>
  </div>
  <div>
    <p>
      <i
        class="fa-solid fa-share-from-square"
        style="color: #595959"
      ></i>
      Share
      <i class="fa-regular fa-heart" style="color: #808080"></i>
      Save
    </p>
  </div>
</section>

<section class="result_img">
  <div class="bigPic" style="background-image: url('${myResult.images[0]}');"></div>
  <div class="allImg">
    <div style="background-image: url('${myResult.images[1]}');"></div>
    <div style="background-image: url('${myResult.images[2]}');"></div>
    <div style="background-image: url('${myResult.images[3]}');"></div>
    <div style="background-image: url('${myResult.images[4]}');"></div>
    <button class="showAllButton">
      <i class="fa-solid fa-border-none" style="color: #000000"></i>
      Show all photos
    </button>
  </div>
</section>


<section class="result_specifications">
  <div class="specification">
    <div class="property_insights">
      <div class="property_host">
        <div><h3>${myResult.type} hosted by Subham jain</h3></div>
        <div class="property_features">
          <p>
            <span id="result_guest">${myResult.persons} guest</span>
            <span id="result-bedroom">${myResult.bedrooms} bedroom</span>
            <span id="result_bed">${myResult.beds} bed</span
            ><span id="result_bath">${myResult.bathrooms} bath</span>
          </p>
        </div>
      </div>
      <div>
        <img src="${myResult.hostThumbnail}" alt="" class="host_img" />
      </div>
    </div>
    <hr />
    <div class="result-data">
      <div class="property_insights">
        <div>
          <img src="./Assets/homeIcon.png" alt="" class="host_img" />
        </div>
        <div class="property_host">
          <div><h3>${myResult.type}</h3></div>
          <div class="property_features">
            <p>You’ll have the apartment to yourself</p>
          </div>
        </div>
      </div>
      <div class="property_insights">
        <div>
          <img
            src="./Assets/sparkaleIcon.png"
            alt=""
            class="host_img"
          />
        </div>
        <div class="property_host">
          <div><h3>Entire rental unit hosted by Ghazal</h3></div>
          <div class="property_features">
          <p>You’ll have the apartment to yourself</p>
          </div>
        </div>
      </div>
      <div class="property_insights">
        <div>
          <img src="./Assets/doorIcon.png" alt="" class="host_img" />
        </div>
        <div class="property_host">
          <div><h3>Entire rental unit hosted by Ghazal</h3></div>
          <div class="property_features">
          <p>You’ll have the apartment to yourself</p>
          </div>
        </div>
      </div>
      <div class="property_insights">
        <div>
          <img
            src="./Assets/calendaricon.png"
            alt=""
            class="host_img"
          />
        </div>
        <div class="property_host">
          <div><h3>Entire rental unit hosted by Ghazal</h3></div>
          <div class="property_features">
          <p>You’ll have the apartment to yourself</p>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="about_property">
      <p>
        Come and stay in this superb duplex T2, in the heart of the
        historic center of Bordeaux. Spacious and bright, in a real
        Bordeaux building in exposed stone, you will enjoy all the
        charms of the city thanks to its ideal location. Close to many
        shops, bars and restaurants, you can access the apartment by
        tram A and C and bus routes 27 and 44. ...
      </p>
      <a href="" class="show_more">Show more ></a>
    </div>
    <hr />
    <div class="property_pic_gallery">
      <h3>Where you’ll sleep</h3>
      <div>
        <img src="./Assets/img (3).png" alt="" />
      </div>
      <div>
        <p>Bedroom</p>
        <p>1 queen bed</p>
      </div>
    </div>
    <hr />
    <div class="property_amanities">
      <table>
        <tr>
          <td>
            <img src="./Assets/1Icon.png" class="icon" /> Garden view
          </td>
          <td><img src="./Assets/2Icon.png" class="icon" /> Kitchen</td>
        </tr>
        <tr>
          <td><img src="./Assets/3Icon.png" class="icon" /> Wifi</td>
          <td>
            <img src="./Assets/4Icon.png" class="icon" /> Pets allowed
          </td>
        </tr>
        <tr>
          <td>
            <img src="./Assets/5Icon.png" class="icon" /> Free washer -
            in building
          </td>
          <td><img src="./Assets/6Icon.png" class="icon" /> Dryer</td>
        </tr>
        <tr>
          <td>
            <img src="./Assets/7Icon.png" class="icon" /> Central air
            conditioning
          </td>
          <td>
            <img src="./Assets/8Icon.png" class="icon" /> Security
            cameras on property
          </td>
        </tr>
        <tr>
          <td>
            <img src="./Assets/9Icon.png" class="icon" /> Refrigerator
          </td>
          <td>
            <img src="./Assets/10Icon.png" class="icon" /> Bicycles
          </td>
        </tr>
      </table>
      <button class="amenities-button">Show all 37 amenities</button>
    </div>
    <hr />
    <div class="calender_view">
      <div class="calender_head">
        <h3>7 nights in New York</h3>
        <p>Feb 19, 2022 - Feb 26, 2022</p>
      </div>
      <div class="calender">
        <div>
          <img src="./Assets/calendor.png" alt="" />
        </div>
        <div class="keyboard_clear">
          <img src="./Assets/calendaricon.png" alt="" />
          <a href="">Clear dates</a>
        </div>
      </div>
    </div>
  </div>
  <div class="calculation">
    <div class="booking_box">
      <div class="booking_rate_review">
        <p>
          <span><b>$${myResult.price.rate}</b> / night</span>
          <span
            >${myResult.rating}
            <i class="fa-solid fa-star" style="color: #ffd43b"></i> - ${myResult.reviewsCount}
            reviews</span
          >
        </p>
      </div>
      <div class="booking_details">
        <div class="bookingDuration">
          <div class="bookingCheckIn">
            <b>CHECK-IN</b>
            <input
              type="text"
              name="bookingCheckIn"
              id="bookingCheckIn"
              placeholder="2/19/2022"
            />
          </div>
          <div class="bookingCheckout">
            <b>CHECK-OUT</b>
            <input
              type="text"
              name="bookingCheckOut"
              id="bookingCheckOut"
              placeholder="2/26/2022"
            />
          </div>
        </div>
        <div class="bookingGuest">
          <b>GUESTS</b><br />
          <select id="guestNumber">
            <option value="2" selected>2 guests</option>
            <option value="3" selected>3 guests</option>
            <option value="4" selected>4 guests</option>
            <option value="5" selected>5 guests</option>
            <option value="6" selected>6 guests</option>
          </select>
        </div>
      </div>
      <button class="ReserveButton" id="ReserveButton">Reserve</button>
      <p>You won't be charged yet</p>
      <div class="booking_payment_details">
        <table class="booking_table">
          <tr>
            <td>${myResult.priceItems[0].title}</td>
            <td>$${myResult.priceItems[0].amount}</td>
          </tr>
          <tr>
          <td>${myResult.priceItems[1].title}</td>
          <td>$${myResult.priceItems[1].amount}</td>
          </tr>
          <tr>
          <td>${myResult.priceItems[2].title}</td>
          <td>$${myResult.priceItems[2].amount}</td>
          </tr>
          <tr>
          <td>${myResult.priceItems[3].title}</td>
          <td>$${myResult.priceItems[3].amount}</td>
          </tr>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>$701</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
    <p>
      <i class="fa-regular fa-flag" style="color: #878787"></i
      ><a href=""> Report this listing</a>
    </p>
  </div>
</section>

<hr />
<section class="reviews_section">
  <h3>
    <i class="fa-solid fa-star" style="color: #ffd43b"></i>
    5.0 - 7 reviews
  </h3>
  <div class="rating_services">
    <div class="col1">
      <table class="rating_services_table">
        <tr>
          <td>Cleanliness</td>
          <td>
            <progress id="progress" max="5" value="5"></progress>
            <span>5.0</span>
          </td>
        </tr>
        <tr>
          <td>Communication</td>
          <td>
            <progress id="progress" max="5" value="5"></progress>
            <span>5.0</span>
          </td>
        </tr>
        <tr>
          <td>Check-in</td>
          <td>
            <progress id="progress" max="5" value="5"></progress>
            <span>5.0</span>
          </td>
        </tr>
      </table>
    </div>
    <div class="col2">
      <table class="rating_services_table">
        <tr>
          <td>Accuracy</td>
          <td>
            <progress id="progress" max="5" value="5"></progress>
            <span>5.0</span>
          </td>
        </tr>
        <tr>
          <td>Location</td>
          <td>
            <progress id="progress" max="5" value="5"></progress>
            <span>5.0</span>
          </td>
        </tr>
        <tr>
          <td>Value</td>
          <td>
            <progress id="progress" max="5" value="5"></progress>
            <span>5.0</span>
          </td>
        </tr>
      </table>
    </div>
  </div>
  <div class="users_review">
    <div class="review_card">
      <div class="review_header">
        <div class="user_img_container">
          <img src="./Assets/room4.png" alt="" class="user_img" />
        </div>
        <div class="user_details">
          <h4>Shayna</h4>
          <p class="subtitle">December 2021</p>
        </div>
      </div>
      <p>
        Wonderful neighborhood, easy access to restaurants and the
        subway, cozy studio apartment with a super comfortable bed.
        Great host, super helpful and responsive. Cool murphy bed...
      </p>
      <a href="" class="show_more">Show more ></a>
    </div>
    <div class="review_card">
      <div class="review_header">
        <div class="user_img_container">
          <img src="./Assets/room4.png" alt="" class="user_img" />
        </div>
        <div class="user_details">
          <h4>Shayna</h4>
          <p class="subtitle">December 2021</p>
        </div>
      </div>
      <p>
        Wonderful neighborhood, easy access to restaurants and the
        subway, cozy studio apartment with a super comfortable bed.
        Great host, super helpful and responsive. Cool murphy bed...
      </p>
      <a href="" class="show_more">Show more ></a>
    </div>
    <div class="review_card">
      <div class="review_header">
        <div class="user_img_container">
          <img src="./Assets/room4.png" alt="" class="user_img" />
        </div>
        <div class="user_details">
          <h4>Shayna</h4>
          <p class="subtitle">December 2021</p>
        </div>
      </div>
      <p>
        Wonderful neighborhood, easy access to restaurants and the
        subway, cozy studio apartment with a super comfortable bed.
        Great host, super helpful and responsive. Cool murphy bed...
      </p>
      <a href="">Show more ></a>
    </div>
    <button class="showAllReviewButton">Show all 12 reviews</button>
  </div>
</section>

<hr />
<section class="result_map">
  <h3>Where you’ll be</h3>
  <div class="map_area">
    <img src="./Assets/map.png" alt="" />
  </div>
  <h4 class="location_name">Bordeaux, Nouvelle-Aquitaine, France</h4>
  <p class="location_about">
    Very dynamic and appreciated district by the people of Bordeaux
    thanks to rue St James and place Fernand Lafargue. Home to many
    historical monuments such as the Grosse Cloche, the Porte de
    Bourgogne and the Porte Cailhau, and cultural sites such as the
    Aquitaine Museum.
  </p>
  <a href="" class="show_more">Show more ></a>
</section>

<hr />
<section class="host_details_section">
  
</section>

<hr />
<section class="things_to_know">
    <div class="section_heading"><h3>Things to know</h3></div>
    <div class="Upper_footer">
      <div>
        <table class="footer-table">
          <tr>
            <td><h4>House rules</h4></td>
          </tr>
          <tr>
            <td>Check-in: After 4:00 PM</td>
          </tr>
          <tr>
            <td>Checkout:  10:00 AM</td>
          </tr>
          <tr>
            <td>Self check-in with lockbox</td>
          </tr>
          <tr>
            <td>Not suitable for infants (under 2 years)</td>
          </tr>
          <tr>
            <td>No smoking</td>
          </tr>
          <tr>
            <td>No pets</td>
          </tr>
          <tr>
            <td>No parties or events</td>
          </tr>
        </table>
      </div>

      <div>
        <table class="footer-table">
          <tr>
            <td><h4>Health & safety</h4></td>
          </tr>
          <tr>
            <td>Committed to Airbnb's enhanced cleaning process.<a href="" class="show_more">Show more ></a></td>
          </tr>
          <tr>
            <td>Airbnb's social-distancing and other COVID-19-related guidelines apply</td>
          </tr>
          <tr>
            <td>Carbon monoxide alarm</td>
          </tr>
          <tr>
            <td>Smoke alarm</td>
          </tr>
          <tr>
            <td>Security Deposit - if you damage the home, you may be charged up to $566</td>
          </tr>
        </table>
      </div>

      <div>
        <table class="footer-table">
          <tr>
            <td><h4>Cancellation policy</h4></td>
          </tr>
          <tr>
            <td>Free cancellation before Feb 14</td>
          </tr>
          <tr>
            <td><a href="" class="show_more">Show more ></a></td>
          </tr>
        </table>
      </div>

    </div>
    <a href="" class="show_more">Show more ></a>
</section>

<hr />
`;

    main.appendChild(Section);
  }
})();
