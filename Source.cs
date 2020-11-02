using System;  
  
namespace news_application {
    public class Source {  
        public string Name { get; set; }
        public string Link { get; set; }
        public string Description { get; set; }
  
        public Source() {  
            Name = "";
            Link = "";
            Description = "";
        }
    }  
}