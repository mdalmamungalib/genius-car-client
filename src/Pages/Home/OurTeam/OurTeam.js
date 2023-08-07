import React, { useEffect, useState } from 'react';
import OurTeamCard from './OurTeamCard';

const OurTeam = () => {
    const [teamCard, setTeamCard] = useState([]);
    useEffect(() => {
        fetch("Team.json")
        .then(result => result.json())
        .then(data => setTeamCard(data))
    },[])
    return (
        <div>
            <div className='text-center my-20'>
                <p className='text-2xl text-orange-600 my-5 font-bold'>Team</p>
                <h2 className='text-5xl font-bold '>Meet Our Team</h2>
                <p className='text-slate-500 my-5'>Auto Trade International Limited is a well-established multi-brand automobile service center <br /> that has built a reputation for providing exceptional service.</p>
            </div>
            <div className='grid gap-6 my-6 justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    teamCard.map(team => <OurTeamCard
                        key={team.id}
                        team={team}
                    ></OurTeamCard>)
                }
            </div>
        </div>
    );
};

export default OurTeam;