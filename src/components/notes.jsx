import './../util/util.css'
import './../styles/notes.css'
import Menu from './menu';
import { Link } from 'react-router';

function Notes(){
    return(
        <div className='notes'>
            <div className='topNotes pad16'>
                <h2 className='head2 headingtop'>Notes</h2>
            </div>
            <div className='midNotes pad16 '>
                <div className='inner grid grid-2-col gap16'>
                    {["Probability", "Statistics", "Neural networks", "JavaScript", "C++", "C#", "Python", "DSA"].map((el,index)=>
                        <div className='notebox pad16 flex flex-dir gap8 flex-2'>
                            <div className='designbanner flex flex-2'>
                                <p className='sno'>{index+1}</p>
                            </div>
                            <h3 className='notehead'>{el}</h3>
                            <Link to={`/notes-view/${el}`} className='notesLink'>View notes</Link>
                        </div>
                    )}
                </div>

            </div>
            <div className='mneuNote'>
                <Menu/>
            </div>
        </div>
    )
}

export default Notes;