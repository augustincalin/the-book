using Core.Common;
using System;
using System.Collections.Generic;

namespace Core.Model
{
    public partial class Article : Entity
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
        public Article()
        {
            Comments = new List<Comment>();
        }
        public string Title { get; set; }
        public string Body { get; set; }
        public string Author { get; set; }
        public DateTime DateCreation { get; set; }
        public DateTime? DateModification { get; set; }
        public bool? IsDeleted { get; set; }

        public ICollection<Comment> Comments { get; set; }
    }
}
