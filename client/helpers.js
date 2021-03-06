/*global Chats*/
/*global users*/
Meteor.subscribe("Chats");
var emoji_icons = [
  {
    name:":bowtie:"
  },
  {
    name:":smile:"
  },
  {
    name:":blush:"
  },
  {
    name:":laughing:"
  },
  {
    name:":smiley:"
  },
  {
    name:":heart_eyes:"
  },
  {
    name:":grin:"
  },
  {
    name:":kissing_heart:"
  },
  {
    name:":flushed:"
  },
  {
    name:":relieved:"
  },
  {
    name:":worried:"
  },
  {
    name:":sweat:"
  },
  {
    name:":pensive:"
  }
];
  
  
Meteor.subscribe("users");
Template.chat_page.helpers({
    
    messages:function(){
      var chat = Chats.findOne({_id:Session.get("chatId")});
      return chat.messages;
    }, 
    
    other_user:function(){
      return "";
    }
});

Template.available_user_list.helpers({
    users:function(){
      return Meteor.users.find();
    }
});

Template.emojiList.helpers({
  emojis:function(){
    return emoji_icons;
  }
});

Template.available_user.helpers({
    getUsername:function(userId){
      var user = Meteor.users.findOne({_id:userId});
      return user.profile.username;
    }, 
    
    isMyUser:function(userId){
      if (userId == Meteor.userId()){
        return true;
      }
      else {
        return false;
      }
    }
});


Template.chat_message.helpers({
    isUser:function(userId){
      if (userId == Meteor.userId()){
        return true;
      }
      else {
        return false;
      }
    }
});




