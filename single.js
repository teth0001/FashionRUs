const productId = 1163;
const produkt = document.querySelector(".produkt");
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    produkt.innerHTML = `
    <img class="produktimg" src="https://kea-alt-del.dk/t7/images//webp/640/${productId}.webp" alt="Produktbillede" />
     <div class="produktinfo">
          <h2>Produktinformation</h2>
          <h5>MÆRKE</h5>
          <p>${data.brandname}</p>
          <h5>MODELNAVN</h5>    
          <p>${data.productdisplayname}</p>
          <h5>FARVE</h5>
          <p>${data.colour1}</p>
          <h6>Vælg Størrelse</h6>
          <div class="valg">
            <select>
              <option value="0">XS</option>
              <option value="1">S</option>
              <option value="2">M</option>
              <option value="3">L</option>
              <option value="4">XL</option>
              <option value="5">XXL</option>
            </select>
            <p class="tilkurv">Føj Til Kurv</p>
          </div>
        </div>
    `;
  });
