import { CircularProgress, Input } from "@material-ui/core";
import React, { useState, useTransition } from "react";
import PokemonsCard from "./PokemonsCard";
import { makeStyles } from '@material-ui/styles';


const useStyle = makeStyles({
   
    text: {
        maxWidth: "70%"
    }
});



const SearchPokemonsUnoptimized = () => {

    // const [text, setText] = useState("");

    // const onChange = (e) =>{
    //     setText(e.target.value);
    // }

    // return(
    //     <>
    //         <Input onChange={onChange} value={text} />
    //         <PokemonsCard searchQuery={text} />
    //     </>
    // )

    // writhing the code more optimized way

    const [text, setText] = useState("");
    const [ searchQuery, setSearchQuery ] = useState("");
    const [ isPending, startTransition ] = useTransition();
    const classes = useStyle();

    const onChange = (e) => {
        setText(e.target.value);

        startTransition(() => {
          setSearchQuery(e.target.value);
        })
    };

    return (
        <>
            <Input onChange={onChange} value={text} />
            {isPending && <CircularProgress className={classes.spinner} /> }
            <PokemonsCard searchQuery={searchQuery} />
        </>
    );

}

export default SearchPokemonsUnoptimized;