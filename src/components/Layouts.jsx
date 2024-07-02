import Headers from './Headers'
import Contents from './Contents'
import Footers from './Footers'
import Sidbars2 from './Sidbars2'

export default function Layouts() {
  return (
    <div>

      <Headers />
      <div className='d-flex'>
        <Sidbars2 />
        <Contents />
      </div>
      <Footers />
    </div>
  )
}