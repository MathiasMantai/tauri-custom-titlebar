import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMinimize, faXmark } from '@fortawesome/free-solid-svg-icons';
import { appWindow } from '@tauri-apps/api/window'



const Titlebar = () => {
    
    const minimizeWindow = async () => {
        await appWindow.minimize();
    }

    const maximizeWindow = async () => {
        await appWindow.toggleMaximize();
    }
    
    const closeWindow = async () => {
        await appWindow.close();
    }
    
    return (
        <div 
            data-tauri-drag-region 
            className="flex justify-between w-[100%] text-white bg-[#1b1b1b] select-none"
        >
            <div 
                data-tauri-drag-region 
                className='px-2 py-1'
            >
                Title of your App
            </div>
            <ul className='flex'>
                <li 
                    className='hover:bg-[#303049] px-2 py-1 cursor-pointer' 
                    onClick={minimizeWindow}
                >
                    <FontAwesomeIcon 
                        icon={faWindowMinimize} 
                        color="#fff" 
                        className=''
                    />
                </li>
                <li 
                    className='hover:bg-[#303049] px-2 py-2 cursor-pointer' 
                    onClick={maximizeWindow}>
                        <FontAwesomeIcon 
                            icon={faSquare} 
                            color="#fff" 
                            className='' />
                </li>
                <li 
                    className='hover:bg-[#D41324] px-2 py-1 cursor-pointer' 
                    onClick={closeWindow}
                >
                    <FontAwesomeIcon 
                        icon={faXmark} 
                        color="#fff" 
                        className='' 
                    />
                </li>
            </ul>
        </div>
    )
}

export default Titlebar;