export default function Hello(app) {
    const sayHello = (req, res) => {res.send('Life is good!');

    };
    const sayWelcome = (req, res) => {
    res.send('Welcome to Full Stack Development!');
};
app.get("/hello", sayHello) // create a route that responds 'hello'
app.get("/", sayWelcome)
}