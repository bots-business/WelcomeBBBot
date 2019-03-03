/*CMD
  command: *
  help: 
  need_reply: 
  auto_retry_time: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

let new_members = request.new_chat_members;
let msg = "Hello, ";
let comma = "";

function getNameFor(member){
   let haveAnyNames = member.username&&member.first_name;
   if(!haveAnyNames){ return ""}

   return member.username ? ("@" + member.username) : member.first_name
}

if(new_members.length > 0){
   for(var i=0; i<new_members.length; i++){
      msg = msg + comma + getNameFor(new_members[i])
      comma = ", ";
   }
   Bot.sendMessage(msg);
}

if(request.left_chat_member){
  Bot.sendMessage(
    "Goodbye, " + getNameFor(request.left_chat_member)
  );
}


