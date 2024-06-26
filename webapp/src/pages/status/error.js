import { useState } from "react";
import { useLocation } from "react-router-dom";

const Error = ({data}) => {
    const location = useLocation();
    const error = location.state;

    useState(() =>{
        document.title = `Error | ${process.env.REACT_APP_NAME}`;
    });

    return(
        <div className='grid md:grid-cols-4 place-content-center grid-cols-1 p-3 h-screen bg-green-100'>
            <div></div>
            <div className='md:col-span-2 flex flex-col text-green-900 gap-2 items-center '>
                <p className=" text-[10rem] font-bold" id="code">{data?.code ? data.code : error.code}</p>
                <div className='text-center'>
                    <h2 id="status">{data?.status ? data.status : location.state.status}</h2>
                    <h3 className='font-normal' id="message">{data?.message ? data.message : error.message}</h3>
                </div>
            </div>
            <div></div>
        </div>
    );
}

export default Error;