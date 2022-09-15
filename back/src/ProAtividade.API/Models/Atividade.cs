using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProAtividade.API.Models
{
    public class Atividade
    {
        public int? Id { get; set; }
        public string? Titulo { get; set; }
        public string? Descricao { get; set; }
        public string? Prioridade { get; set; }

        public Atividade()
        {
            Titulo = "Titulo";
            Descricao = "Descrição";
            Prioridade = "1";
        }
        public Atividade(int id)
        {
            Id = id;
        }
    }
}