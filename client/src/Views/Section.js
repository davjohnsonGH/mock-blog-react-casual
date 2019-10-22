import React from 'react';
import { useParams} from "react-router";

const Section = (props) => {
    const { id } = useParams();
    const sectionName = props.menuOptions.length > 0 && props.menuOptions.filter( (section) => section.id === id )[0].name
    return (
        <h1>{ sectionName }</h1>
    )
}
export default Section;