using Core.Model;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Interfaces
{
    public interface IArticleRepository : IRepository<Article>
    {
        Article LoadArticle(int id);
    }
}
