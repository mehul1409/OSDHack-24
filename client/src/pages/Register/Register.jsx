import { useState } from 'react';
import './Register.css'
import { IoMdStar } from "react-icons/io";

const Register = () => {
    const [teamName, setteamName] = useState("");
    const [teamLeaderName, setteamLeaderName] = useState("");
    const [personalEmailTeamLeader, setpersonalEmailTeamLeader] = useState("");
    const [teamLeaderContactNumber, setteamLeaderContactNumber] = useState("");
    const [teamLeaderCollege, setteamLeaderCollege] = useState("");
    const [teamLeaderYear, setteamLeaderYear] = useState("");
    const [teamLeaderCollegeIdCardLink, setteamLeaderCollegeIdCardLink] = useState("");
    const [member1Name, setmember1Name] = useState("");
    const [member1Email, setmember1Email] = useState("");
    const [member1ContactNumber, setmember1ContactNumber] = useState("");
    const [member1College, setmember1College] = useState("");
    const [member1Year, setmember1Year] = useState('');
    const [member1CollegeIdCardLink, setmember1CollegeIdCardLink] = useState("");
    const [member2Name, setmember2Name] = useState("");
    const [member2Email, setmember2Email] = useState("");
    const [member2ContactNumber, setmember2ContactNumber] = useState("");
    const [member2College, setmember2College] = useState("");
    const [member2Year, setmember2Year] = useState("");
    const [member2CollegeIdCardLink, setmember2CollegeIdCardLink] = useState("");
    const [member3Name, setmember3Name] = useState("");
    const [member3Email, setmember3Email] = useState("");
    const [member3ContactNumber, setmember3ContactNumber] = useState("");
    const [member3College, setmember3College] = useState("");
    const [member3Year, setmember3Year] = useState("");
    const [member3CollegeIdCardLink, setmember3CollegeIdCardLink] = useState("");

    const [error, seterror] = useState();
    const [SuccessMessage, setSuccessMessage] = useState();
    const [passwordErrorMember1, setpasswordErrorMember1] = useState();
    const [passwordErrorMember2, setpasswordErrorMember2] = useState();
    const [passwordErrorMember3, setpasswordErrorMember3] = useState();


    const validation = () => {
        if (!teamName.trim()) {
            seterror("Team name is required!");
            return false;
        }

        if (!teamLeaderName.trim()) {
            seterror("Team Leader Name is required!");
            return false;
        }

        if (!personalEmailTeamLeader.trim()) {
            seterror("Personal Email is required!");
            return false;
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(personalEmailTeamLeader)) {
                seterror("Invalid Email format");
                return false;
            }
        }

        if (!teamLeaderContactNumber.trim()) {
            seterror("Whatsapp Contact Number is required!");
            return false;
        } else {
            const phoneRegex = /^\d{10}$/;
            if (!phoneRegex.test(teamLeaderContactNumber)) {
                seterror("Invalid Contact Number format");
                return false;
            }
        }

        if (!teamLeaderCollege.trim()) {
            seterror("College Name is required!");
            return false;
        }

        if (!teamLeaderCollegeIdCardLink.trim()) {
            seterror("Drive Link of Id card is required!");
            return false;
        }

        if (!teamLeaderYear) {
            seterror("Team Leader Year is required!");
            return false;
        }

        if (!member1Name.trim()) {
            seterror("Member 1 name is required!");
            return false;
        }

        if (!member1Email.trim()) {
            seterror("Member 1 email is required!");
            return false;
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(member1Email)) {
                seterror("Invalid Member 1 email format");
                return false;
            }
        }

        if (member1Email === personalEmailTeamLeader) {
            seterror("Member 1 Email is Same Email As Team Leader");
            return false;
        }

        if (!member1ContactNumber.trim()) {
            seterror("Member 1 WhatsApp contact number is required!");
            return false;
        } else {
            const phoneRegex = /^\d{10}$/;
            if (!phoneRegex.test(member1ContactNumber)) {
                seterror("Invalid Member 1 WhatsApp contact number format");
                return false;
            }
        }

        if (!member1College.trim()) {
            seterror("Member 1 college name is required!");
            return false;
        }

        if (!member1CollegeIdCardLink.trim()) {
            seterror("Member 1 drive link of ID card is required!");
            return false;
        }

        if (!member1Year) {
            seterror("Member 1 year is required!");
            return false;
        }

        if (member2Email.trim()) {

            if (member2Email === personalEmailTeamLeader) {
                seterror("Member 2 Email is Same Email As Team Leader");
                return false;
            } else if (member2Email === member1Email) {
                seterror("Member 2 Email is Same Email As Member 1");
                return false;
            }
        }

        if (member3Email.trim() > 0) {

            console.log(member2Email);
            if (member3Email === personalEmailTeamLeader) {
                seterror("Member 3 Email is Same Email As Team Leader");
                return false;
            } else if (member3Email === member1Email) {
                seterror("Member 3 Email is Same Email As Member 1");
                return false;
            } else if (member3Email === member2Email) {
                seterror("Member 3 Email is Same Email As Member 2");
                return false;
            }
        }

        return true;
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const suffix = ['st', 'nd', 'rd', 'th', 'th(Integrated)'];

    const validationErrorsExist = () => {
        return (
            passwordErrorMember1 ||
            passwordErrorMember2 ||
            passwordErrorMember3
        );
    }

    const collectData = async (e) => {
        e.preventDefault();

        if (validationErrorsExist() || !validation()) {
            console.log('Form validation failed');
            return;
        } else {

            try {
                let result = await fetch('https://osdhack-23.onrender.com/', {
                    method: 'post',
                    body: JSON.stringify({ teamName, teamLeaderName, personalEmailTeamLeader, teamLeaderContactNumber, teamLeaderCollege, teamLeaderYear, teamLeaderCollegeIdCardLink, member1Name, member1Email, member1ContactNumber, member1College, member1Year, member1CollegeIdCardLink, member2Name, member2Email, member2ContactNumber, member2College, member2Year, member2CollegeIdCardLink, member3Name, member3Email, member3ContactNumber, member3College, member3Year, member3CollegeIdCardLink }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                const resultData = await result.json();
                console.log(resultData);

                setteamName("");
                setteamLeaderName("");
                setpersonalEmailTeamLeader("");
                setteamLeaderContactNumber("");
                setteamLeaderCollege("");
                setteamLeaderYear("");
                setteamLeaderCollegeIdCardLink("");
                setmember1Name("");
                setmember1Email("");
                setmember1ContactNumber("");
                setmember1College("");
                setmember1Year("");
                setmember1CollegeIdCardLink("");
                setmember2Name("");
                setmember2Email("");
                setmember2ContactNumber("");
                setmember2College("");
                setmember2Year("");
                setmember2CollegeIdCardLink("");
                setmember3Name("");
                setmember3Email("");
                setmember3ContactNumber("");
                setmember3College("");
                setmember3Year("");
                setmember3CollegeIdCardLink("");
                seterror("");

                setSuccessMessage("Form Submitted Successfully!");

            } catch (error) {
                console.error('Error submitting data:', error);
            };
        }
    }

    const handlechange1 = (e) => {
        setmember1Email(e.target.value);

        if (e.target.value === personalEmailTeamLeader) {
            setpasswordErrorMember1("Member 1 Email is Same Email As Team Leader");
        } else {
            setpasswordErrorMember1("");
        }
    }

    const handlechange2 = (e) => {
        setmember2Email(e.target.value);

        if (e.target.value === personalEmailTeamLeader || e.target.value === member1Email) {
            setpasswordErrorMember2("Member 2 Email is Same Email Another Team Member");
        } else {
            setpasswordErrorMember2("");
        }
    }

    const handlechange3 = (e) => {
        setmember3Email(e.target.value);

        if (e.target.value === personalEmailTeamLeader || e.target.value === member1Email || e.target.value === member2Email) {
            setpasswordErrorMember3("Member 3 Email is Same Email Another Team Member");
        } else {
            setpasswordErrorMember3("");
        }
    }
    return (
        <>
            {
                SuccessMessage ? (
                    <div className='successmessage'>{SuccessMessage}</div>
                ) : (
                    <form onSubmit={collectData} className='registrationform'>
                        <div className="leaderdetail">
                            {error && <div className='errormessage'>{error}</div>}
                            {passwordErrorMember1 && <div className='errormessage'>{passwordErrorMember1}</div>}
                            {passwordErrorMember2 && <div className='errormessage'>{passwordErrorMember2}</div>}
                            {passwordErrorMember3 && <div className='errormessage'>{passwordErrorMember3}</div>}

                            <div className='memberheading'>TEAM LEADER DETAILS</div>
                            <div className="form-group">
                                <label htmlFor="teamName">Team Name <IoMdStar className='compulsoryIcon' /></label>
                                <input type="text" className="form-control" id="teamName" placeholder="Enter Team Name:"
                                    value={teamName}
                                    onChange={(e) => {
                                        setteamName(e.target.value);
                                    }} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="teamLeaderName">Team Leader Name:<IoMdStar className='compulsoryIcon' /></label>
                                <input type="text" className="form-control" id="teamLeaderName" placeholder="Enter Team Leader Name"
                                    value={teamLeaderName}
                                    onChange={(e) => setteamLeaderName(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="personalEmailTeamLeader">Personal Email:<IoMdStar className='compulsoryIcon' /></label>
                                <input type="email" className="form-control" id="personalEmailTeamLeader" placeholder="Enter Team Leader Mail:"
                                    value={personalEmailTeamLeader}
                                    onChange={(e) => setpersonalEmailTeamLeader(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="teamLeaderContactNumber">Whatsapp Contact No.:<IoMdStar className='compulsoryIcon' /></label>
                                <input type="text" className="form-control" id="teamLeaderContactNumber" placeholder="Enter Team Leader Whatsapp No.:"
                                    value={teamLeaderContactNumber}
                                    onChange={(e) => setteamLeaderContactNumber(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="teamLeaderCollege">College Name:<IoMdStar className='compulsoryIcon' /></label>
                                <input type="text" className="form-control" id="teamLeaderCollege" placeholder="Enter College Name:"
                                    value={teamLeaderCollege}
                                    onChange={(e) => setteamLeaderCollege(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="teamLeaderCollegeIdCardLink">Drive Link Of Id card:<IoMdStar className='compulsoryIcon' /></label>
                                <input type="text" className="form-control" id="teamLeaderCollegeIdCardLink" placeholder="Drive Link Of Id card:"
                                    value={teamLeaderCollegeIdCardLink}
                                    onChange={(e) => setteamLeaderCollegeIdCardLink(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label>Year:<IoMdStar className='compulsoryIcon' /></label>
                                {
                                    [1, 2, 3, 4, 5].map((item, index) => (
                                        <div className='year' key={index}>
                                            <input type="radio" className="form-control" id={`teamLeaderYear${item}`} placeholder="Enter Year:"
                                                name='teamLeaderYear'
                                                value={item}
                                                onChange={(e) => setteamLeaderYear(e.target.value)} />
                                            <label htmlFor={`teamLeaderYear${item}`}>{`${item}${suffix[index]}`}</label>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="member1">
                            <div className='memberheading'>MEMBER 1 DETAILS</div>
                            <div className="form-group">
                                <label htmlFor="member1Name">Member 1 Name:<IoMdStar className='compulsoryIcon' /></label>
                                <input type="text" className="form-control" id="member1Name" placeholder="Enter Member 1 Name"
                                    value={member1Name}
                                    onChange={(e) => setmember1Name(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="member1Email">Personal Email:<IoMdStar className='compulsoryIcon' /></label>
                                <input type="email" className="form-control" id="member1Email" placeholder="Enter Member 1 Mail:"
                                    value={member1Email}
                                    onChange={handlechange1} />
                                {passwordErrorMember1 && <div className='errormessage'>{passwordErrorMember1}</div>}

                            </div>

                            <div className="form-group">
                                <label htmlFor="member1ContactNumber">Whatsapp Contact No.:<IoMdStar className='compulsoryIcon' /></label>
                                <input type="text" className="form-control" id="member1ContactNumber" placeholder="Enter Member 1 Whatsapp No.:"
                                    value={member1ContactNumber}
                                    onChange={(e) => setmember1ContactNumber(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="member1College">College Name:<IoMdStar className='compulsoryIcon' /></label>
                                <input type="text" className="form-control" id="member1College" placeholder="Enter College Name:"
                                    value={member1College}
                                    onChange={(e) => setmember1College(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="member1CollegeIdCardLink">Drive Link Of Id card:<IoMdStar className='compulsoryIcon' /></label>
                                <input type="text" className="form-control" id="member1CollegeIdCardLink" placeholder="Drive Link Of Id card:"
                                    value={member1CollegeIdCardLink}
                                    onChange={(e) => setmember1CollegeIdCardLink(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label>Year:<IoMdStar className='compulsoryIcon' /></label>
                                {
                                    [1, 2, 3, 4, 5].map((item, index) => (
                                        <div className="year" key={index}>
                                            <input type="radio" className="form-control" id={`member1Year${item}`} placeholder="Enter Year:"
                                                name='member1Year'
                                                value={`${item}`}
                                                onChange={(e) => setmember1Year(e.target.value)} />
                                            <label htmlFor={`member1Year${item}`}>{`${item}${suffix[index]}`}</label>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="member2">
                            <div className='memberheading'>MEMBER 2 DETAILS</div>
                            <div className="form-group">
                                <label htmlFor="member2Name">Member 2 Name:</label>
                                <input type="text" className="form-control" id="member2Name" placeholder="Enter Member 2 Name"
                                    value={member2Name}
                                    onChange={(e) => setmember2Name(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="member2Email">Personal Email:</label>
                                <input type="email" className="form-control" id="member2Email" placeholder="Enter Member 2 Mail:"
                                    value={member2Email}
                                    onChange={handlechange2} />
                                {passwordErrorMember2 && <div className='errormessage'>{passwordErrorMember2}</div>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="member2ContactNumber">Whatsapp Contact No.:</label>
                                <input type="text" className="form-control" id="member2ContactNumber" placeholder="Enter Member 2 Whatsapp No.:"
                                    value={member2ContactNumber}
                                    onChange={(e) => setmember2ContactNumber(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="member2College">College Name:</label>
                                <input type="text" className="form-control" id="member2College" placeholder="Enter College Name:"
                                    value={member2College}
                                    onChange={(e) => setmember2College(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="member2CollegeIdCardLink">Drive Link Of Id card:</label>
                                <input type="text" className="form-control" id="member2CollegeIdCardLink" placeholder="Drive Link Of Id card:"
                                    value={member2CollegeIdCardLink}
                                    onChange={(e) => setmember2CollegeIdCardLink(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label>Year:</label>
                                {
                                    [1, 2, 3, 4, 5].map((item, index) => (
                                        <div className="year" key={index}>
                                            <input type="radio" className="form-control" id={`member2Year${item}`} placeholder="Enter Year:"
                                                name='member2Year'
                                                value={`${item}`}
                                                onChange={(e) => setmember2Year(e.target.value)} />
                                            <label htmlFor={`member2Year${item}`}>{`${item}${suffix[index]}`}</label>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="member3">
                            <div className='memberheading'>MEMBER 3 DETAILS</div>
                            <div className="form-group">
                                <label htmlFor="member3Name">Member 3 Name:</label>
                                <input type="text" className="form-control" id="member3Name" placeholder="Enter Member 3 Name"
                                    value={member3Name}
                                    onChange={(e) => setmember3Name(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="member3Email">Personal Email:</label>
                                <input type="email" className="form-control" id="member3Email" placeholder="Enter Member 3 Mail:"
                                    value={member3Email}
                                    onChange={handlechange3} />
                                {passwordErrorMember3 && <div className='errormessage'>{passwordErrorMember3}</div>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="member3ContactNumber">Whatsapp Contact No.:</label>
                                <input type="text" className="form-control" id="member3ContactNumber" placeholder="Enter Member 3 Whatsapp No.:"
                                    value={member3ContactNumber}
                                    onChange={(e) => setmember3ContactNumber(e.target.value)} />
                            </div>

                            <div className="form-group">
                                <label htmlFor="member3College">College Name:</label>
                                <input type="text" className="form-control" id="member3College" placeholder="Enter College Name:"
                                    value={member3College}
                                    onChange={(e) => setmember3College(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="member3CollegeIdCardLink">Drive Link Of Id card:</label>
                                <input type="text" className="form-control" id="member3CollegeIdCardLink" placeholder="Drive Link Of Id card:"
                                    value={member3CollegeIdCardLink}
                                    onChange={(e) => setmember3CollegeIdCardLink(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label>Year:</label>
                                {
                                    [1, 2, 3, 4, 5].map((item, index) => (
                                        <div className='year' key={index}>
                                            <input type="radio" className="form-control" id={`member3Year${index + 1}`} placeholder="Enter Year:"
                                                name='member3Year'
                                                value={`${index + 1}`}
                                                onChange={(e) => setmember3Year(e.target.value)} />
                                            <label htmlFor={`member3Year${index + 1}`}>{`${item}${suffix[index]}`}</label>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="submit" onClick={scrollToTop}>
                            <button type="submit" className="submitbutton">Submit</button>
                        </div>
                    </form>
                )
            }
        </>
    )
}

export default Register;