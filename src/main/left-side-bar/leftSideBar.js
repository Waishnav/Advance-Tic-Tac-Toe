import './style.css'

const LeftSideBar = ({select,frequency}) => {
    return (
        <div className="left-side-bar">
            <h2>Your Friend</h2>
            <div className="left-side">
                    <div className='left' id='left-1' onClick={select}>
                        <div className='freq'>{2 - frequency['left-1']}x</div>
                    </div>
                    <div className='left' id='left-2' onClick={select}>
                        <div className='freq'>{2 - frequency['left-2']}x</div>
                    </div>
                    <div className='left' id='left-3' onClick={select}>
                        <div className='freq'>{2 - frequency['left-3']}x</div>
                    </div>
                    <div className='left' id='left-4' onClick={select}>
                        <div className='freq'>{2 - frequency['left-4']}x</div>
                    </div>
            </div>
        </div>
    )
}

export default LeftSideBar;
