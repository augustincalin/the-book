using Core.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TheBookWeb.Interfaces
{
    public interface ICommentService
    {
        Comment CreateComment(Comment comment);
    }
}
