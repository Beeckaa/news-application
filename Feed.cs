using System;  
  
namespace news_application {  
    public class Feed {  
        public string Link { get; set; }  
        public string Title { get; set; }   
        public string Content { get; set; }  
        public DateTime PubDate { get; set; }
        public string Source { get; set; }
  
        public Feed() {  
            Link = "";  
            Title = "";  
            Content = "";  
            PubDate = DateTime.Today;
            Source = "";
        }
    }  
}