using Core.Common;
using System;
using System.Collections.Generic;

namespace Core.Model
{
    public partial class Comment : Entity
    {
        public string Body { get; set; }
        public string Author { get; set; }
        public int? Type { get; set; }
        public int ArticleId { get; set; }

        public virtual Article Article { get; set; }
    }
}
