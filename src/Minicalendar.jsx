import { useState, useEffect } from 'react';

function Minicalendar() {
    const [date, setDate] = useState('');
    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');

    useEffect(() => {
        const today = new Date();
        const weeksDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        setDate((today.getDate() < 10 ? "0" : "") + today.getDate());
        setDay(weeksDays[today.getDay()]);
        setMonth(allMonths[today.getMonth()]);
        setYear(today.getFullYear());
    }, []);

    return (
        <div className="w-full h-screen bg-gradient-to-r from-[#1d0000] to-[#20205b] font-Poppins flex justify-center items-center">
            <div className='bg-[#ee5f38] overflow-hidden w-96 h-64 rounded-md flex items-center'>
                <div className='w-[50%] h-72 bg-white flex flex-col items-center justify-center'>
                    <p className='text-6xl font-medium'>{date}</p>
                    <p className='text-xl font-medium mt-2'>{day}</p>
                </div>
                <div className='text-center mx-auto'>
                    <p className='text-3xl text-white font-semibold mb-2'>{month}</p>
                    <p className='text-xl text-white font-semibold'>{year}</p>
                </div>

            </div>
        </div>
    );
}

export default Minicalendar;
