import './style.css'

const LeftSideBar = ({select,frequency}) => {
    return (
        <div className="left-side-bar">
                <div>
                     <h1>You - Circle</h1>
                     <div className='left' id='left-1' onClick={select}>Circle 1 </div>
                     <div className='left' id='left-2' onClick={select}>Circle 2 </div>
                     <div className='left' id='left-3' onClick={select}>Circle 3 </div>
                     <div className='left' id='left-4' onClick={select}>Circle 4 </div>
                </div>
                <div >
                    <h1>Times avail</h1>
                    <div className='freq'>{2 - frequency['left-1']}</div>
                    <div className='freq'>{2 - frequency['left-2']}</div>
                    <div className='freq'>{2 - frequency['left-3']}</div>
                    <div className='freq'>{2 - frequency['left-4']}</div>
                </div>
        </div>
    )
}

export default LeftSideBar;