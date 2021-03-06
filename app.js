// Паттерн MVC включает ряд компонентов:

// Модели определяют структуру и логику используемых данных

// Представления (views) определяет визуальную часть, как данные будут отображаться

// Контроллеры обрабатывают входящие http-запросы, используя для обработки модели и представления, и отправляет в ответ клиенту некоторый результат обработки, нередко в виде html-кода.

// Система маршрутизация как дополнительный компонент сопоставляет запросы с маршрутами и выбирает для обработки запросов определенный контроллер


// const express = require("express");
// const app = express();
// const userRouter = require("./routes/userRouter");
// const homeRouter = require("./routes/homeRouter");
 
// app.use("/users", userRouter);;
// app.use("/", homeRouter);
 
// app.use( (req, res, next)=> {
//     res.status(404).send("Not Found")
// });
 
// app.listen(3000);


const express = require("express");
const app = express();
const userRouter = require("./routes/userRouter.js");
const homeRouter = require("./routes/homeRouter.js");
 
app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: false }));
 
app.use("/users", userRouter);
app.use("/", homeRouter);
 
app.use((req, res, next)=> {
    res.status(404).send("Not Found");
});
 
app.listen(3000);

