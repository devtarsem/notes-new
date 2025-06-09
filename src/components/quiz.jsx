import './../util/util.css'
import './../styles/quiz.css'
import Menu from './menu';
import { Link } from 'react-router';

function Quiz(){
    return(
        <div className='quiz'>
            <div className='topNotes pad16'>
                <h2 className='head2 headingtop'>quit</h2>
            </div>
            <div className='pad16 flex flex-dir gap16'>
                <div className='problem'>

                </div>
                <div className='options flex flex-dir gap16 pad16'>
                    {[1,2,3,4].map(el=>
                        <button className='optbtn'>Option {el}</button>
                    )}
                </div>
                <div className='nextbtn flex flex-1'>
                    <button className='optbtnNext'>Next</button>

                </div>
            </div>
        </div>
    )
}

export default Quiz