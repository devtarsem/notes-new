import './../util/util.css'
import './../styles/practice_view.css'
import Menu from './menu';
import { Link } from 'react-router';

function Practice_view(){
    return(
        <div className='practiceView'>
            <div className='topNotes pad16'>
                <h2 className='head2 headingtop'>Practice c++</h2>
            </div>
            <div className='pad16 trackerh'>
                <div className='tracker pad16 flex flex-dir gap8'>
                    <h3 className='trackehead'>7/10 completed</h3>
                    <div className='outer'>
                        <div className='innerdot'></div>
                    </div>
                </div>
            </div>
            <div className='latespracticesets pad16 flex flex-dir gap16'>
                <h3 className='head3'>Recent quiz</h3>
                <div className='flex flex-dir gap16'>
                    {["cpp array", "Cpp pointers"].map(el=>
                        <div className='recentkuiz pad16 flex flex-1'>
                            <div className='flex flex-1 gap16'>
                                <p className='kuizsub'>{el}</p>
                                <p className='kuizsub status'>easy</p>
                            </div>
                            <Link to='/' className='revicebtn'>Revice</Link>
                        </div>
                    )}
                </div>

                <hr/>

                <h3 className='head3'>Live quiz</h3>
                <div className='flex flex-dir gap16'>
                    {["cpp array", "Cpp pointers"].map(el=>
                        <div className='recentkuiz pad16 flex flex-1'>
                            <div className='flex flex-1 gap16'>
                                <p className='kuizsub'>{el}</p>
                                <p className='kuizsub status'>easy</p>
                            </div>
                            <Link to='/Quiz' className='revicebtn'>Start</Link>
                        </div>
                    )}
                </div>
            </div>
            <div className='menuPrac'>
                <Menu/>
            </div>
        </div>
    )
}
export default Practice_view;