using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjetoIntegrador.Api.Models;

namespace ProjetoIntegrador.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AvaliacaoAulasController : ControllerBase
    {
        private readonly BDContexto _context;

        public AvaliacaoAulasController(BDContexto context)
        {
            _context = context;
        }

        // GET: api/AvaliacaoAulas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AvaliacaoAula>>> GetAvaliacaoAulas()
        {
          if (_context.AvaliacaoAulas == null)
          {
              return NotFound();
          }
            return await _context.AvaliacaoAulas.ToListAsync();
        }

        // GET: api/AvaliacaoAulas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AvaliacaoAula>> GetAvaliacaoAula(int id)
        {
          if (_context.AvaliacaoAulas == null)
          {
              return NotFound();
          }
            var avaliacaoAula = await _context.AvaliacaoAulas.FindAsync(id);

            if (avaliacaoAula == null)
            {
                return NotFound();
            }

            return avaliacaoAula;
        }

        // PUT: api/AvaliacaoAulas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAvaliacaoAula(int id, AvaliacaoAula avaliacaoAula)
        {
            if (id != avaliacaoAula.Id)
            {
                return BadRequest();
            }

            _context.Entry(avaliacaoAula).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AvaliacaoAulaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/AvaliacaoAulas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<AvaliacaoAula>> PostAvaliacaoAula(AvaliacaoAula avaliacaoAula)
        {
          if (_context.AvaliacaoAulas == null)
          {
              return Problem("Entity set 'BDContexto.AvaliacaoAulas'  is null.");
          }
            _context.AvaliacaoAulas.Add(avaliacaoAula);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAvaliacaoAula", new { id = avaliacaoAula.Id }, avaliacaoAula);
        }

        // DELETE: api/AvaliacaoAulas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAvaliacaoAula(int id)
        {
            if (_context.AvaliacaoAulas == null)
            {
                return NotFound();
            }
            var avaliacaoAula = await _context.AvaliacaoAulas.FindAsync(id);
            if (avaliacaoAula == null)
            {
                return NotFound();
            }

            _context.AvaliacaoAulas.Remove(avaliacaoAula);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AvaliacaoAulaExists(int id)
        {
            return (_context.AvaliacaoAulas?.Any(e => e.Id == id)).GetValueOrDefault();
        }
    }
}
