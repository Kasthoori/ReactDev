import { Input } from "@material-ui/core";
import React, { useState } from "react";




const SearchPokemonsUnoptimized = () => {

    const [text, setText] = useState("Text");

    const onChange = (e) =>{
        setText(e.target.value);
    }

    return(
        <>
            <Input onChange={onChange} value={text} />
        </>
    )

}

export default SearchPokemonsUnoptimized;