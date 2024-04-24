import { Input } from "@material-ui/core";
import React, { useState } from "react";
import PokemonsCard from "./PokemonsCard";




const SearchPokemonsUnoptimized = () => {

    const [text, setText] = useState("");

    const onChange = (e) =>{
        setText(e.target.value);
    }

    return(
        <>
            <Input onChange={onChange} value={text} />
            <PokemonsCard searchQuery={text} />
        </>
    )

}

export default SearchPokemonsUnoptimized;