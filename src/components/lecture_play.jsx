import './../util/util.css'
import './../styles/course.css'
import Menu from './menu';
import { Link } from 'react-router';
import banner from '/js.svg'
import { useParams } from 'react-router';
import ReactPlayer from 'react-player';
import { useEffect } from 'react';

function Lect_play(){

    useEffect(el=>{
        if (window.innerHeight < window.innerWidth) {
            const video = document.querySelector("video");
            if (video && video.requestFullscreen) {
                video.requestFullscreen().catch(err => console.log(err));
            }
        }
    }, [])

    return(
        <div className='play'>
            <button className='download_assignment'>Download Assignment</button>
            <div className='videoSection flex'>
                <ReactPlayer
                    url="https://firebasestorage.googleapis.com/v0/b/imageprocess-bb374.firebasestorage.app/o/2025-06-09%2014-43-23.mp4?alt=media&token=7ee2e2aa-f1aa-4a24-a78c-60a80ac35d2f"
                    controls
                    width="100%"
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