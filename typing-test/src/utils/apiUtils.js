const request = require('postman-request');

const options = {
    url: ''
};

var account = {
    account_id: -1,
    display_name: '',
    user_email: '',
    password: '',
    photo: -1
}

function getAccInfo(error, response, body) {

    if (!error && response.statusCode == 200) {
        const info = JSON.parse(body);
        console.log(info);

        if (info !== []) {
            console.log("STATUS: Login Success");
            
            account.account_id = info[0].account_id;
            account.display_name = info[0].display_name;
            account.user_email = info[0].user_email;
            account.password = info[0].password;
            account.photo = info[0].photo;
        }
    } else {
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('error:', error); // Print the error if one occurred
        account.account_id = -1;
    }
}

export function callLogin(username, password) {

    options.url = 'https://9x38qblue2.execute-api.us-east-1.amazonaws.com/dev/login?email='
        + username
        + '&pw=' + password;

    request(options, getAccInfo);

    console.log(account)

    return account;
}

export function callRegisterAccount(email, username, password) {

    // needs to be changed with register api link
    options.url = 'https://9x38qblue2.execute-api.us-east-1.amazonaws.com/dev/login?email='
        + username
        + '&pw=' + password;
    // ------------------------------------------

    request(options, getAccInfo);

    return account;
}