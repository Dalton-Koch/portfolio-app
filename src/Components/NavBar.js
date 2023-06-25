import '../App.css';
import {
    Link
} from 'react-router-dom';

function Signature() {
    return (
        <img className='w-1/8 invert contrast-50' src={require('../logo.png')}/>
    )
}

function NavButton({buttonText,link}) {
    function handleClick() {
        console.log({link})
    }

    return (
        <Link to={link}>
            <button className='text-neutral-200 text-center h-full mx-10' onClick={handleClick}>{buttonText}</button>
        </Link>
    )
}


export default function NavBar() {
    return (
        <div className='bg-stone-800 flex flex-row h-12'>
            <Signature/>
            <div className='grow flex flex-row-reverse items-fill border-neutral-200 bg-stone-800 divide-x divide-x-reverse'>
                <NavButton buttonText={'Contact'} link={'/Home'}/>
                <NavButton buttonText={'Resume'} link={'/Home'}/>
                <NavButton buttonText={'Projects'} link={'/Home'}/>
                <NavButton buttonText={'Home'} link={'/Home'}/>
            </div>
        </div>
    )
}