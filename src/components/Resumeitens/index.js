import React from "react";
import * as C from "./styles";

const ResumeItem = ([title, Icon, value]) => {
    return (
        <C.Container>
            <C.Header>
                <C.HeaderTitle>{teste}</C.HeaderTitle>
                <Icon />
            </C.Header>
            <C.Total>{value}</C.Total>
        </C.Container>

    );
};

export default ResumeItem;