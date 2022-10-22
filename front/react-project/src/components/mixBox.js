import React from "react";
import LinkButton from "./order-card";
import Meter from "./metare";

class MixBox extends React.Component {
  render() {
    return(
      <div>
        <LinkButton>
            <Meter></Meter>
        </LinkButton>
      </div>
    )
  }
}
export default MixBox;
