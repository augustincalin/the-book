using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TheBookWeb.Interfaces;
using TheBookWeb.Models;
using Core.Model;
using Newtonsoft.Json.Serialization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TheBookWeb.Controllers
{
    [Route("api/[controller]")]
    public class ArticleController : Controller
    {
        private readonly IArticleService _articleService;
        public ArticleController(IArticleService articleService)
        {
            _articleService = articleService;
        }
        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return new JsonResult(_articleService.GetArticle(id), new Newtonsoft.Json.JsonSerializerSettings {
                MaxDepth=10,
                ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore,
                ContractResolver = new CamelCasePropertyNamesContractResolver()
                
            });
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]ArticleViewModel article)
        {
            if(null == article)
            {
                return BadRequest();
            }
            var savedArticle = _articleService.CreateArticle(article.Title, article.Body);
            return Ok(savedArticle);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]ArticleViewModel article)
        {
            return Ok(_articleService.UpdateArticle(id, article.Title, article.Body));
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
