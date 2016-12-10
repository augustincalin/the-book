using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Model;
using TheBookWeb.Interfaces;
using Core.Interfaces;

namespace TheBookWeb.Services
{
    public class CommentService : ICommentService
    {
        private readonly IRepository<Comment> _commentRepository;
        public CommentService(IRepository<Comment> commentRespository)
        {
            _commentRepository = commentRespository;
        }
        public Comment CreateComment(Comment comment)
        {
            _commentRepository.Add(comment);
            _commentRepository.Save();
            return comment;
        }
    }
}
