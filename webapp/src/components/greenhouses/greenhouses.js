import React from 'react';

import { UserContext } from '../../context/userContext';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import GreenhouseCard from './greenhouseCard';

import { getGreenhouses } from '../../services/greenhouses'

const Greenhouses = () => {
    const { user } = React.useContext(UserContext);
    const [greenhouses, setGreenhouses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const email = user.email;
        if (!email) return;
        document.title = `Home | ${process.env.REACT_APP_NAME}`;

        getGreenhouses(user.email)
            .then(res => {
                setGreenhouses(res.data);
            })
            .catch(err => {
                if (err.response.status === 404) {
                    navigate('/createGreenhouse', { state: { first: true } });
                }
            });
    }, [user.email, navigate]);

    return (
        <div className='md:col-span-2 grid md:grid-cols-2 2xl:grid-cols-3 gap-2' id='greenhouses'>
            {greenhouses.map((greenhouse, index) => {
                return (
                    <Link to='/greenhouse' state={greenhouse} key={index}>
                        <GreenhouseCard id={greenhouse.greenhouse_id} />
                    </Link>
                );
            })}
        </div>
    );

}

export default Greenhouses;