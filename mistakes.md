<описание ошибки>. <описание исправления>. Исправлена(ы) строка(и) <номер(а) строк> в файле <относительный путь к файлу из корневой папки>


Найденные ошибки компиляции:

1.<Router is not defined>. <add import of express>. Исправлена(ы) строка(и) <1> в файле <./controllers/usercontroller.js>
2.<Cannot find module 'bcrypt'>. <fix import 'bcrypt' to 'bcryptjs'>. Исправлена(ы) строка(и) <2> в файле <./controllers/usercontroller.js>
3.<require(...).import is not a function(uncorect import model of user)>. <fix import model of user>. Исправлена(ы) строка(и) <5> в файле <./controllers/usercontroller.js>
4.<require(...).import is not a function(uncorect import model of game)>. <fix import model of game>. Исправлена(ы) строка(и) <2> в файле <./controllers/gamecontroller.js>
5.<uncorect export(no module.exports)>. <fix export(add module.exports<)>. Исправлена(ы) строка(и) <1> в файле <./models/game.js>
6.<ReferenceError: routers is not defined(uncorect exports name routers)>. <change routers to router>. Исправлена(ы) строка(и) <116> в файле <./controllers/gamecontroller.js>
7.<TypeError: db.sync is not a function(uncorrect import db)>. <fix import add export в ./db.js>. Исправлена(ы) строка(и): <3> в файле <./app.js>, <25> в файле <./db.js>
8.<require(...).import is not a function(uncorect import model of user)>. <fix import model of user>. Исправлена(ы) строка(и) <2> в файле <./midleware/validate-session.js>

Найденные ошибки логики приложения

1.<not define PORT>. <define PORT>. Исправлена(ы) строка(и) <6,13> в файле <./app.js> 

2.<body-parser deprecated bodyParser: use individual json/urlencoded middlewares(miss .json())>. <add .json()>. Исправлена(ы) строка(и) <9> в файле <./app.js> 
.json()

3.<game,user models isn't connected to db>. <connect models> Добавлены(ы) строка(и) <2,3,12,13,24> в файле <./db.js> .

4.<can't connect to db(uncorect port )>. <add field port 5433 > Добавлены(ы) строка(и) <10> в файле <./db.js>.

5.<uncorrect values of fields rec.body.user... >. <change to rec.body...> Добавлены(ы) строка(и) <9-12,30,32> в файле <./controllers/usercontroller.js>.

6.<uncorrect name of field passwordhash>. <change to passwordHash> Добавлены(ы) строка(и) <11> в файле <./controllers/usercontroller.js>.
7.<uncorrect method (post) to /signin>. <change to get> Добавлены(ы) строка(и) <29> в файле <./controllers/usercontroller.js>.

