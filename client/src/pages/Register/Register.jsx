import { useState } from 'react';
import './Register.css'

const Register = () => {
    const [teamName, setteamName] = useState("");
    const [teamLeaderName, setteamLeaderName] = useState("");
    const [personalEmailTeamLeader, setpersonalEmailTeamLeader] = useState("");

    const collectData = async (e) => {
        e.preventDefault();
        try {
            let result = await fetch('https://osdhack-23.onrender.com/', {
                method: 'post',
                body: JSON.stringify({ teamName, teamLeaderName, personalEmailTeamLeader }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(result);
            const resultData = await result.json();
            console.log(resultData);

        } catch (error) {
            console.error('Error submitting data:', error);
        };
    }

    return (
        <>
            <form onSubmit={collectData}>
                <div className="form-group">
                    <label htmlFor="teamName">Team Name</label>
                    <input type="text" className="form-control" id="teamName" placeholder="Enter Team Name:"
                        value={teamName}
                        onChange={(e) => setteamName(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="teamLeaderName">Team Leader Name:</label>
                    <input type="text" className="form-control" id="teamLeaderName" aria-describedby="emailHelp" placeholder="Enter Team Leader Name"
                        value={teamLeaderName}
                        onChange={(e) => setteamLeaderName(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="personalEmailTeamLeader">Personal Email(Team Leader):</label>
                    <input type="email" className="form-control" id="personalEmailTeamLeader" placeholder="Enter Team Leader Mail:"
                        value={personalEmailTeamLeader}
                        onChange={(e) => setpersonalEmailTeamLeader(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </> 
    )
}

export default Register;