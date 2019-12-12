export default function(id = {}, action) {

    if(action.type == 'connect') {
         console.log('Dans mon reducer --->',action.id)
         return action.id;
    } else {
        return id;
    }
  }