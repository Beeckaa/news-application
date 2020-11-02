using Microsoft.AspNetCore.Mvc;  
using System;  
using System.Collections.Generic;    
using System.Linq;  
using System.Xml.Linq;  
  
namespace news_application.Controllers  {  
    [Route("api/[controller]")]  
    [ApiController]  
    public class RssSourceController : ControllerBase {  
        string[] rssSourceUrl = {"https://nt.se/rss/lokalt/norrkoping", "https://feeds.expressen.se/nyheter/", "https://www.svd.se/?service=rss"};
        List<Source> sources = new List<Source>();
  
        [HttpGet]  
        public IEnumerable<Source> Get() {  
            try {  
                XDocument xDoc = new XDocument();
                foreach (var url in rssSourceUrl) {
                    xDoc = XDocument.Load(url);
                    var source = (from item in xDoc.Descendants("channel")
                        select new {
                            title = item.Element("title").Value,
                            link = item.Element("link").Value,
                            description = item.Element("description")?.Value
                        });
                    if (source != null) {
                        foreach (var i in source) {
                            Source s = new Source {
                                Name = i.title,
                                Link = i.link,
                                Description = i.description,                          };
                            sources.Add(s);
                        }
                    }
                }
                return sources;
            }  
            catch {  
                throw;
            }  
        }  
    }  
}