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
    public class CommentController : Controller
    {
        private readonly ICommentService _commentService;
        public CommentController(ICommentService commentService)
        {
            _commentService = commentService;
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Comment comment)
        {
            if (null == comment)
            {
                return BadRequest();
            }
            comment.Author = User.Identity.Name;
            var savedComment = _commentService.CreateComment(comment);
            return Ok(savedComment);
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
