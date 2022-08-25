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
            </div>
    )
}
export default Hero;
