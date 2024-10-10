import { Router } from "express"

const rappersRoutes = Router()

let suspeitos = [
    {
        id: Number(Math.floor(Math.random() * 999) + 1),
        nome_suspeito: "P-Diddy",
        idade: 54,
        atividade_suspeita: true,
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
        atividade_suspeita: false,
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
        atividade_suspeita: false,
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



export default rappersRoutes