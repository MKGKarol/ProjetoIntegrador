using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace ProjetoIntegrador.Api.Models
{
    public partial class BDContexto : DbContext
    {
        public BDContexto()
        {
        }

        public BDContexto(DbContextOptions<BDContexto> options)
            : base(options)
        {
        }

        public virtual DbSet<AvaliacaoAula> AvaliacaoAulas { get; set; } = null!;
      

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {

                optionsBuilder.UseMySql("server=sql10.freemysqlhosting.net;user=sql10501966;password=HN3uMd7ivm;database=sql10501966", Microsoft.EntityFrameworkCore.ServerVersion.Parse("5.5.62-mysql"));
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.UseCollation("latin1_swedish_ci")
                .HasCharSet("latin1");

            modelBuilder.Entity<AvaliacaoAula>(entity =>
            {
                entity.ToTable("avaliacao_aula");

                entity.Property(e => e.Id)
                    .HasColumnType("int(11)")
                    .HasColumnName("id");

                entity.Property(e => e.Comentario)
                    .HasColumnType("text")
                    .HasColumnName("comentario");

                entity.Property(e => e.Data)
                    .HasColumnType("timestamp")
                    .HasColumnName("data")
                    .HasDefaultValueSql("CURRENT_TIMESTAMP");

                entity.Property(e => e.NomeDisciplina)
                    .HasMaxLength(60)
                    .HasColumnName("nome_disciplina");

                entity.Property(e => e.Nota)
                    .HasColumnType("float(10,1)")
                    .HasColumnName("nota");
            });

          
            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
