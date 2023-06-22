self.onmessage = function(message)
{
    var message_data = `${message.data}`;

    if(message_data == "true"){
        console.log('Animation Start Requested.');
        self.postMessage('Animation Started.');
    } else {
        console.log('Animation Stop Requested.');
        self.postMessage('Animation Stopped.');
    }

}