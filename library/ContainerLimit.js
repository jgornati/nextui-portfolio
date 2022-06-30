import React from 'react';
import * as PropTypes from "prop-types";

export default function ContainerLimit(props) {
    return (
        <div style={{
            maxWidth: "1000px",
            margin: "0 auto",
            display: "block",
            width: "100%",
            ...props.style
        }} className={`container-limit ${props.className}`}>
            {props.children}
        </div>
    );
}

ContainerLimit.propTypes = {
    className: PropTypes.string
};