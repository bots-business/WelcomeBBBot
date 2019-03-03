/*CMD
  command: good morning
  help: 
  need_reply: 
  auto_retry_time: 3000
  answer: 
  keyboard: 
  aliases: 
CMD*/

// can be runned with Auto Retry only!
if(chat){ return }

let time = new Date()
let hours = time.getHours();
let minutes = time.getMinutes();

curTime = "Time: " + hours + ":" + minutes + " GMT-0";
msg = "";

if(hours==6){
  msg = "Good morning!\n" + curTime;
}

Bot.sendMessageToAllChats(msg);
