import React from 'react'
import '../stylesheets/Account.css'
import SingleStatDisplay from './SingleStatDisplay'
import StatKeyboard from './StatKeyboard'

const Account = ({ accountInfo }) => {

    const sortObject = obj => {
        const sortingArr = Object.keys(obj).map(el => {
            return obj[el];
        });

        var result = [];

        for (var i in obj)
            result.push([i, obj[i]]);

        console.log(sortingArr, result);

        result.sort(sorter);

        return result;
    };

    console.log(sortObject(JSON.parse(accountInfo.letter_misses)));

    return (
        <div>
            <div className="acc-id">
                Account Statistics
            </div>
            <div className="stat-container">

                <div className="stats-wing" >
                    <SingleStatDisplay title="Top WPM" data={accountInfo.top_wpm == null ? 0 : accountInfo.top_wpm} />
                    <SingleStatDisplay title="Avg WPM" data={accountInfo.avg_wpm == null ? 0 : accountInfo.avg_wpm} />
                </div>
                <StatKeyboard accountInfo={accountInfo} />
                <div className="stats-wing">
                    <SingleStatDisplay title="Most Missed" data="" />
                    <SingleStatDisplay title="Least Missed" data="Q" />
                </div>
            </div>
        </div>
    )
}

export default Account
