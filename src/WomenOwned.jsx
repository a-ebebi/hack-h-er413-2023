import React from 'react';
import './AllFarms.css'

const WomenOwned = () => {
  return(
    <div>
      <h1>Women-Owned Farms</h1>

      <div className="Items">
        <div className="Item">
          <a href="https://wfmhm.com/" className="Item__link">
            <div className="ImageContainer">
              <img
                src="https://www.travelwisconsin.com/uploads/blog/e2/e2ccbd6f-1070-4272-889b-cc7720bd664d-farm-scene-with-cows.jpg"
                className="Image"
              />
            </div>
            <div className="Item__title">Winter Farmers Market</div>
            <div className="Item__address">
              1150 West Street, South Amherst, Massachusetts 01002
            </div>
          </a>
        </div>
        <div className="Item">
          <a href="#" className="Item__link">
            <div className="ImageContainer">
              <img
                src="https://cdn.shopify.com/s/files/1/0561/1146/4599/t/4/assets/bo8a9976_k42k_500x300_crop_center.jpg"
                className="Image"
              />
            </div>
            <div className="Item__title">Pell Farm</div>
            <div className="Item__address">
              492 Kibbe Grove Rd, Somers, CT 06071
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default WomenOwned;