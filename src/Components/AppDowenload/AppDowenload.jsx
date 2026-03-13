import "./AppDowenload.css";
import { assets } from "../../assets/assets";
const AppDowenload = () => {
  return (
    <div className="app-dowenload" id="app-dowenload">
      <p>
        For Better Experience Dowenload <br /> Tomato App
      </p>
      <div className="app-dowenload-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  );
};

export default AppDowenload;
