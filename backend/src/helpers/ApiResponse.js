
function ApiSuccess(messages = [], result = null) {
    let messagesObject = [];
    messages.forEach(message => {
        messagesObject.push({
            message: message
        })
    });

    return {
        success: true,
        result: result,
        errors: [],
        message: messages
    }
}

function ApiError(errors = []) {
    let errorObject = [];
    errors.forEach(error => {
        errorObject.push({
            code: error[1],
            message: error[0]
        })
    })
    return {
        success: false,
        result: null,
        messages: [],
        errors: errorObject
    }
}

module.exports = {
    ApiSuccess,
    ApiError
}