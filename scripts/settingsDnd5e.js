export const registerSettingsDnd5e = function (scope) {
  game.settings.register("tsamys-secret-rolls", "hideDeathSaves", {
    name: "Hide Death Saves",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideAcrobatics", {
    name: "Hide Acrobatics",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideAnimalHandling", {
    name: "Hide Animal Handling",
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


  game.settings.register("tsamys-secret-rolls", "hideDeception", {
    name: "Hide Deception",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideHistory", {
    name: "Hide History",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("tsamys-secret-rolls", "hideInsight", {
    name: "Hide Insight",
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

  game.settings.register("tsamys-secret-rolls", "hideInvestigation", {
    name: "Hide Investigation",
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

  game.settings.register("tsamys-secret-rolls", "hidePersuasion", {
    name: "Hide Persuasion",
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

  game.settings.register("tsamys-secret-rolls", "hideSleightofHand", {
    name: "Hide Sleight of Hand",
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


}


export const startDnd5e = function() {
  Hooks.on("preCreateChatMessage", async (rawMessage) => {
    if (rawMessage.flavor.includes("Skill Check")){
      if(game.settings.get("tsamys-secret-rolls", "hideAcrobatics") && rawMessage.flavor.includes("Acrobatics")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideAnimalHandling") && rawMessage.flavor.includes("Animal Handling")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideArcana") && rawMessage.flavor.includes("Arcana")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideAthletics") && rawMessage.flavor.includes("Athletics")){ rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideDeception") && rawMessage.flavor.includes("Deception")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideHistory") && rawMessage.flavor.includes("History")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideInsight") && rawMessage.flavor.includes("Insight")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideIntimidation") && rawMessage.flavor.includes("Intimidation")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideInvestigation") && rawMessage.flavor.includes("Investigation")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideMedicine") && rawMessage.flavor.includes("Medicine")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideNature") && rawMessage.flavor.includes("Nature")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hidePerception") && rawMessage.flavor.includes("Perception")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hidePerformance") && rawMessage.flavor.includes("Performance")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hidePersuasion") && rawMessage.flavor.includes("Persuasion")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideReligion") && rawMessage.flavor.includes("Religion")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideSleightofHand") && rawMessage.flavor.includes("Sleight of Hand")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideStealth") && rawMessage.flavor.includes("Stealth")){rawMessage.applyRollMode("blindroll");}
      if(game.settings.get("tsamys-secret-rolls", "hideSurvival") && rawMessage.flavor.includes("Survival")){rawMessage.applyRollMode("blindroll");}
    }
    if (rawMessage.flavor.includes("Death Saving Throw")){
      if(game.settings.get("tsamys-secret-rolls", "hideDeathSaves")){rawMessage.applyRollMode("blindroll");}
    }
  })
}
