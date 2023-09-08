import React from "react";
import Title from "./Title";
import Date from "./Date";
import Author from "./Author";
import Summary from "./Summery";

function Card({ title, author, date, summary }) {

    return (
        <div className="card">
            <Title title={title} />
            <Author author={author} />
            <Date date={date} />
            <Summary summary={summary} />
        </div>
    )

}

export default  Card;