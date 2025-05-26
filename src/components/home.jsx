import './../util/util.css'
import './../styles/home.css'
import logo from '/public/logo.png'
import { Link } from 'react-router'

function Home(){
    return(
        <div className='home flex flex-2 flex-dir gap16 pad16'>
            <div className='flex flex-2'>
                <Link to='/auth' className='link linkFloat'>Let's start your AI journey</Link>
            </div>
            <img src={logo} className='logo' alt='logo'/>
            <h1 className='head logoheadoverlay'>Skylite <br/> Educations</h1>
        </div>
    )
}

export default Home;