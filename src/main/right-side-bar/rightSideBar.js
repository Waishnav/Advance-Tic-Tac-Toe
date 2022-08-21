import './style.css'

const RightSideBar = ({select,frequency}) => {
    return(
        <div className="right-side-bar">
            <div >
                <h1>Times avail</h1>
                <div className='freq'>{2 - frequency['right-1']}</div>
                <div className='freq'>{2 - frequency['right-2']}</div>
                <div className='freq'>{2 - frequency['right-3']}</div>
                <div className='freq'>{2 - frequency['right-4']}</div>
            </div>
            <div>
                <h1>Opponent - Cross</h1>
                    <div className='right' id='right-1' onClick={select}>Cross 1 </div>
                    <div className='right' id='right-2' onClick={select}>Cross 2 </div>
                    <div className='right' id='right-3' onClick={select}>Cross 3 </div>
                    <div className='right' id='right-4' onClick={select}>Cross 4 </div>
            </div>
        </div>
    )
}
export default RightSideBar;