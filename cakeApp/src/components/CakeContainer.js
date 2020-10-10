import React, {useState} from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer(props) {
    const [num, setNum] = useState(1)
  return (
    <div>
      <h2>Number of cakes {props.numOfCakes}</h2>
      <input type="text" value={num} onChange={(e)=> setNum(e.target.value)}/> 
      <button onClick={() => props.buyCake(num)}>Buy {num} cake</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  };
}; //useSelector - hooks alternative

const mapDispatchToProps = dispatch => {
  return {
    buyCake: (num) => dispatch(buyCake(num))
  };
}; //useDispatch - hooks alternative

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
