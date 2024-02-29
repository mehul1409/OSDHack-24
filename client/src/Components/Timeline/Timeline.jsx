import './Timeline.css'
import logo from '../../assets/exploreProgramme1.png'
const Timeline = () => {
    return (
        <>
            <div className="timeline-heading">TIMELINE</div>
            <div className="timeline">
                <div className="container left-container">
                    <img src={logo} alt="" />
                    <div className="text-box">
                        <h2>Friday 21 April 2024</h2>
                        <p>5:00 to 7:00 PM</p>
                        <p>opening ceremony (Attandance Mandatory) + Speaker Session</p>
                        <span className='left-container-arrow'></span>
                    </div>
                </div>
                <div className="container right-container">
                    <img src={logo} alt="" />
                    <div className="text-box">
                        <h2>Friday 21 April 2024</h2>
                        <p>5:00 to 7:00 PM</p>
                        <p>opening ceremony (Attandance Mandatory) + Speaker Session</p>
                        <span className='right-container-arrow'></span>
                    </div>
                </div>
                <div className="container left-container">
                    <img src={logo} alt="" />
                    <div className="text-box">
                        <h2>Friday 21 April 2024</h2>
                        <p>5:00 to 7:00 PM</p>
                        <p>opening ceremony (Attandance Mandatory) + Speaker Session</p>
                        <span className='left-container-arrow'></span>
                    </div>
                </div>
                <div className="container right-container">
                    <img src={logo} alt="" />
                    <div className="text-box">
                        <h2>Friday 21 April 2024</h2>
                        <p>5:00 to 7:00 PM</p>
                        <p>opening ceremony (Attandance Mandatory) + Speaker Session</p>
                        <span className='right-container-arrow'></span>
                    </div>
                </div>
                <div className="container left-container">
                    <img src={logo} alt="" />
                    <div className="text-box">
                        <h2>Friday 21 April 2024</h2>
                        <p>5:00 to 7:00 PM</p>
                        <p>opening ceremony (Attandance Mandatory) + Speaker Session</p>
                        <span className='left-container-arrow'></span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Timeline;