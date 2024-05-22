import { Heroi } from "../models/Heroi.js"

const criarHeroi = async (req, res) => {
    const { nome, pontosDePoder } = req.body
    if (nome && pontosDePoder) {
        const heroi = await Heroi.create({ nome, pontosDePoder })
        res.status(200).send({ menssagem: "criarHeroi - Executado com sucesso", data: heroi });
    } else {
        res.status(400).send({ menssagem: "Por favor informar nome e pontos " });
    }
}
const getHerois = async (req, res) => {
    console.log('GET HEROIS')
    console.log(req.nivelPermisao)
    const herois = await Heroi.findAll()
    res.status(200).send({ sucess: true, data: herois })
}
const getHeroiPeloId = async (req, res) => {
    const { id } = req.params
    const heroi = await Heroi.findByPk(id)
    res.status(200).send({ sucess: true, data: heroi })
}
const atualizarHeroi = async (req, res) => {
    const { nomeAntigo, nomeNovo } = req.body
    const heroi = await Heroi.update({ nome : nomeNovo }, { where : { nome : nomeAntigo}})
    res.status(200).send({ sucess: true , data:heroi })
}
const apagarHeroi = async (req, res) => {
    const {id } = req.params
    await Heroi.destroy({ where : id})
    res.status(200).send({ sucess : true})
}

const login = async(req,res) =>{

}
export  { criarHeroi, getHerois, atualizarHeroi, apagarHeroi, getHeroiPeloId ,login}