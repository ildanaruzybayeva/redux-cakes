import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function CakeContainer(props) {
  return (
    <div>
      <h2>Number of cakes {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy a cake</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.numOfCakes
  };
}; //useSelector - hooks alternative

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  };
}; //useDispatch - hooks alternative

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
