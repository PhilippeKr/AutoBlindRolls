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
      if(game.settings.get("auto-blind-rolls", "hideSenseChaos") && rawMessage.flavor.includes("Sense Chaos")){rawMessage.applyRollMode("blindroll");}
    }
}
}
