cdar=false;
numbgrr=Infinity;
intid="";
(async () => {
    await $.getScript("https://cdn.jsdelivr.net/gh/parseml/many-deobf@latest/deobf.js");
apid4=Deobfuscator.keyBetween(ig.game[Deobfuscator.object(ig.game, "getFreshRank",true)].getFreshRank, "rank&&(ig.game.", "=b,ig.game."+Deobfuscator.object(ig.game, "rank", true));
apid=Deobfuscator.object(ig.game, "addForumThreadAndFirstComment_P", true);
apid2=Deobfuscator.function(ig.game[apid], "/j/u/p/", true);
apid3=Deobfuscator.object(ig.game, "getFreshRank", true);
intid=Deobfuscator.keyBetween(EntityInteract.prototype.tidyUp, "=this.", "&&\n");
ig.game.websocket[Deobfuscator.function(ig.game.websocket, "SPEECH,", true)]=function() {};
ig.game[apid][apid2]=function() {},ig.game[apid3].getFreshRank=function() {}
if (ig.game[apid][apid2].toString()=="function() {}"&&ig.game[apid3].getFreshRank.toString()=="function() {}") {
    ig.game[apid4]=10, ig.game[Deobfuscator.object(ig.game, "rank", true)].rank=ig.game[apid4], ig.game.isFullAccount=true
}
    speechstuff=Deobfuscator.object(ig.game, "abc", true);
    nlx=Deobfuscator.function(ig.game[speechstuff], "l;", true);
    speecharray=Deobfuscator.keyBetween(ig.game[speechstuff][Deobfuscator.function(ig.game[speechstuff], "_~", true)], "&this.", ".sh");
    shoutmotion=Deobfuscator.function(ig.game[speechstuff], "shout", true);
setInterval(()=>{
ig.game[players].betweenDefaultAndPlayer.forEach(b=>{if(numbgrr>ig.game.player[Deobfuscator.function(ig.game.player.__proto__, "b*b", true)](b)){numbgrr=ig.game.player[Deobfuscator.function(ig.game.player.__proto__, "b*b", true)](b); inted=b.thingTypeId}})
    textl="";
ig.game[speechstuff][speecharray].forEach(b=>{textl=b+textl});
    if(ig.input.pressed("enter")&&cdar==false){
    ig.game[players].betweenDefaultAndPlayer.forEach(b=>{if(b.thingTypeId==inted){ig.game.websocket.wssend(ig.game.websocket.ws, "nv", {eid:b[intid], text:"{"+textl+"}"});cdar=true;setTimeout(()=>{cdar=false}, 100)
}})
    }
}, 0)
})();
