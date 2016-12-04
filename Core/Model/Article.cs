using Core.Common;
using System;
using System.Collections.Generic;

namespace Core.Model
{
    public partial class Article : Entity
    {
        public Article()
        {
            Comment = new HashSet<Comment>();
        }
        public string Title { get; set; }
        public string Body { get; set; }
        public string Author { get; set; }
        public DateTime DateCreation { get; set; }
        public DateTime? DateModification { get; set; }
        public bool? IsDeleted { get; set; }

        public virtual ICollection<Comment> Comment { get; set; }
    }
}
