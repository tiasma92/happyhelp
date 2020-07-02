export default function(token = "", action) {

    if(action.type == 'connect') {
         console.log('Dans mon reducer --->',action.token)
         return action.token;
    } else if (action.type == "deleteConnect") {
        action.token = ""
        console.log('Well Deconnected',action.token)
        return action.token;
    } else {
        return token
    }
  }