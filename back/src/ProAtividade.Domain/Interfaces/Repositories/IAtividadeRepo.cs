using ProAtividade.Domain.Entities;

namespace ProAtividade.Domain.Interfaces.Repositories
{
    public interface IAtividadeRepo : IGeralRepo
    {
         Task<Atividade[]> PegaTodasAsync();
         Task<Atividade> PegaPorIdAsync(int id);
         Task<Atividade> PegaPorTituloAsync(string titulo);
    }
}