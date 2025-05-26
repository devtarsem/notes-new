import './../util/util.css'
import './../styles/main.css'
import { Link } from 'react-router'
import neural from '/neural.png'
import Menu from './menu'

export default function Main(){
    return(
        <div className="main_">
            <div className='top_ flex flex-1 pad16'>
                <h2 className='head2 colorchng'>HeadWay</h2>
            </div>
            <div className='mid1 pad16'>
                <div className='streak grid grid-1-col grid-5-row'>
                    <div className='topstreak grid grid-7-col'>
                        <div className='streakcount flex flex-dir gap8 flex-2'>
                            <h3 className='head3'>Streak</h3>
                            <p className='count'>🔥0</p>
                            <p className='count_'>day</p>
                        </div>
                        <div className='streakStat flex flex-dir gap16 pad16'>
                            <h3 className='head3 decenter'>Your growth this week</h3>
                            <div className='flex flex-1'>
                                {[1,2,3].map(el=>
                                    <div className='c1 flex flex-dir gap8 flex-2'>
                                        <p className='cc1'>27</p>
                                        <p className='count_'>Algo</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='dailymiss flex flex-2'>
                        <Link to='/' className='fakelink'>YOUR DAILY MISSION</Link>
                    </div>
                </div>
            </div>
            <div className='mid2 pad16 flex flex-dir gap16'>
                <h2 className='mainhead'>Varieties of subjects</h2>
                <div className='listofsubs flex gap16'>
                    {[1,2,3,4].map(el=>
                        <div className=' subbox flex flex-1 gap16 pad8'>
                            <img src={neural} className='smallIcon' alt='icon'/>
                            <p className='subname'>Neural netoworks</p>
                        </div>
                    )}
                </div>
            </div>
            <div className='mid3 pad16 flex flex-dir gap16'>
                <div className='flex flex-dir gap4'>
                    <h2 className='mainhead'>To get you started</h2>
                    <p className='minihead'>Popular algorithms for core AI</p>
                </div>
                <div className='listofsubs flex gap16'>
                    {[1,2,3,4].map(el=>
                        <div className=' subbox flex flex-dir flex-2 gap16 pad8'>
                            <img src={neural} className='smallIcon_' alt='icon'/>
                            <p className='subname'>Backpropagation</p>
                        </div>
                    )}
                </div>
            </div>
            <div className='menu_'>
                <Menu/>
            </div>
        </div>
    )
}