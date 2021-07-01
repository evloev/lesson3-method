// let phon = {
//  brend: 'samsung',
//  model: 'a41',
//  memory: '32',
//  color: 'black',
//  power: true,
 

// // Изменить метод call() таки образом, чтобы он принимал один параметр - имя того, 
// //кому звоним и возвращал строку: “Я звоню [name]".   
//  call: function (name) {
//    return `Я звоню ${name}`
// },

// };
// console.log(phon.call('Адам'))


// Добавить в объект свойство batteryPower которое хранит значение кол-во зараяда.


// let phon = {
//    brend: 'samsung',
//    model: 'a41',
//    memory: '32',
//    color: 'black',
//    power: true,
//    myBattery: '68%',
   
  
//    batteryPower: function () {
//      return `Заряд батареи ${this.myBattery}`
//   },
  
//   };
//   console.log(phon.batteryPower())
  

//5 Добавить в объект метод getBatteryPower() который возвращает строку: “Ваша зарядка [значение заряда] %”
// let phon = {
//    brend: 'samsung',
//    model: 'a41',
//    memory: '32',
//    color: 'black',
//    power: true,
//    myBattery: '68%',
   
  
//    batteryPower: function (battery) {
//      return `Заряд батареи ${battery}`
//   },
  
//   };
//   console.log(phon.batteryPower('55%'))

//6 Добавить метод isOn который будет возвращать строку “телефон включен”, 
//если значение свойства power равно true и “телефон выключен” если  false.   

// let phon = {
//    brend: 'samsung',
//    model: 'a41',
//    memory: '32',
//    color: 'black',
//    power: true,
//    myBattery: '68%',

// ison: function() {
//    if(this.power == true) {
//       return 'телефон включен'

//    }
//     else {
//        (this.power == false) 
//       return 'телефон выключен'
//    }

// },
// switch: function() {
//    if(this.power == false) {
//       return this.power = true
//    } if(this.power == true) {
//       return this.power = false
//    }
// }
// }
// console.log(phon.ison())
// console.log(phon.switch())


//7 Добавить метод switch() который будет включать и выключать телефон.
 //Т.е. будет менять значение свойства power 
//(Если изначально значение свойства было false метод должен поменять его на true и наоборот)

/*============================================================================*/


/*8. Добавить свойства: исходящие сообщения и входящие сообщения, которые будут содержать в себе массив из объектов. 
В массиве с исходящими сообщениями объект должен содержать свойства: `to` , `time`, `message`.  
А с входящими вместо свойства `to`, должно быть `from`. В итоге должно получиться примерно следующее:
    
sent: [
  {to: "+7919 555 23 11", time: "03:12", message: "Сплю!"},
  {to: "+7377 656 21 21", time: "23:25", message: "Д1авала?"},
], 
inbox: [
  {from: "+7999 213 12 12", time: "20:12", message: "Спишь?"},
  {from: "+2124 312 48 24", time: "11:25", message: "Все еще спишь?"},
], 
*/




let phone = { 
   brand: "realme", 
   model: "c3", 
   memory: "64gb", 
   colar: "black",  
   power: true, 
   batteryPower: '50%', 
   sent: [ 
       {to: "+7919 555 23 11", time: "03:12", message: "Сплю!"}, 
       {to: "+7377 656 21 21", time: "23:25", message: "Д1авала?"}, 
   ], 
    
   inbox: [ 
        {from: "+7999 213 12 12", time: "20:12", message: "Спишь?"}, 
        {from: "+2124 312 48 24", time: "11:25", message: "Все еще спишь?"}, 
   ],  
      
isOn:function (){ 
   if(this.power == true){ 
       return 'Телефон включен' 
   } 
   else {(this.power == false)
       return 'Телефон выключен' 
   }
      
}, 
switch: function(){  
        if(this.power == false){  
          return this.power = true  
        } if(this.power == true){  
          return this.power = false  
        }  
},

sentMessage: function(to,time,message) {  
   return this.sent.push({to,time,message})  
 },

 clearInbox:function () {
  for(let i = 0; i <= this.sent; i++) {
      this.sent[i].pop()
  }
},

 clearSent: function () {
  for(let i = 0; i <= this.inbox; i++) {
      this.inbox[i].pop()
  }
    }            
} 

console.log(this.inbox)

phone.sentMessage('89287566626', '12:00', 'время')
console.log(phone.sent)
phone.clearInbox()

console.log(phone.isOn()); 
console.log(phone.switch()); 
console.log(phone.sentMessage('89287566626', '12:00', 'время'))


//9 Создать метод sentMessage(), который будет добавлять новый объект в массив с отправленными сообщениями. 
//Подумайте сколько параметров должен будет принимать этот метод.

/*========================================================================================================*/

 

//10 Создать два метода clearInbox() и clearSent() которые будут удалять
// все входящие и все исходящие сообщения соответственно. 
// phone.clearInbox = function () {
//   for(let i = 0; i <= this.incomingMessages.length; i++) {
//       this.incomingMessages.pop()
//   }
// }