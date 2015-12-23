// methods for insertion
/*global Chats*/
Meteor.methods({
    insert_chat:function(chat,id){
        if (true){
             Chats.update(chat._id, chat);
        }
        else{
            console.log("You are not authorized!!")
        }
    }
});

Chats.allow({
    insert:function(chat){
        if(chat.user1Id == this.userId || chat.user2Id == this.userId){
            return true;
        }
        else{
            return false;
        }
    }
})