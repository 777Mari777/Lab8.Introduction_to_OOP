// задание 1
// Создать различный транспорт в GTA 5 при помощи классов. Применить принципы ООП. В консольной программе создать объекты классов, разместить их в общий массив и при помощи цикла вызвать метод "Завести мотор"

class Transport {
    constructor(options){
        this.kindOfTransport = options.kindOfTransport; //Вид транспорта
        this.nameTransports = options.nameTransports;  //название транспорта
        this.model = options.model; 
        this.capacity =  options.capacity; //вместимость(чел)
        this.typeOffuel =  options.typeOffuel; //вид топлива
        this.serviceTransport = options.serviceTransport; //обслуживающий странспорт: true or false 
        this.color = options.color
    }
    startEngine() {
        console.log('Мотор заведен')
    }
}

class Cars extends Transport { //машины
    constructor(options) {
        super(options)
        this.tipEngine = options.tipEngine //тип двигателя(автомат, механика)
    }
}

class AirTransport extends Transport { //воздушный транспорт
}

class WaterTransport extends Transport { //водный транспорт 
}

class Bicycle extends Transport { // Велосипеды
}

class UnderwaterTransport extends Transport { // Подводный транспорт
}

let num = new Cars({
    kindOfTransport: 'Наземный транспорт', // создаю объекты 5 штук
    nameTransports: 'Автомобиль' ,
    model: 'Ауди а5' ,
    capacity: '4 человека' , 
    typeOffuel: 'Бензин' , 
    serviceTransport: 'false' , 
    color:'red',
    tipEngine: 'Автомат'
});

let num2 = new WaterTransport({
    kindOfTransport: 'водный транспорт ',
    nameTransports: 'Лодка' ,
    model: 'ЛОдка' ,
    capacity: '6 человека' , 
    typeOffuel: 'Бензин' , 
    serviceTransport: 'false' , 
    color:'белая'
});

let num3 = new Bicycle({
    kindOfTransport: 'Велосипед',
    nameTransports: 'Спортивный велосипед' ,
    model: 'стелс 001' ,
    capacity: '1 человек' , 
    typeOffuel: 'Человеческая энергия' , 
    serviceTransport: 'false' , 
    color:'розовый'
});

let num4 = new AirTransport({
    kindOfTransport: 'воздушный транспорт',
    nameTransports: 'Самолет' ,
    model: 'Частный борт 007' ,
    capacity: '10 человек' , 
    typeOffuel: 'Возможно бензин', 
    serviceTransport: 'false' , 
    color:'черный'
});

let num5 = new Cars({
    kindOfTransport: 'Наземный транспорт',
    nameTransports: 'Автобус' ,
    model: 'ВАЗ Камаз' ,
    capacity: '25 человек' , 
    typeOffuel: 'Дизель', 
    serviceTransport: 'true' , 
    color:'Белый',
    tipEngine: 'Механика'
});

const massiv = [num, num2, num3, num4, num5]; //создаю массив с объектами

for (let i = 0; i < massiv.length; i++ ) { // цикл который вызывает метод "Завести мотор"
    console.log(massiv[i].startEngine())
}

// задание 2
// Создать набор классов, который представляет еду из столовой. Применить принципы ООП.

class Food {
        _goEat = 'true'; // сдесь я использую => Инкапсуляция – это свойство системы, позволяющее объединить данные и методы, работающие с ними, в классе и скрыть детали реализации от пользователя.
        
        set goEat(value) { //let's go eat(true or false) идем кушать или нет
            if (value !== 'true') throw new Error("Зачем тогда пришел в колледж");
            this._goEat = value;
        }
        
        get goEat() {
            return this._goEat;
        }
        constructor(options) {
            this.goColledg = options.goColledg;  //let's go eat(true or false) идем кушать или нет
        }
    weDecide () {
        console.log('Eсть или не есть,вот в чем вопрос')
    }
    
}

//слово extends участвует в создание наследования(в с# вместо ключевого слова используют двоеточие":")

class Syp extends Food{ //Суп  
    constructor(options) {
        super(options)
        this.name = options.name;
        this.kitchen = options.kitchen; //к какой кухне относиться
        this.cold = options.cold; //холодное блюдо или нет(true or false)
        this.consistency = options.consistency; //консистенция
    }
    weDecide () {
        console.log('Не советую есть эту жижу') // использую полиморфизм 
    }
}

class Drink extends Food{ //напиток 
    constructor(options) {
        super(options)
        this.name = options.name;
        this.cold = options.cold; //холодное или нет(true or false)
    }
}

class SecondCourse extends Food{ //второе блюдо
    constructor(options) {
        super(options)
        this.name = options.name;
        this.kitchen = options.kitchen; //к какой кухне относиться
        this.cold = options.cold; //холодное блюдо или нет(true or false)
        this.consistency = options.consistency; //консистенция
    }
}

class Bread extends Food{ //хлеб
    constructor(options) {
        super(options)
        this.color = options.color;
        this.rigidity = options.rigidity; //жесткость(true or false)
    }
}

let et = new Drink({
    name: 'tea'
});

let et2 = new Syp({
    name:'syp'
})