import './../util/util.css'
import './../styles/course.css'
import Menu from './menu';
import { Link } from 'react-router';
import banner from '/js.svg'

function Courses(){
    return(
        <div className='course'>
            <div className='topNotes pad16'>
                <h2 className='head2 headingtop'>Courses</h2>
            </div>
            <div className='coursemenu pad16 flex flex-dir gap16'>
                <h3 className='head3'>Free courses</h3>
                <div className='grid grid-2-col gap16'>
                    {[1,2,3].map(el=>
                        <Link to='/courses_lect/javascript' className='premCourse'>
                            <img src={banner} className='bann' alt='banner'/>
                        </Link>
                    )}
                </div>

                <h3 className='head3'>Paid courses</h3>
                <div className='grid grid-2-col gap16'>
                    {[1,2,3].map(el=>
                        <Link to='/courses_lect/javascript' className='premCourse'>
                            <img src={banner} className='bann' alt='banner'/>
                        </Link>
                    )}
                </div>
            </div>
            
            <div className='courseMenu'>
                <Menu/>
            </div>
        </div>
    )
}

export default Courses;