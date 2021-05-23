<описание ошибки>. <описание исправления>. Исправлена(ы) строка(и) <номер(а) строк> в файле <относительный путь к файлу из корневой папки>


Найденные ошибки компиляции:

1.<Router is not defined>. <add import of express>. Исправлена(ы) строка(и) <1> в файле <./controllers/usercontroller.js>
2.<Cannot find module 'bcrypt'>. <fix import 'bcrypt' to 'bcryptjs'>. Исправлена(ы) строка(и) <2> в файле <./controllers/usercontroller.js>
3.<require(...).import is not a function(uncorect import model of user)>. <fix import model of user>. Исправлена(ы) строка(и) <5> в файле <./controllers/usercontroller.js>
4.<require(...).import is not a function(uncorect import model of game)>. <fix import model of game>. Исправлена(ы) строка(и) <2> в файле <./controllers/gamecontroller.js>
5.<uncorect export(no module.exports)>. <fix export(add module.exports<)>. Исправлена(ы) строка(и) <1> в файле <./models/game.js>
6.<ReferenceError: routers is not defined(uncorect exports name routers)>. <change routers to router>. Исправлена(ы) строка(и) <116> в файле <./controllers/gamecontroller.js>
7.<TypeError: db.sync is not a function)>. <add export в ./db.js>. Исправлена(ы) строка(и) <20> в файле <./app.js>
8.<require(...).import is not a function(uncorect import model of user)>. <fix import model of user>. Исправлена(ы) строка(и) <2> в файле <./midleware/validate-session.js>

Найденные ошибки логики приложения

1.<not define PORT>. <define PORT>. Исправлена(ы) строка(и) <6,16> в файле <./app.js> 
2.<body-parser deprecated bodyParser: use individual json/urlencoded middlewares(miss .json())>. <add .json()>. Исправлена(ы) строка(и) <6,16> в файле <./app.js> 
.json()