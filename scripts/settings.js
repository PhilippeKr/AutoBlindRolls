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
  game.settings.register("auto-blind-rolls", "hideSenseChaos", {
    name: "Hide Sende Chaos",
    scope: scope,
    config: true,
    default: false,
    type: Boolean
  });

}
