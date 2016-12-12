using Core.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TheBookWeb.Interfaces
{
    public interface IArticleService
    {
        Article CreateArticle(string author, string title, string body);
        Article GetArticle(int id);

        Article UpdateArticle(int id, string author, string title, string body);
    }
}
