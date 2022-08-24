import './style.css'

const Hero = ({clearBoard,play,turn}) => {
    return(
        <div className="hero">
                <h2>Turn of : {turn}</h2>
                <div className='grid'>
                    <div className='grid-comp' id='1' onClick={play}>
                        <img className='cross1' id='1' src={require('../../images/cross.png')} alt=''></img>
                        <img className='circle1' id='1' src={require('../../images/circle.png')} alt=''></img>
                    </div>
                    <div className='grid-comp' id='2' onClick={play}>
                        <img className='cross2' id='2' src={require('../../images/cross.png')} alt=''></img>
                        <img className='circle2' id='2' src={require('../../images/circle.png')} alt=''></img>
                    </div>
                    <div className='grid-comp' id='3' onClick={play}>
                        <img className='cross3' id='3' src={require('../../images/cross.png')} alt=''></img>
                        <img className='circle3' id='3' src={require('../../images/circle.png')} alt=''></img>
                    </div>
                    <div className='grid-comp' id='4' onClick={play}>
                        <img className='cross4' id='4' src={require('../../images/cross.png')} alt=''></img>
                        <img className='circle4' id='4' src={require('../../images/circle.png')} alt=''></img>
                    </div>
                    <div className='grid-comp' id='5' onClick={play}>
                        <img className='cross5' id='5' src={require('../../images/cross.png')} alt=''></img>
                        <img className='circle5' id='5' src={require('../../images/circle.png')} alt=''></img>
                    </div>
                    <div className='grid-comp' id='6' onClick={play}>
                        <img className='cross6' id='6' src={require('../../images/cross.png')} alt=''></img>
                        <img className='circle6' id='6' src={require('../../images/circle.png')} alt=''></img>
                    </div>
                    <div className='grid-comp' id='7' onClick={play}>
                        <img className='cross7' id='7' src={require('../../images/cross.png')} alt=''></img>
                        <img className='circle7' id='7' src={require('../../images/circle.png')} alt=''></img>
                    </div>
                    <div className='grid-comp' id='8' onClick={play}>
                        <img className='cross8' id='8' src={require('../../images/cross.png')} alt=''></img>
                        <img className='circle8' id='8' src={require('../../images/circle.png')} alt=''></img>
                    </div>
                    <div className='grid-comp' id='9' onClick={play}>
                        <img className='cross9' id='9' src={require('../../images/cross.png')} alt=''></img>
                        <img className='circle9' id='9' src={require('../../images/circle.png')} alt=''></img>
                    </div>
                </div>
                <br></br>
                <button onClick={clearBoard} className='clear-boardPlay'>Play Again <svg width="21" height="8" viewBox="0 0 21 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 2.99996L-8.78384e-08 2.99996L8.78384e-08 4.99996L1 4.99996L1 2.99996ZM1 4.99996L20 4.99996L20 2.99996L1 2.99996L1 4.99996ZM16.129 4.23014e-08C16.129 2.73026 18.2792 5 21 5L21 3C19.4451 3 18.129 1.68801 18.129 -4.23014e-08L16.129 4.23014e-08ZM21 3C18.2792 3 16.1289 5.2697 16.1289 8H18.1289C18.1289 6.31201 19.445 5 21 5V3Z" fill="#0D0D0D"/>
</svg></button>
            </div>
    )
}
export default Hero;
