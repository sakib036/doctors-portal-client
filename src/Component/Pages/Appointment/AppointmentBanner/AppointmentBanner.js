
import chair from '../../../../assets/images/chair.png';
import bgChair from '../../../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';




const AppointmentBanner = ({selectDate, setSelectDate}) => {
   
    return (
        <div>
            <div className="hero  " style={{ background: `url(${bgChair})` }}>
            <div className="hero-content flex-col sm:flex-row-reverse">
                <img src={chair} alt="" className="w-full sm:w-1/2 rounded-lg shadow-2xl" />
                <div >
                    <DayPicker
                        mode='single'
                        selected={selectDate}
                        onSelect={setSelectDate}

                    />
                </div>

            </div>
            
        </div>
       
        </div>
    );
};

export default AppointmentBanner;