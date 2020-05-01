export default function(id = "", action) {

    if(action.type == 'connect') {
         console.log('Dans mon reducer --->',action.id)
         console.log("aaaaaa", id)
         return action.id;
    } else if (action.type == "deleteConnect") {
        action.id = ""
        console.log('Well Deconnected',action.id)
        return action.id;
    } else {
        return id
    }
  }