using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Searchengine.Models;

namespace Searchengine.Controllers
{
    public class MedicineController : ApiController
    {
        private SearchEngineDB db = new SearchEngineDB();

        // GET: api/Medicine
        public IQueryable<Medicine> GetMedicines()
        {
            return db.Medicines;
        }
    public List<Medicine>GetMedicine(string name)
    {
      List<Medicine> med = db.Medicines.Where(x => x.medName.StartsWith(name)).ToList();
      return med;
    }
        // GET: api/Medicine/5
        [ResponseType(typeof(Medicine))]
        public IHttpActionResult GetMedicine(int id)
        {
            Medicine medicine = db.Medicines.Find(id);
            if (medicine == null)
            {
                return NotFound();
            }

            return Ok(medicine);
        }

        // PUT: api/Medicine/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutMedicine(int id, Medicine medicine)
        {
            if (id != medicine.medId)
            {
                return BadRequest();
            }

            db.Entry(medicine).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MedicineExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Medicine
        [ResponseType(typeof(Medicine))]
        public IHttpActionResult PostMedicine(Medicine medicine)
        {
          

            db.Medicines.Add(medicine);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = medicine.medId }, medicine);
        }

        // DELETE: api/Medicine/5
        [ResponseType(typeof(Medicine))]
        public IHttpActionResult DeleteMedicine(int id)
        {
            Medicine medicine = db.Medicines.Find(id);
            if (medicine == null)
            {
                return NotFound();
            }

            db.Medicines.Remove(medicine);
            db.SaveChanges();

            return Ok(medicine);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool MedicineExists(int id)
        {
            return db.Medicines.Count(e => e.medId == id) > 0;
        }
    }
}
