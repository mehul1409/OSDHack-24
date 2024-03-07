import './Team.css'
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

import Detail from './Detail';

const Team = () => {
    return (
        <div className='team'>
            <div className='memberHeading'>TEAM MEMBERS</div>
            <div className="teamsection">
            {
                Detail.map((item, index) => (
                    <div className="member-card" key={index}>
                        <div className="card-content">
                            <img src={item.img} alt="Profile Picture" className="profile-picture" />
                            <div className='member-detail'>
                                <div className="member-name">{item.name}</div>
                                <h3 className='member-role'>{item.role}</h3>
                                <div className="social-icons">
                                    <div><a href={item.social[0]}><FaGithub /></a></div>
                                    <div><a href={item.social[1]}><FaDiscord /></a></div>
                                    <div><a href={item.social[2]}><FaFacebook /></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Team;