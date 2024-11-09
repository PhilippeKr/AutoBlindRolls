const skills = [
  {id: 'Accounting', name: 'Accounting'},
  {id: 'Acting', name: 'Acting'},
  {id: 'AirVehicleTech', name: 'Air Vehicle Tech'},
  {id: 'AnimalHandling', name: 'Animal Handling'},
  {id: 'Archery', name: 'Archery'},
  {id: 'Athletics', name: 'Athletics'},
  {id: 'Autofire', name: 'Autofire'},
  {id: 'BasicTech', name: 'Basic Tech'},
  {id: 'Brawling', name: 'Brawling'},
  {id: 'Bribery', name: 'Bribery'},
  {id: 'Bureaucracy', name: 'Bureaucracy'},
  {id: 'Business', name: 'Business'},
  {id: 'Composition', name: 'Composition'},
  {id: 'ConcealRevealObject', name: 'Conceal/Reveal Object'},
  {id: 'Concentration', name: 'Concentration'},
  {id: 'Contortionist', name: 'Contortionist'},
  {id: 'Conversation', name: 'Conversation'},
  {id: 'Criminology', name: 'Criminology'},
  {id: 'Cryptography', name: 'Cryptography'},
  {id: 'Cybertech', name: 'Cybertech'},
  {id: 'Dance', name: 'Dance'},
  {id: 'Deduction', name: 'Deduction'},
  {id: 'Demolitions', name: 'Demolitions'},
  {id: 'DriveLandVehicle', name: 'Drive Land Vehicle'},
  {id: 'Education', name: 'Education'},
  {id: 'ElectronicsSecurityTech', name: 'Electronics/Security Tech'},
  {id: 'Endurance', name: 'Endurance'},
  {id: 'Evasion', name: 'Evasion'},
  {id: 'FirstAid', name: 'First Aid'},
  {id: 'Forgery', name: 'Forgery'},
  {id: 'Gamble', name: 'Gamble'},
  {id: 'Handgun', name: 'Handgun'},
  {id: 'HeavyWeapons', name: 'Heavy Weapons'},
  {id: 'HumanPerception', name: 'Human Perception'},
  {id: 'Interrogation', name: 'Interrogation'},
  {id: 'LandVehicleTech', name: 'Land Vehicle Tech'},
  {id: 'Language', name: 'Language'},
  {id: 'LibrarySearch', name: 'Library Search'},
  {id: 'LipReading', name: 'Lip Reading'},
  {id: 'LocalExpert', name: 'Local Expert'},
  {id: 'MartialArts', name: 'Martial Arts'},
  {id: 'MeleeWeapon', name: 'Melee Weapon'},
  {id: 'PaintDrawSculpt', name: 'Paint/Draw/Sculpt'},
  {id: 'Paramedic', name: 'Paramedic'},
  {id: 'Perception', name: 'Perception'},
  {id: 'PersonalGrooming', name: 'Personal Grooming'},
  {id: 'Persuasion', name: 'Persuasion'},
  {id: 'PhotographyFilm', name: 'Photography/Film'},
  {id: 'PickLock', name: 'Pick Lock'},
  {id: 'PickPocket', name: 'Pick Pocket'},
  {id: 'PilotAirVehicle', name: 'Pilot Air Vehicle'},
  {id: 'PilotSeaVehicle', name: 'Pilot Sea Vehicle'},
  {id: 'PlayInstrument', name: 'Play Instrument'},
  {id: 'ResistTortureDrugs', name: 'Resist Torture/Drugs'},
  {id: 'Riding', name: 'Riding'},
  {id: 'Science', name: 'Science'},
  {id: 'SeaVehicleTech', name: 'Sea Vehicle Tech'},
  {id: 'ShoulderArms', name: 'Shoulder Arms'},
  {id: 'Stealth', name: 'Stealth'},
  {id: 'Streetwise', name: 'Streetwise'},
  {id: 'Tactics', name: 'Tactics'},
  {id: 'Tracking', name: 'Tracking'},
  {id: 'Trading', name: 'Trading'},
  {id: 'WardrobeStyle', name: 'Wardrobe & Style'},
  {id: 'Weaponstech', name: 'Weaponstech'},
  {id: 'WildernessSurvival', name: 'Wilderness Survival'},
];

export const registerSettingsCyberpunkRedCore = function(scope) {
  skills.forEach(skill => {
    game.settings.register("tsamys-secret-rolls", `hide${skill.id}`, {
      name: `Hide ${skill.name}`,
      scope: scope,
      config: true,
      default: false,
      type: Boolean
    });
  });
};

export const startCyberpunkRedCore = function() {
  Hooks.on("preCreateChatMessage", async (rawMessage) => {
    if (rawMessage.content.includes("Skill")) {
      skills.forEach(skill => {
        if(game.settings.get("tsamys-secret-rolls", `hide${skill.id}`) && rawMessage.content.includes(skill.name)) {
          rawMessage.applyRollMode("blindroll");
        }
      });
    }
  });
};