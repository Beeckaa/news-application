using Microsoft.AspNetCore.Mvc;  
using System;  
using System.Collections.Generic;    
using System.Linq;  
using System.Xml.Linq;  
  
namespace news_application.Controllers  {  
    [Route("api/[controller]")]  
    [ApiController]  
    public class RssFeedsController : ControllerBase {  
        string[] rssFeedUrl = {"https://nt.se/rss/lokalt/norrkoping", "https://feeds.expressen.se/nyheter/", "https://www.svd.se/?service=rss"};
        List<Feed> feeds = new List<Feed>();
  
        [HttpGet]  
        public IEnumerable<Feed> Get() {  
            try {  
                XDocument xDoc = new XDocument();
                foreach (var url in rssFeedUrl) {
                    xDoc = XDocument.Load(url);
                    var source = (from item in xDoc.Descendants("channel")
                        select new {
                            title = item.Element("title").Value,
                            link = item.Element("link").Value,
                            description = item.Element("description")?.Value
                        });
                    var items = (from x in xDoc.Descendants("item")
                        select new {
                            title = x.Element("title").Value,
                            link = x.Element("link").Value,
                            pubDate = Convert.ToDateTime(x.Element("pubDate").Value),
                            description = x.Element("description").Value,
                            category = x.Element("category")?.Value
                        });
                    if (items != null) {
                        foreach (var i in items) {
                            Feed f = new Feed {
                                Title = i.title,
                                Link = i.link,
                                PubDate = i.pubDate,
                                Content = i.description,
                                Category = i.category,
                                Source = source.First().title,
                                SourceLink = source.First().link,
                                SourceDescription = source.First().description,
                            };
                            feeds.Add(f);
                        }
                    }
                }
                return feeds.OrderByDescending(o => o.PubDate);
            }  
            catch {  
                throw;
            }  
        }  
    }  
}