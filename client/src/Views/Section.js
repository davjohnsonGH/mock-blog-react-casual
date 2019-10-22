import React from 'react';
import { useParams} from "react-router";

const Section = () => {
    let { id } = useParams();
    return (
        <div>{id}</div>
    )
}
export default Section;