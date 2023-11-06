 
 // Import required modules
 import {  CirclesWithBar } from  'react-loader-spinner'

const Loader = () => {
  return (
<div className='d-flex justify-content-center  my-5 py-5  ' >

        

<CirclesWithBar
  height="100"
  width="100"
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  outerCircleColor="red"
  innerCircleColor="coral"
  barColor="coral"
  ariaLabel='circles-with-bar-loading'
/>
    </div>
  )
}

export default Loader