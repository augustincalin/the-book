using Core.Interfaces;
using Core.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Infrastructure.Data
{
    public class ArticleRepository : Repository<Article>, IArticleRepository
    {
        public ArticleRepository(DbContext context):base(context)
        {

        }
        public Article LoadArticle(int id)
        {
            Article article = _context.Set<Article>().Include(a=>a.Comments).AsNoTracking().SingleOrDefault(c=>c.Id == id);
            return article;
        }
    }
}
