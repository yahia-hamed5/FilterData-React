import React, { useRef, useState } from "react";

export default function App() {
  const [products, setproducts] = useState([
    {
      name: "mobile-1",
      price: 100,
      stock_qty: 10,
      image:
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc4/iPhone_16_Taptic-Button.jpg",
    },
    {
      name: "mobile-2",
      price: 200,
      stock_qty: 9,
      image:
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc4/iPhone_16_Taptic-Button.jpg",
    },
    {
      name: "mobile-3",
      price: 300,
      stock_qty: 8,
      image:
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc4/iPhone_16_Taptic-Button.jpg",
    },
    {
      name: "samsung-1",
      price: 400,
      stock_qty: 7,
      image:
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc4/iPhone_16_Taptic-Button.jpg",
    },
    {
      name: "samsung-2",
      price: 500,
      stock_qty: 6,
      image:
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc4/iPhone_16_Taptic-Button.jpg",
    },
    {
      name: "samsung-3",
      price: 600,
      stock_qty: 5,
      image:
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc4/iPhone_16_Taptic-Button.jpg",
    },
    {
      name: "samsung-4",
      price: 700,
      stock_qty: 4,
      image:
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc4/iPhone_16_Taptic-Button.jpg",
    },
  ]);
  const [resulte, setResulte] = useState([
    {
      name: "mobile-1",
      price: 100,
      stock_qty: 10,
      image:
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc4/iPhone_16_Taptic-Button.jpg",
    },
    {
      name: "mobile-2",
      price: 200,
      stock_qty: 9,
      image:
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc4/iPhone_16_Taptic-Button.jpg",
    },
    {
      name: "mobile-3",
      price: 300,
      stock_qty: 8,
      image:
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc4/iPhone_16_Taptic-Button.jpg",
    },
    {
      name: "samsung-1",
      price: 400,
      stock_qty: 7,
      image:
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc4/iPhone_16_Taptic-Button.jpg",
    },
    {
      name: "samsung-2",
      price: 500,
      stock_qty: 6,
      image:
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc4/iPhone_16_Taptic-Button.jpg",
    },
    {
      name: "samsung-3",
      price: 600,
      stock_qty: 5,
      image:
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc4/iPhone_16_Taptic-Button.jpg",
    },
    {
      name: "samsung-4",
      price: 700,
      stock_qty: 4,
      image:
        "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc4/iPhone_16_Taptic-Button.jpg",
    },
  ]);
  const [pricebox,setpricebox]=useState([]);

  const togglePrice=(price)=>{
    let statePrice=[...pricebox]
    let index=statePrice.indexOf(price)
    if (index == -1) {
      statePrice.push(price);
      setpricebox(statePrice);
    }else{
      statePrice.splice(index,1)
      setpricebox(statePrice);
    }

    let searchRes=products.filter((el,index)=>{
      return statePrice.some((price)=>el.price === price )
    })
    setResulte(searchRes);
  }

  let searchinput = useRef();
  const search = () => {
    let val = searchinput.current.value;
    let searchRes = products.filter((ele, index) => {
      return ele.name.toLowerCase().includes(val.toLowerCase()) == true;
    });
    setResulte(searchRes);
    console.log(searchRes);
  };

  return (
    <div className="col-12 App">
      <h1 className="col-12 bg-primary">Welcome Man</h1>
      <div className="search d-flex justify-content-center col-12">
        <input
          type="text"
          className="col-6"
          ref={searchinput}
          onChange={search}
          placeholder="Enter Search Product"
        />
        {/* <button className="btn btn-danger col-4" onClick={search} >Search</button> */}
      </div>
      <div className="col-12 d-flex justify-content-center">
        <select className="col-6" onChange={(event)=>{
          let valSelect =event.target.value;
          // console.log(valSelect)
          let searchRes=products.filter((ele,index)=>{
            return ele.name.toLowerCase().includes(valSelect.toLowerCase())==true;
          });
          setResulte(searchRes);
        }}>
          <option value="-1"  hidden>Select Brand</option>
          <option value="">All</option>
          <option value="mobile">Mobile</option>
          <option value="samsung">Samsung</option>
        </select>
      </div>
      <div className="col-12 gap-4 d-flex justify-content-center  ">
        <div className="d-flex gap-1">
          <input id="p100" type="checkbox" onChange={()=>togglePrice(100)}  />
          <label htmlFor="p100">100</label>
        </div>
        <div className="d-flex gap-1">
          <input id="p200" type="checkbox" onChange={()=>togglePrice(200)} />
          <label htmlFor="p200">200</label>
        </div>
        <div className="d-flex gap-1">
          <input id="p300" type="checkbox" onChange={()=>togglePrice(300)} />
          <label htmlFor="p300">300</label>
        </div>
        <div className="d-flex gap-1">
          <input id="p400" type="checkbox" onChange={()=>togglePrice(400)} />
          <label htmlFor="p400">400</label>
        </div>
        <div className="d-flex gap-1">
          <input id="p500" type="checkbox" onChange={()=>togglePrice(500)} />
          <label htmlFor="p500">500</label>
        </div>
        <div className="d-flex gap-1">
          <input id="p600" type="checkbox" onChange={()=>togglePrice(600)} />
          <label htmlFor="p600">600</label>
        </div>
        <div className="d-flex gap-1">
          <input id="p700" type="checkbox" onChange={()=>togglePrice(700)} />
          <label htmlFor="p700">700</label>
        </div>
      </div>

      <div className="d-flex flex-wrap   gap-3 col-12">
        {resulte.map((el, index) => {
          return (
            <div key={index} className="card " style={{ width: "18rem" }}>
              <img src={el.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{el.name}</h5>
                <p className="card-text">{el.price} $</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// filter by name
// filter by select box
