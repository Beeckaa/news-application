using System;  
  
namespace Angular8ASPNETCore.Models {  
    public class Feed {  
        public string Link { get; set; }  
        public string Title { get; set; }   
        public string Content { get; set; }  
        public string PubDate { get; set; }
  
        public Feed() {  
            Link = "";  
            Title = "";  
            Content = "";  
            PubDate = "";  
        }
    }  
}