//Console.js setup styles
//https://github.com/icodeforlove/Console.js

// Step 1: override console methods and enable String.prototype styles
Console.attach();
Console.styles.attach();

// Step 2: register your styles
Console.styles.register({
    bold: 'font-weight:bold',
    underline: 'text-decoration:underline',

    red: 'color:#de4f2a',
    blue: 'color:#1795de',
    green: 'color:green',
    grey: 'color:grey',
    orange: 'color:#FF3300',

    // optional (this is the default style, uses default colors)
    json: {
        'string': 'green',
        'number': 'darkorange',
        'boolean': 'blue',
        'null': 'magenta',
        'key': 'red'
    },

    code: 'background: rgb(255, 255, 219); padding: 1px 5px; border: 1px solid rgba(0, 0, 0, 0.1); line-height: 18px; text-decoration:none;'
});

// Step 3: profit!
//console.log('hello'.red.bold);

//var object = {a: 1, b: new Date(), c: "1", d: {a: "{a: 1}"}, e: null, f: false};
//console.log('object: ' + JSON.stringify(object, null, '\t').json);