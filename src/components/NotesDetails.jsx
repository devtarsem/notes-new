import './../util/util.css'
import './../styles/notes.css'
import Menu from './menu';
import { Link } from 'react-router';

function NotesDetail(){
    return(
        <div className="detailNotes">
            <div className='topNotes pad16'>
                <h2 className='head2 headingtop'>Download notes</h2>
            </div>
            <div className='midNotes pad16 flex flex-dir gap16 '>
                <div className='tracker pad16 flex flex-dir gap8'>
                    <h3 className='trackehead'>7/10 completed</h3>
                    <div className='outer'>
                        <div className='innerdot'></div>
                    </div>
                </div>
                <div className='inner grid grid-1-col gap16'>
                    {["Preceptrons", "Keggle star", "Learning of neural nets", "Backpropagation", "propce", "superstar#"].map((el,index)=>
                        <div className='notebox notesdoenbox pad16 flex flex-dir gap8 flex-2'>
                            <div className='designbox flex flex-2'>
                                <p className='snos'>{index+1}</p>
                            </div>
                            <h3 className='notehead'>{el}</h3>
                            <button download='https://firebasestorage.googleapis.com/v0/b/imageprocess-bb374.firebasestorage.app/o/images%2Fman.png?alt=media&token=6e836702-b0f8-4c52-8489-fab088e6005e' className='notesLink btnextras'>Download notes</button>
                        </div>
                    )}
                </div>

            </div>
            <div className='menunotes'>
                <Menu/>
            </div>
        </div>

    )
}

export default NotesDetail