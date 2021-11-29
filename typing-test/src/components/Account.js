import React from 'react'
import '../stylesheets/Account.css'
import SingleStatDisplay from './SingleStatDisplay'
import StatKeyboard from './StatKeyboard'

const Account = ({ accountInfo }) => {

    // const sortObject = obj => {
    //     const sortingArr = Object.keys(obj).map(el => {
    //         return obj[el];
    //     });

    //     var result = [];

    //     for (var i in obj)
    //         result.push([i, obj[i]]);

    //     console.log(sortingArr, result);

    //     result.sort(sorter);

    //     return result;
    // };

    // const sortObject = obj => {

    //     var result = {};
    //     // for (var i in obj)
    //     //     result.push([i, obj[i]]);
    //     Object.keys(obj).sort().forEach(a=>result[a]=obj[a])
    //     console.log(result);
    //     return result;
    // };

    var jObj = JSON.parse(accountInfo.letter_misses);
    console.log(Object.entries(jObj).sort((a,b) => b[1]-a[1]));

    var sortedMisses = Object.entries(jObj).sort((a,b) => b[1]-a[1]);

    return (
        <div>
            <div className="acc-id">
                Account Statistics
            </div>
            <div className="stat-container">

                <div className="stats-wing" >
                    <SingleStatDisplay title="Top WPM" data={accountInfo.top_wpm == null ? 0 : accountInfo.top_wpm.toFixed(2)} />
                    <SingleStatDisplay title="Avg WPM" data={accountInfo.avg_wpm == null ? 0 : accountInfo.avg_wpm.toFixed(2)} />
                </div>
                <StatKeyboard letter_misses={accountInfo.letter_misses} />
                <div className="stats-wing">
                    <SingleStatDisplay title="Most Missed" data={sortedMisses[0][0].toUpperCase()} />
                    <SingleStatDisplay title="Least Missed" data={sortedMisses[25][0].toUpperCase()} />
                </div>
            </div>
        </div>
    )
}

export default Account
