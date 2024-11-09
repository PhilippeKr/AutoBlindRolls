// CONFIG.debug.hooks = true
import { registerMainSettings } from "./scripts/settings.js";
import { registerSettingsPf2e, startPf2e } from "./scripts/settingsPf2e.js";
import { registerSettingsDnd5e, startDnd5e } from "./scripts/settingsDnd5e.js";
import { registerSettingsCyberpunkRedCore, startCyberpunkRedCore } from "./scripts/settingsCyberpunkRedCore.js";

// Handle-socket
Hooks.on('ready', () => {
  registerMainSettings();
  console.log("Registering...")
  let scope = "world"
  if(game.settings.get("tsamys-secret-rolls", "makeClientSide")){
    scope = "client"
  }
  if(game.system.id ==="pf2e"){
      registerSettingsPf2e(scope);
      startPf2e();
  }
  if(game.system.id === "dnd5e"){
      registerSettingsDnd5e(scope);
      startDnd5e()
  }
  if(game.system.id === "cyberpunk-red-core"){
    registerSettingsCyberpunkRedCore(scope);
    startCyberpunkRedCore();
  }

  game.socket.on('module.tsamys-secret-rolls', async (data) => {
      if (game.user.isGM && data) showResults(data);
    });
  })
