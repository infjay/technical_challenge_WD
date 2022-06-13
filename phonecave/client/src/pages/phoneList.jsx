import { NavLink } from 'react-router-dom';

function PhoneList(props) {
    const renderPhones = () => {
        const result = props?.phones?.map(phone => {
            return (
                <section>
                    <p> name: {phone?.name}</p>
                    <p>manufacturer: {phone?.manufacturer}</p>
                    <p>description: {phone?.description}</p>
                    <p>color: {phone?.color}</p>
                    <p>price: {phone?.price}</p>
                    <p>image: {phone?.image}</p>
                    <p>screen size: {phone?.screen}</p>
                    <p>processor: {phone?.processor} </p>
                    <p>ram: {phone?.ram}</p>
                </section>

            )
        })
        return result;
    }
    return (
        <div>
            <h1> Our Phones</h1>

            <section>
                {props.phones === null ? <p>Loading</p> : renderPhones()}
            </section>
        </div>
    )
}

export default PhoneList;