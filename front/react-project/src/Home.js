// import React from 'react'
// import { Link } from 'react-router-dom'

// class Navbar extends React.Component {
//   render(){
//     return(
//       <div>
//         <Link to="/">Home</Link>
//         <Link to="/About">About</Link>
//       </div>
//     )
//   }
// }

// export default Navbar;

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>ホーム</h1>
      <div>
        <h1><Link to={`/register/`}>登録（店員画面になる予定）</Link><br/></h1>
        <h1><Link to={`/routers/`}>注文画面</Link></h1>
      </div>
    </>
  );
};

export default Home;