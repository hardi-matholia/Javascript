function getShortMessages(messages)
{
return messages.filter(element => element.message.length < 50).map(function(element) {return element.message
});
}
module.exports = getShortMessages;