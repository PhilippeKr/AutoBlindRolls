//CONFIG.debug.hooks = true
import { registerMainSettings, registerSettingsRQG } from "./scripts/settings.js";
// Handle-socket

Hooks.on('ready', () => {
  registerMainSettings();
  console.log("Registering...")
  let scope = "world"
  if(game.settings.get("auto-blind-rolls", "makeClientSide")){
    scope = "client"
  }
  if(game.system.id ==="rqg"){
      registerSettingsRQG(scope);
      startRQG();
  }

  game.socket.on('module.auto-blind-rolls', async (data) => {
      if (game.user.isGM && data) showResults(data);
    });
  })

function startRQG(){
  Hooks.on("preCreateChatMessage", async (rawMessage) => {
    if (rawMessage.flavor.includes("Check")){
      if(game.settings.get("auto-blind-rolls", "hideDisguise") && rawMessage.flavor.includes("Disguise")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("auto-blind-rolls", "hideIntrigue") && rawMessage.flavor.includes("Intrigue")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("auto-blind-rolls", "hideEvaluate") && rawMessage.flavor.includes("Evaluate")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("auto-blind-rolls", "hideSenseAssassin") && rawMessage.flavor.includes("Sense Assassin")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("auto-blind-rolls", "hideSenseChaos") && rawMessage.flavor.includes("Sense Chaos")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("auto-blind-rolls", "hideConceal") && rawMessage.flavor.includes("Conceal")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("auto-blind-rolls", "hideInsight") && rawMessage.flavor.includes("Insight")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("auto-blind-rolls", "hideListen") && rawMessage.flavor.includes("Listen")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("auto-blind-rolls", "hideScan") && rawMessage.flavor.includes("Scan")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("auto-blind-rolls", "hideSearch") && rawMessage.flavor.includes("Search")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("auto-blind-rolls", "hideTrack") && rawMessage.flavor.includes("Track")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("auto-blind-rolls", "hideHide") && rawMessage.flavor.includes("Hide")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("auto-blind-rolls", "hideMoveQuietly") && rawMessage.flavor.includes("Move Quietly")){rawMessage.applyRollMode("blindroll");}
    }
})
}
