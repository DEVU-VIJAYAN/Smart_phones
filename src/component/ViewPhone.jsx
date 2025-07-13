import React, { useState } from 'react'
import AddNav from './AddNav'

const ViewPhone = () => {
    const[Phone,SetPhone]=useState(
    [
  {
    "PhoneName": "iQOO Neo 9 Pro 5G",
    "PhoneImage": "https://m.media-amazon.com/images/I/61wL8Qbo0HL._AC_UL480_FMwebp_QL65_.jpg",
    "ManufactureDate": "2024-01-15",
    "ExpiryDate": "2026-01-15",
    "WarrantyInfo": "2 years",
    "Price": 35999,
    "Discount": "12%"
  },
  {
    "PhoneName": "Samsung Galaxy M14 5G",
    "PhoneImage": "https://m.media-amazon.com/images/I/51SnUmyhayL._AC_UY327_FMwebp_QL65_.jpg",
    "ManufactureDate": "2023-11-20",
    "ExpiryDate": "2025-11-20",
    "WarrantyInfo": "1 year",
    "Price": 30999,
    "Discount": "8%"
  },
  {
    "PhoneName": "Realme Narzo 60X 5G",
    "PhoneImage": "https://m.media-amazon.com/images/I/71Kyp8TlE6L._AC_UY327_FMwebp_QL65_.jpg",
    "ManufactureDate": "2024-02-12",
    "ExpiryDate": "2026-02-12",
    "WarrantyInfo": "2 years",
    "Price": 31999,
    "Discount": "10%"
  },
  {
    "PhoneName": "Redmi 12 5G",
    "PhoneImage": "https://m.media-amazon.com/images/I/71SVRdsgY-L._AC_UY327_FMwebp_QL65_.jpg",
    "ManufactureDate": "2023-10-01",
    "ExpiryDate": "2025-10-01",
    "WarrantyInfo": "1.5 years",
    "Price": 34999,
    "Discount": "15%"
  },
  {
    "PhoneName": "Samsung Galaxy A14 5G",
    "PhoneImage": "https://m.media-amazon.com/images/I/61XZ7meq34L._AC_UY327_FMwebp_QL65_.jpg",
    "ManufactureDate": "2023-12-01",
    "ExpiryDate": "2025-12-01",
    "WarrantyInfo": "2 years",
    "Price": 38999,
    "Discount": "9%"
  },
  {
    "PhoneName": "Redmi Note 13 5G",
    "PhoneImage": "https://m.media-amazon.com/images/I/61SMBgdo3GL._AC_UL480_FMwebp_QL65_.jpg",
    "ManufactureDate": "2024-03-10",
    "ExpiryDate": "2026-03-10",
    "WarrantyInfo": "1 year",
    "Price": 32999,
    "Discount": "7%"
  },
  {
    "PhoneName": "Realme Narzo N55",
    "PhoneImage": "https://m.media-amazon.com/images/I/61vsICuXJ8L._AC_UL480_FMwebp_QL65_.jpg",
    "ManufactureDate": "2024-04-25",
    "ExpiryDate": "2026-04-25",
    "WarrantyInfo": "2 years",
    "Price": 38999,
    "Discount": "6%"
  },
  {
    "PhoneName": "iQOO Z9 5G",
    "PhoneImage": "https://m.media-amazon.com/images/I/71qSB43fP0L._AC_UY327_FMwebp_QL65_.jpg",
    "ManufactureDate": "2024-01-30",
    "ExpiryDate": "2026-01-30",
    "WarrantyInfo": "1 year",
    "Price": 35999,
    "Discount": "11%"
  },
  {
    "PhoneName": "Redmi Note 12 5G",
    "PhoneImage": "https://m.media-amazon.com/images/I/715aoVxQNTL._AC_UY327_FMwebp_QL65_.jpg",
    "ManufactureDate": "2023-08-15",
    "ExpiryDate": "2025-08-15",
    "WarrantyInfo": "1.5 years",
    "Price": 36999,
    "Discount": "10%"
  },
  {
    "PhoneName": "iQOO Z7 5G",
    "PhoneImage": "https://m.media-amazon.com/images/I/71Al7iepTgL._AC_UY327_FMwebp_QL65_.jpg",
    "ManufactureDate": "2023-09-20",
    "ExpiryDate": "2025-09-20",
    "WarrantyInfo": "2 years",
    "Price": 38999,
    "Discount": "13%"
  },
  {
    "PhoneName": "Realme Narzo 60 Pro 5G",
    "PhoneImage": "https://m.media-amazon.com/images/I/71ceEkr+QQL._AC_UY327_FMwebp_QL65_.jpg",
    "ManufactureDate": "2024-02-05",
    "ExpiryDate": "2026-02-05",
    "WarrantyInfo": "1 year",
    "Price": 41999,
    "Discount": "12%"
  },
  {
    "PhoneName": "Redmi 11 Prime 5G",
    "PhoneImage": "https://m.media-amazon.com/images/I/610ELrtuHEL._AC_UY327_FMwebp_QL65_.jpg",
    "ManufactureDate": "2023-07-18",
    "ExpiryDate": "2025-07-18",
    "WarrantyInfo": "1 year",
    "Price": 30999,
    "Discount": "10%"
  }
]


    )





  return (
    <div>
        <AddNav/>
      <div className="container">
        <div className="row">
            <div className="cl col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row g-3">
                    {Phone.map(
                        (value,index)=>{
                            return(
                                  <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                        <div class="card">
  <img src={value.PhoneImage} class="card-img-top" alt="..."height="350" width="200"/>
  <div class="card-body">
    <h5 class="card-title">{value.PhoneName}</h5>
        <p class="card-text">${value.Price}</p>
    <p class="card-text">Discount: {value.Discount}</p>


  </div>
  <ul class="list-group list-group-flush">
      <li class="list-group-item">{value.ManufactureDate}</li>
    <li class="list-group-item">{value.ExpiryDate}</li>
  
    <li class="list-group-item">{value.WarrantyInfo}</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Click here to Buy</a>
  </div>
</div>
                    </div>

                            )
                        }
                    )}

                  
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ViewPhone
