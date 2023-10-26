function ElectricalAppliance(name) {
  return {
    device: 'household electrical appliance',
    name: name,
    getPowerConsumption: function (power, t, isOn) {
      const turnOn = (isOn === 1) ? 'Вкл' : 'Выкл';
      console.log(`Расход эл. энергии ${this.name} за ${t} час. = ${power * t}Вт. ${this.name}: ${turnOn}`);
    }
  };
}

function Characteristic(name, color) {
  const appliance = ElectricalAppliance(name);
  appliance.color = color;
  return appliance;
}

const teapot = Characteristic('Чайник', 'черный');
const fridge = Characteristic('Холодильник', 'красный');
const luminaire = Characteristic('Люстра', 'зеленый');

console.log(teapot, fridge, luminaire);
teapot.getPowerConsumption(700, 2);
fridge.getPowerConsumption(500, 6, 1);
luminaire.getPowerConsumption(60, 5, 1);
