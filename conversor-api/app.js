const express = require('express');
const convert = require('convert-units');
const cors = require('cors')

const app = express();
const port = 3000;
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.options("/", (req, res) => {
    res.send({
        message: 'string',
        possibilities: "['string']"
    });
});

/**
 * req: plain
 * res: {
 *   
 * }
 */
app.get("/", (req, res) => {
    res.send({
        message: 'Conversor API',
        possibilities: convert().possibilities()
    });
});



app.options("/options", (req, res) => {
    res.send(['string']);
})

/***
 * req: header.params: ?from=string
 * res: [string]
 */
app.get("/options", (req, res) => {
    let response;
    if(req.query.from) {
        response = convert().from(req.query.from).possibilities();
    }
    else{
        response = convert().possibilities();
    }
    res.send(response);
});


/***
 * req: plain
 */
 app.options('/converter', (req, res) => {
    res.send({
        "unid_origem": "string",
        "unid_destino": "string",
        "valor": 'number',
        "erro": "string"
    });
})

/**
   req: body: 
   {
        "unid_origem": "string",
        "unid_destino": "string",
        "valor": number,
        "erro": "string"
    }
   res: body :
   {
        "unid_origem": "string",
        "unid_destino": "string",
        "valor": number,
        "erro": "string"
    }
 */
app.post("/converter", (req, res) => {

    let resultado = 0;
    let erro = '';

    try {
        resultado = convert(req.body.valor)
            .from(req.body.unid_origem.toLowerCase())
            .to(req.body.unid_destino.toLowerCase());
    } catch (error) {
        erro = error.message
    }

    let response = {
        "unid_origem": req.body.unid_origem,
        "unid_destino": req.body.unid_destino,
        "valor": resultado,
        "erro": erro
    }

    res.send(response);
});



app.listen(port, (err) => {
    if (err) {
        console.log(`Failed to start ${err}`);
    }
    console.log(`API running at port ${port}`);
})