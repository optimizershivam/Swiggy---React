import React, {useState} from "react";
import './App.css';
import Navbar from './Components/Navbar';
import Offers from './Components/Offers';
import Filters from './Components/Filters';
import Restaurants from './Components/Restaurants';

//Data import
import userInfo from "./data/userInfo.json"
import offers from "./data/offers.json"
import restaurants from "./data/restaurants.json"

const filters = {
  1: "Cost High to Low",
  2: "Cost Low to High",
  3: "Ratings",
  4: "Delivery Time",
  5: "Relevance"
}

function App() {
  const [filterby, setfilterby] = useState("")
  const [data, setdata] = useState(restaurants);

  const updateFilter = (newFilter) => {
        switch(newFilter) {
              case "1" : {
                setfilterby(1);
                data.sort((a, b) => b.costForTwo - a.costForTwo );
                setdata([...data]);
                break;
              }
              case "2" : {
                setfilterby(2);
                data.sort((a, b) => a.costForTwo - b.costForTwo );
                setdata([...data]);
                break;
              }
              case "3" : {
                setfilterby(3);
                data.sort((a, b) => b.rating - a.rating );
                setdata([...data]);
                break;
              } 
              case "4" : {
                setfilterby(4);
                data.sort((a, b) => b.deliveryTimings - a.deliveryTimings );
                setdata([...data]);
                break;
              }default : {
                setdata(restaurants);
                break; 
              }
        }
  }
  return (
    <div className="App">
      {/* Because we only want to pass location informationn from user data folder */}
        <Navbar {...userInfo.location}/>
        <Offers offers={offers}/>
        <section className="near-you">
        <Filters filters={filters} updateFilter={updateFilter} currentFilterBy={filterby}/>
        <Restaurants restaurants={data}/>
        </section>
    </div>
  );
}

export default App;
