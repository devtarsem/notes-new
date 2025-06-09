import './../util/util.css'
import './../styles/learn.css'
import Menu from './menu';
import { Link } from 'react-router';

function Practice(){
    return(
        <div className='learn'>
            <div className='topNotes pad16'>
                <h2 className='head2 headingtop'>Practice coding</h2>
            </div>
            <div className='practiceSec pad16'>
                <div className='inner grid grid-2-col gap16'>
                    {["C++", "Javascript", "Neural networks", "Golang", "C++", "C#", "Python", "DSA"].map((el,index)=>
                        <div className='notebox pad16 flex flex-dir gap8 flex-2'>
                            <div className='designbanner flex flex-2'>
                                <p className='sno'>{index+1}</p>
                            </div>
                            <h3 className='notehead'>{el}</h3>
                            <Link to={`/practice-view/${el}`} className='notesLink'>Practice</Link>
                        </div>
                    )}
                </div>
            </div>
            <div className='menupractiec'>
                <Menu/>
            </div>
        </div>
    )
}

export default Practice;