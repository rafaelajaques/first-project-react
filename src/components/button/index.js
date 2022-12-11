import React from "react";
import { Button as ContButton } from './style'

function Button({ children, ...props }) {
    return <ContButton {...props}>{children}</ContButton>
}

export default Button