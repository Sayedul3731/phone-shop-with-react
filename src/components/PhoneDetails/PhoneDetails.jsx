import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneDetailsCard from "../PhoneDetailsCard/PhoneDetailsCard";


const PhoneDetails = () => {

    const [phone, setPhone] = useState({})

    const {id} = useParams()

    const phones = useLoaderData()

    useEffect( () => {
        const findPhone = phones.find( phone => phone.id === id)
        setPhone(findPhone)
    },[id, phones])
    return (
        <div>
            {
                <PhoneDetailsCard phone={phone}></PhoneDetailsCard>
            }
        </div>
    );
};

export default PhoneDetails;