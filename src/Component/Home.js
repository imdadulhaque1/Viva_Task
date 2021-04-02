import React from 'react';

const Home = ({val, setVal}) => {
	return (
	<div className="Home">
                    <br/><br/><h1>Home Page</h1> <br/><br/>
                    <input type="text" value = {val} onChange =  {(e)=>{setVal(e.target.value)}} />
		
          </div>
)

}

export default Home;
