export const registerSettingsPf2e = function(scope) {
  game.settings.register("tsamys-secret-rolls", "hideAcrobatics", {
    name: "Hide Acrobatics",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideArcana", {
    name: "Hide Arcana",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideAthletics", {
    name: "Hide Athletics",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideCrafting", {
    name: "Hide Crafting",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideDeception", {
    name: "Hide Deception",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideDiplomacy", {
    name: "Hide Diplomacy",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideIntimidation", {
    name: "Hide Intimidation",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideLore", {
    name: "Hide Lore",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideMedicine", {
    name: "Hide Medicine",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideNature", {
    name: "Hide Nature",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideOccultism", {
    name: "Hide Occultism",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hidePerception", {
    name: "Hide Perception",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hidePerformance", {
    name: "Hide Performance",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideReligion", {
    name: "Hide Religion",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideSociety", {
    name: "Hide Society",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideStealth", {
    name: "Hide Stealth",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideSurvival", {
    name: "Hide Survival",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideThievery", {
    name: "Hide Thievery",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideFortitude", {
    name: "Hide Fortitude Saves",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideReflex", {
    name: "Hide Reflex Saves",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideWill", {
    name: "Hide Will Saves",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });
}

export const startPf2e = function () {
  Hooks.on("preCreateChatMessage", async (rawMessage) => {
    if (rawMessage.flavor.includes("Skill Check")){
      if(game.settings.get("tsamys-secret-rolls", "hideAcrobatics") && rawMessage.flavor.includes("Acrobatics")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideArcana") && rawMessage.flavor.includes("Arcana")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideAthletics") && rawMessage.flavor.includes("Athletics")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideCrafting") && rawMessage.flavor.includes("Crafting")){ rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideDeception") && rawMessage.flavor.includes("Deception")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideDiplomacy") && rawMessage.flavor.includes("Diplomacy")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideIntimidation") && rawMessage.flavor.includes("Intimidation")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideLore") && rawMessage.flavor.includes("Lore")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideMedicine") && rawMessage.flavor.includes("Medicine")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideNature") && rawMessage.flavor.includes("Nature")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideOccultism") && rawMessage.flavor.includes("Occultism")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hidePerformance") && rawMessage.flavor.includes("Performance")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideReligion") && rawMessage.flavor.includes("Religion")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideSociety") && rawMessage.flavor.includes("Society")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideStealth") && rawMessage.flavor.includes("Stealth")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideSurvival") && rawMessage.flavor.includes("Survival")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideThievery") && rawMessage.flavor.includes("Thievery")){rawMessage.applyRollMode("blindroll");}
    }
    if (rawMessage.flavor.includes("Perception Check")){
      if(game.settings.get("tsamys-secret-rolls", "hidePerception") && rawMessage.flavor.includes("Perception")){rawMessage.applyRollMode("blindroll");}
	  }
    if (rawMessage.flavor.includes("Saving Throw")){
      if(game.settings.get("tsamys-secret-rolls", "hideFortitude") && rawMessage.flavor.includes("Fortitude")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideReflex") && rawMessage.flavor.includes("Reflex")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideWill") && rawMessage.flavor.includes("Will")){rawMessage.applyRollMode("blindroll");}
	  }
  })
}
