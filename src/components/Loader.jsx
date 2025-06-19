import { Spinner } from 'react-bootstrap'

function Loader() {
  return (
    <div style={{height: '100vh', display:'flex', justifyContent:'center', alignItems: 'center', flexDirection:'column'}}>
        <Spinner animation="border" variant="primary" />
        <span>Loading...</span>
    </div>
  )
}

export default Loader