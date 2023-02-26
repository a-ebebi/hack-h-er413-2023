import React from 'react';
import './AllFarms.css'
import { useState } from 'react';
import WomenOwned from './WomenOwned';
import MinorityOwned from './MinorityOwned';

const AllFarms = () => {

    const [page, setPage] = useState('home');

    const handlePageChange = (page) => {
      setPage(page);
    };

  return(
    <div>

      <div className="button_container">
        <div className="center_buttons">
          <button onClick={() => handlePageChange('home')} type="button" name="minority-btn">
            All Farms
          </button>
          <button onClick={() => handlePageChange('women')} type="button" name="women-btn">
            Women-Owned
          </button>
          <button onClick={() => handlePageChange('minority')} type="button" name="minority-btn">
            Minority-Owned
          </button>
        </div>
      </div>

      {page === 'home' && (
        <div>
            <h1>All On-Farm Markets</h1>
        <div className="Items">
          {/* Existing code for items */}
          <div className="Items">
        <div className="Item">
          <a
            href="#"
            className="Item__link"
          >
            <div className="ImageContainer">
              <img
                src="https://www.travelwisconsin.com/uploads/blog/e2/e2ccbd6f-1070-4272-889b-cc7720bd664d-farm-scene-with-cows.jpg"
                className="Image"
              />
            </div>
            <div className="Item__title">Atkins Farms Country Market</div>
            <div className="Item__address">1150 West St, Amherst, MA 01002.</div>
          </a>
        </div>
        <div className="Item">
          <a
            href="#"
            className="Item__link"
          >
            <div className="ImageContainer">
              <img
                src="https://cdn.shopify.com/s/files/1/0561/1146/4599/t/4/assets/bo8a9976_k42k_500x300_crop_center.jpg"
                className="Image"
              />
            </div>
            <div className="Item__title">Nourse Farms</div>
            <div className="Item__address">41 River Rd, Whately, MA 01093</div>
          </a>
        </div>
        <div className="Item">
          <a
            href="https://wfmhm.com/"
            className="Item__link"
          >
            <div className="ImageContainer">
              <img
                src="https://www.travelwisconsin.com/uploads/blog/e2/e2ccbd6f-1070-4272-889b-cc7720bd664d-farm-scene-with-cows.jpg"
                className="Image"
              />
            </div>
            <div className="Item__title">Winter Farmers Market</div>
            <div className="Item__address">1150 West Street, South Amherst, Massachusetts 01002</div>
          </a>
        </div>
        <div className="Item">
          <a
            href="#"
            className="Item__link"
          >
            <div className="ImageContainer">
              <img
                src="https://cdn.shopify.com/s/files/1/0561/1146/4599/t/4/assets/bo8a9976_k42k_500x300_crop_center.jpg"
                className="Image"
              />
            </div>
            <div className="Item__title">Pell Farm</div>
            <div className="Item__address">492 Kibbe Grove Rd, Somers, CT 06071</div>
          </a>
        </div>
        <div className="Item">
          <a
            href="#"
            className="Item__link"
          >
            <div className="ImageContainer">
              <img
                src="https://cdn.shopify.com/s/files/1/0561/1146/4599/t/4/assets/bo8a9976_k42k_500x300_crop_center.jpg"
                className="Image"
              />
            </div>
            <div className="Item__title">Johnson Family Farm</div>
            <div className="Item__address">465 Skyline Trail, Chester, MA 01011</div>
          </a>
        </div>
        <div className="Item">
          <a
            href="#"
            className="Item__link"
          >
            <div className="ImageContainer">
              <img
                src="https://cdn.shopify.com/s/files/1/0561/1146/4599/t/4/assets/bo8a9976_k42k_500x300_crop_center.jpg"
                className="Image"
              />
            </div>
            <div className="Item__title">Freedom Orchard and Farm</div>
            <div className="Item__address">410 Skyline Trail, Chester, MA 01011</div>
          </a>
        </div>
        
      </div>
        </div>
        </div>
      )}

      {page === 'women' && (
        <WomenOwned />
      )}

    {page === 'minority' && (
        <MinorityOwned />
      )}    

    </div>
  );
}

export default AllFarms;