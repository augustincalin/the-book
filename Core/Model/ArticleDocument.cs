using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Model
{
    public class ArticleDocument
    {
        public string Title { get; set; }
        public string Body { get; set; }
        public DateTime ChangeDate { get; set; }
        public int Likes { get; set; }
        public int Dislikes { get; set; }
    }
}
