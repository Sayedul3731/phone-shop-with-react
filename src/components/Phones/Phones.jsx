import PropTypes from 'prop-types';
import Phone from '../Phone/Phone';

const Phones = ({ phones }) => {

    return (
        <div>
            <div className="py-10">
                <h1 className="text-3xl font-medium text-center ">All Categories Phones</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    phones?.map( phone => <Phone key={phone.id} phone={phone}></Phone>)
                }
            </div>
        </div>
    );
};

Phones.propTypes = {
    phones: PropTypes.array
}
export default Phones;