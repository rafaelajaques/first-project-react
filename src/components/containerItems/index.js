import React from "react";
import { ContainerItems as Container2 } from "./style";

function ContainerItems({ children, isBlur }) {
    return (
        <Container2 isBlur={isBlur}>{children}</Container2>
    )
}

export default ContainerItems