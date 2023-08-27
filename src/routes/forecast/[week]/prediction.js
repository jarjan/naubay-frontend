import sales from "../../../lib/data/sales.json";

// interface SaleItem {
//   datetime: string;
//   month: string;
//   day: string;
//   latitude: string;
//   longitude: string;
//   dayOfWeek: string;
//   powerBread: number;
//   plainBread: number;
//   jam: number;
//   croissant: number;
//   coffeLatte: number;
//   tiramisuCroissant: number;
//   cacaoDeep: number;
//   painAuChocolat: number;
//   almondCroissant: number;
//   milkTea: number;
//   gateauChocolat: number;
//   baguette: number;
//   cheeseCake: number;
//   lemonAde: number;
//   orangePound: number;
//   wiener: number;
//   vanilaLatte: number;
//   berryAde: number;
//   tiramisu: number;
//   merinqueCookies: number;
// }

const sumOperation = (item1 = 0, item2 = 0) => {
  return Number(item1) + Number(item2);
};

// @ts-ignore
const sumOfItems = (item1, item2) => {
  // check if sale1 has at least one item
  if (Object.keys(item1).length === 0) {
    return item2;
  }

  // summarize two items, parse string to number if needed
  return {
    date: item1.date,
    month: item1.month,
    day: item1.day,
    latitude: item1.latitude,
    longitude: item1.longitude,
    dayOfWeek: item1.dayOfWeek,
    competitors: Math.floor(Math.random() * 10),
    powerBread: sumOperation(item1.powerBread, item2.powerBread),
    plainBread: sumOperation(item1.plainBread, item2.plainBread),
    jam: sumOperation(item1.jam, item2.jam),
    croissant: sumOperation(item1.croissant, item2.croissant),
    coffeLatte: sumOperation(item1.coffeLatte, item2.coffeLatte),
    tiramisuCroissant: sumOperation(
      item1.tiramisuCroissant,
      item2.tiramisuCroissant
    ),
    cacaoDeep: sumOperation(item1.cacaoDeep, item2.cacaoDeep),
    painAuChocolat: sumOperation(item1.painAuChocolat, item2.painAuChocolat),
    almondCroissant: sumOperation(item1.almondCroissant, item2.almondCroissant),
    milkTea: sumOperation(item1.milkTea, item2.milkTea),
    gateauChocolat: sumOperation(item1.gateauChocolat, item2.gateauChocolat),
    baguette: sumOperation(item1.baguette, item2.baguette),
    cheeseCake: sumOperation(item1.cheeseCake, item2.cheeseCake),
    lemonAde: sumOperation(item1.lemonAde, item2.lemonAde),
    orangePound: sumOperation(item1.orangePound, item2.orangePound),
    wiener: sumOperation(item1.wiener, item2.wiener),
    vanilaLatte: sumOperation(item1.vanilaLatte, item2.vanilaLatte),
    berryAde: sumOperation(item1.berryAde, item2.berryAde),
    tiramisu: sumOperation(item1.tiramisu, item2.tiramisu),
    merinqueCookies: sumOperation(item1.merinqueCookies, item2.merinqueCookies),
  };
};

const salesByDay = sales.reduce((acc, sale) => {
  const day = sale.datetime.split(" ")[0];
  // skip if no day
  if (!day) {
    return acc;
  }
  if (!acc[day]) {
    acc[day] = {
      date: day,
      day: Number(day.split("-")[2]),
      month: Number(day.split("-")[1]),
      latitude: sale.latitude,
      longitude: sale.longitude,
      dayOfWeek: sale.dayOfWeek,
    };
  }
  acc[day] = sumOfItems(acc[day], sale);
  return acc;
}, {});
console.log("salesByDay: ", salesByDay);
