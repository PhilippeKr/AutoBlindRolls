export const registerMainSettings = function() {
  game.settings.register("auto-blind-rolls", "makeClientSide", {
    name: "Make Client Side",
    hint: "Turning this on will change the options from being global to client specific, if clients cant see the new menu simply get them to refresh",
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
    onChange: foundry.utils.debouncedReload
  });
}

export const registerSettingsRQG = function(scope) {
  game.settings.register("auto-blind-rolls", "hideDisguise", {
    name: "Hide Disguise",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("auto-blind-rolls", "hideIntrigue", {
    name: "Hide Intrigue",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });


  
  game.settings.register("auto-blind-rolls", "hideEvaluate", {
    name: "Hide Evaluate",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });


  
  game.settings.register("auto-blind-rolls", "hideSenseChaos", {
    name: "Hide Sense Chaos",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("auto-blind-rolls", "hideSenseAssassin", {
    name: "Hide Sense Assassin",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });


  
  game.settings.register("auto-blind-rolls", "hideInsight", {
    name: "Hide Insight",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("auto-blind-rolls", "hideListen", {
    name: "Hide Listen",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("auto-blind-rolls", "hideScan", {
    name: "Hide Scan",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("auto-blind-rolls", "hideSearch", {
    name: "Hide Search",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("auto-blind-rolls", "hideTrack", {
    name: "Hide Track",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });


  
  game.settings.register("auto-blind-rolls", "hideHide", {
    name: "Hide Hide",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

  game.settings.register("auto-blind-rolls", "hideMoveQuietly", {
    name: "Hide Move Quietly",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

}
