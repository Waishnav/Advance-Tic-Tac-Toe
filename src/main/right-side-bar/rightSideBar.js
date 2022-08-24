import './style.css'

const RightSideBar = ({select,frequency}) => {
    return(
        <div className="right-side-bar">
            <h1>Your Friend</h1>
            <div className='right' id='right-1' onClick={select}>
                <div className='freq'>{2 - frequency['right-1']}x</div>
            </div>
            <div className='right' id='right-2' onClick={select}>
                <div className='freq'>{2 - frequency['right-2']}x</div>
            </div>
            <div className='right' id='right-3' onClick={select}>
                <div className='freq'>{2 - frequency['right-3']}x</div>
            </div>
            <div className='right' id='right-4' onClick={select}>
                <div className='freq'>{2 - frequency['right-4']}x</div>
            </div>
        </div>
    )
}
export default RightSideBar;
