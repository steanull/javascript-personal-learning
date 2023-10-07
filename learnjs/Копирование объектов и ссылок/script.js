'use strict'
// Копирование объектов и ссылок

let user = {
    name: 'Alex',
}

let admin = user; //   Копируется ссылка
admin['name'] = 'Savva';
console.log(user.name); // Savva

let fruit = {
    name: 'apple',
}

let products = {
    name: 'apple',
}

console.log(fruit == products); // false
console.log(fruit === products); // false
console.log(user == admin); // true
console.log(user === admin); // true

let links = {
    site: 'steanull.ru',
    vk: 'vk.com',
}

let profile = {};

for (let key in links) {
    profile[key] = links[key];
}

profile.site = 'systemway.org';
console.log(links.site); // steanull.ru
console.log(profile.site); // systemway.org

let specs = {
    model: 'MacBook',
}

let advancedSpecs = {
    processor: 'M2',
    year: '2022',
    screen: '13.1 inch'
}

Object.assign(specs, advancedSpecs);
console.log(specs);

let cloneSpecs = Object.assign({}, specs);
cloneSpecs.screen = '13.1 дюйм';
console.log(cloneSpecs);
console.log(specs);

let section = {
    display: 'display: block',
    sizes: {
        width: 'width: 120px',
        height: 'height: 120px',
    },
}

console.log(section.sizes.width);

let newSection = structuredClone(section);
newSection.display = 'display: flex';
console.log(newSection);
console.log(section);

function deepClone (dest, object) {
    // Очищаем объект, в который будет записан новый
    for (let key in dest) {
        delete dest[key];
    }

    //Копируем
    for (let key in object) {
        if (typeof(object[key]) === 'object') {
            dest[key] = deepClone({}, object[key]);
        } else {
            dest[key] = object[key];
        }
    }
    return dest;
}

deepClone (user, newSection);
newSection.sizes.width = 'width: 100px;';
console.log(user);
console.log(newSection);

