import { Router } from "express"

const rappersRoutes = Router()

let suspeitos = [
    {
        id: Number(Math.floor(Math.random() * 999) + 1),
        nome_suspeito: "P-Diddy",
        idade: 54,
        atividade_suspeita: "sim",
        descricao_fisica: [
            "Homem",
            "Negro",
            "Barbudo",
            "1,78m de altura"
        ]
    },
    {
        id: Number(Math.floor(Math.random() * 999) + 1),
        nome_suspeito: "Justin Bieber",
        idade: 30,
        atividade_suspeita: "não",
        descricao_fisica: [
            "Homem",
            "Loiro",
            "Tatuado",
            "1,75m de altura"
        ]
    },
    {
        id: Number(Math.floor(Math.random() * 999) + 1),
        nome_suspeito: "Eminem",
        idade: 50,
        atividade_suspeita: "não",
        descricao_fisica: [
            "Homem",
            "Branco",
            "Barbudo",
            "1,73m de altura"
        ]
    }
]

//Buscar todos os suspeitos
rappersRoutes.get("/", (req,res) => {
    return res.status(200).send(suspeitos)
})

//Cadastrar um novo suspeito
rappersRoutes.post("/", (req,res) => {
    const {nome_suspeito, idade, atividade_suspeita, descricao_fisica} = req.body

    const novoSuspeito = {
        id: Number(Math.floor(Math.random() * 999) + 1),
        nome_suspeito,
        idade,
        atividade_suspeita,
        descricao_fisica
    };

    //Nome obrigatório
    if (!nome_suspeito) {
        return res.status(400).send({
            message: "O nome do suspeito é obrigatório!"
        })
    }

    //Idade número inteiro
    const validacaoIdade = Number.isInteger(idade);
    console.log(validacaoIdade);

    //Validação de atividade suspeita
    if (atividade_suspeita != "sim" && atividade_suspeita != "não") {
        return res.status(400).send({
            message: "Digite sim ou não para atividades suspeitas!"
        })
    }

    suspeitos.push(novoSuspeito);
    return res.status(201).send(suspeitos)
});

//Buscar suspeito por ID
rappersRoutes.get("/:id", (req,res) => {
    const { id } = req.params;

    const suspeito = suspeitos.find((suspeito) => suspeito.id == id);

    if (!suspeito) {
        return res
        .status(404)
        .json({message: "Suspeito não encontrado"});
    }
    return res.status(200).json(suspeito);
});

//Atualizar suspeitos
rappersRoutes.put("/:id", (req, res) => {
    const { id } = req.params
    const suspeito = suspeitos.find((suspeitoAtualizado) => suspeitoAtualizado.id === Number(id));
    console.log(suspeito);

    if (!suspeito) {
        return res.status(404).send({message: "Suspeito não encontrado!"})
    };

    const {nome_suspeito, idade, atividade_suspeita, descricao_fisica} = req.body;
    console.log(nome_suspeito);
    

    suspeito.nome_suspeito = nome_suspeito;
    suspeito.idade = idade;
    suspeito.atividade_suspeita = atividade_suspeita;
    suspeito.descricao_fisica = descricao_fisica;

    suspeitos.push(suspeito);
    return res.status(201).send(suspeito);
})

//Deletar um suspeito
rappersRoutes.delete("/:id", (req,res) => {
    const { id } = req.params

    const suspeito = suspeitos.find((suspeitos) => suspeitos.id === Number(id));

    if(!suspeito) {
        return res.status(404).send({message: "Suspeito não encontrado"})
    };

    suspeito = suspeitos.filter((suspeitos) => suspeitos.id !== Number(id));

    return res.status(200).send({message: "Suspeito deletado!"})
})

export default rappersRoutes