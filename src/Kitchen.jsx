import Oven from "./Oven";
import Sink from "./Sink";

function Kitchen (props) {
  return (
    <>
    <div>
      <div id="os" className="noAutoStyle">
        <p id="oven">
          <Oven />      
        </p>
        <p id="sink">
          <Sink />
        </p>
      </div>
      <h1 id="kitchenword">Kitchen</h1>
    </div>
    </>
  );
}

export default Kitchen;