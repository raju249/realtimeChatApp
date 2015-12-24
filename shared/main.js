// methods for insertion
/*global Chats*/
Meteor.methods({
    insert_chat:function(chat,id){
        if (chat._id == null){
            return false;
        }
        else{
            Chats.update(chat._id, chat);
        }
    }
});

Chats.allow({
    insert:function(chat){
        if((chat.user1Id == this.userId || chat.user2Id == this.userI) && chat._id != undefined){
            return true;
        }
        else{
            return false;
        }
    }
})

