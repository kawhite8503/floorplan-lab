import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./Bedroom";
import Bath from "./Bath";

function FloorPlan (props) {
  
  return (
    <div>
      <div id="top" class="noAutoStyle">
        <div id="masterbedbath" className="noAutoStyle">
          <p id="br1">
            <Bedroom bedNum = {1}/>
          </p>
          <p id="fbath">
            <Bath size = {"Full Bath"}/>
          </p>
        </div>
        <div id="lrkitchen" className="noAutoStyle">
          <p id="lr">
            <LivingRoom />
          </p>
          <p id="kitchen">
            <Kitchen />
          </p>
        </div>
      </div>
      <div id="brshbath" className="noAutoStyle">
        <p id="br2">
          <Bedroom bedNum = {2}/>
        </p>
        <p id="hbath">
          <Bath size = {"Half Bath"}/>
        </p>
        <p id="br3">
          <Bedroom bedNum = {3}/>
        </p>
      </div>
    </div>
  );
}

export default FloorPlan;