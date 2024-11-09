export const registerMainSettings = function() {
  game.settings.register("tsamys-secret-rolls", "makeClientSide", {
    name: "Make Client Side",
    hint: "Turning this on will change the options from being global to client specific, if clients cant see the new menu simply get them to refresh",
    scope: "world",
    config: true,
    default: false,
    type: Boolean,
    onChange: foundry.utils.debouncedReload
  });
}
