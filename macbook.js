const macbook = {
  madeBy: "Apple",
  year: 2017,
  modelInProduction: false,
  specs: [
    memory = { 
      gb: 8,
      type: "lpddr3",
    },
    chipset = {
      processor: "1.2 GHz Dual-Core Intel Core m3",
      graphics: "Intel HD Graphics 615 ",
    },
    misc = {
      os: "macOS",
      version: 13.1,
      serialNumber: "nOt@r3@1$3r1@lnumb3r",
    }
  ],
  doesItsJob: true,
  isSluggish: true,
  makesUserAnnoyedOnAScaleOfOneToTen: 4,
  userTakeAway: function feelings() {
    let realization;
    if((macbook.doesItsJob === true) && (macbook.year >= 2016) && (macbook.makesUserAnnoyedOnAScaleOfOneToTen >= 6)) {
      realization = "Come on. You can hold off for another year.";
    } else {
      realization = "It is time to have a look at those new MacBook Air models.";
    }
    return realization;
  },
}

