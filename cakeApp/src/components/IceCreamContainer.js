import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";

function IceCreamContainer(props) {
  return (
    <div>
      <h2>Number of icereams {props.numOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy a cake</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams
  };
}; //useSelector - hooks alternative

const mapDispatchToProps = dispatch => {
  return {
    buyIceCream: () => dispatch(buyIceCream())
  };
}; //useDispatch - hooks alternative

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
