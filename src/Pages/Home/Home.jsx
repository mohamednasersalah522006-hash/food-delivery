import { useState } from "react";
import ExploreMenu from "../../Components/ExploreMenu/ExploreMenu";
import Header from "../../Components/Header/Header";
import "./Home.css";
import FoodeDisplay from "../../Components/FoodDisplay/FoodeDisplay";
import AppDowenload from "../../Components/AppDowenload/AppDowenload";
const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodeDisplay category={category}/>
      <AppDowenload/>
    </div>
  );
};

export default Home;
