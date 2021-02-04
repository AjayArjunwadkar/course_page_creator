

export function createUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
       var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
       return v.toString(16);
    });
 }
export async function fetchAPI(id) {
    try {
        const response = await fetch( process.env.API_URL +id, {
            method: 'GET',
            credentials: 'same-origin'
        });
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}

export  function mail_send(senderAddress, Message, Name, Phone){
    
}
