using System;
using System.Collections.Generic;

namespace ProjetoIntegrador.Api.Models
{
    public partial class AvaliacaoAula
    {
        public int Id { get; set; }
        public string NomeDisciplina { get; set; } = null!;
        public float Nota { get; set; }
        public string Comentario { get; set; } = null!;
        public DateTime Data { get; set; }
    }
}
