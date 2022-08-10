import React, { useState } from "react";
const DisplayVotes = ({ votes }) => {
    return (
        <p>
            Google: {votes.google} Baidu: {votes.baidu} Alibaba: {votes.alibaba}
        </p>
    );
};

const Button = ({ handler, text }) => {
    return <button onClick={handler}>{text}</button>;
};

const BestCompany = ({votes}) => {
    const votesArray = [];
    for (const value of Object.values(votes)) {
        votesArray.push(value);
    }
    const maxVote = Math.max(...votesArray);
    let bestCompany = "";
    for (const [key, value] of Object.entries(votes)) {
        if(value == maxVote) {
            bestCompany = key;
        }
    }
    return <h2>The BestCompany is {bestCompany}, it's vote is {maxVote}</h2>
}

export default function Vote() {
    const [votes, setVotes] = useState({
        google: 0,
        baidu: 0,
        alibaba: 0,
    });
    const voteGoogle = () => {
        setVotes({
            ...votes,
            google: votes.google + 1,
        });
    };
    const voteBaidu = () => {
        setVotes({
            ...votes,
            baidu: votes.baidu + 1,
        });
    };
    const voteAlibaba = () => {
        setVotes({
            ...votes,
            alibaba: votes.alibaba + 1,
        });
    };
    return (
        <>
            <h1>Vote Your Best Company</h1>
            <p>Google Baidu Alibaba</p>
            <DisplayVotes votes={votes}></DisplayVotes>
            <Button handler={voteGoogle} text='Google'></Button>
            <Button handler={voteBaidu} text='Baidu'></Button>
            <Button handler={voteAlibaba} text='Alibaba'></Button>
            <BestCompany votes={votes}></BestCompany>
        </>
    );
}
