using Core.Common;
using System;
using System.Collections.Generic;

namespace Core.Model
{
    public partial class Comment : Entity
    {
        public override int Id
        {
            get
            {
                return base.Id;
            }

            set
            {
                base.Id = value;
            }
        }
        public string Body { get; set; }
        public string Author { get; set; }
        public int? Type { get; set; }
        public int ArticleId { get; set; }

        public Article Article { get; set; }
    }
}
