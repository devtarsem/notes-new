import './../util/util.css'
import './../styles/course.css'
import Menu from './menu';
import { Link } from 'react-router';
import banner from '/js.svg'
import { useParams } from 'react-router';
import ReactPlayer from 'react-player';
import { useEffect, useRef } from 'react';

function Lect_play(){

    const playerRef = useRef(null);

    const enterFullscreen = () => {
        const videoEl = document.querySelector('.videoSection');
        console.log(videoEl)
        if (videoEl) {
            if (videoEl.requestFullscreen) {
                videoEl.requestFullscreen();
            } else if (videoEl.webkitEnterFullscreen) {
                videoEl.webkitEnterFullscreen(); // For Safari/iOS
            } else {
                alert("Fullscreen not supported in this browser.");
            }
        }
    };

    return(
        <div className='play'>
            <button onClick={enterFullscreen} className='download_assignment'>Download Assignment</button>
            <div className='videoSection flex'>
                <ReactPlayer
                    url="https://firebasestorage.googleapis.com/v0/b/imageprocess-bb374.firebasestorage.app/o/2025-06-09%2014-43-23.mp4?alt=media&token=7ee2e2aa-f1aa-4a24-a78c-60a80ac35d2f"
                    controls
                    width="100%"
                     ref={playerRef}
                    height="100%"
                    style={{ aspectRatio: '16/9' }}
                    className="video"
                />
                
            </div>
            <div className='lecturesText pad16 flex flex-dir gap16'>
                <p className='transcript'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem libero, deserunt similique ipsam ea porro enim. Reiciendis eos ducimus consequuntur quaerat tenetur? Est architecto soluta saepe eum voluptatem nisi libero.`</p>
                <p className='transcript'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem libero, deserunt similique ipsam ea porro enim. Reiciendis eos ducimus consequuntur quaerat tenetur? Est architecto soluta saepe eum voluptatem nisi libero.`</p>
                <p className='transcript'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem libero, deserunt similique ipsam ea porro enim. Reiciendis eos ducimus consequuntur quaerat tenetur? Est architecto soluta saepe eum voluptatem nisi libero.`</p>
                <p className='transcript'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem libero, deserunt similique ipsam ea porro enim. Reiciendis eos ducimus consequuntur quaerat tenetur? Est architecto soluta saepe eum voluptatem nisi libero.`</p>
                <p className='transcript'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem libero, deserunt similique ipsam ea porro enim. Reiciendis eos ducimus consequuntur quaerat tenetur? Est architecto soluta saepe eum voluptatem nisi libero.`</p>

            </div>
            <div className='playMenu'>
                <Menu/>
            </div>
        </div>
    )
}

export default Lect_play;