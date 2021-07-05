import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Eduardo',
      sobrenome: 'Aires',
      email: 'eduaires@gmail.com',
      idade: 32,
      peso: 70.0,
      altura: 1.90,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
