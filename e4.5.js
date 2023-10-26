class ElectricalAppliance {
  constructor(name) {
    this.device = 'household electrical appliance';
    this.name = name;
  }

  getPowerConsumption(power, t, isOn) {
    const turnOn = (isOn === 1) ? 'Вкл' : 'Выкл';
    console.log(`Расход эл. энергии ${this.name} за ${t} час. = ${power * t}Вт. ${this.name}: ${turnOn}`);
  }
}

class Characteristic extends ElectricalAppliance {
  constructor(name, color) {
    super(name);
    this.color = color;
  }
}

const teapot = new Characteristic('Чайник', 'черный');
const fridge = new Characteristic('Холодильник', 'красный');
const luminaire = new Characteristic('Люстра', 'зеленый');

console.log(teapot, fridge, luminaire);
teapot.getPowerConsumption(700, 2);
fridge.getPowerConsumption(500, 6, 1);
luminaire.getPowerConsumption(60, 5, 1);
