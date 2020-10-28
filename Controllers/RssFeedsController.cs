using Angular8ASPNETCore.Models;  
using Microsoft.AspNetCore.Mvc;  
using System;  
using System.Collections.Generic;  
using System.Globalization;  
using System.Linq;  
using System.Xml.Linq;  
  
namespace Angular8ASPNETCore.Controllers  {  
    [Route("api/[controller]")]  
    [ApiController]  
    public class RssFeedsController : ControllerBase {  
        string RssFeedUrl = "https://nt.se/rss/lokalt/norrkoping";
        List<Feed> feeds = new List<Feed>();
  
        [HttpGet]  
        public IEnumerable<Feed> Get() {  
            try {  
                XDocument xDoc = new XDocument();
                xDoc = XDocument.Load(RssFeedUrl);
                var items = (from x in xDoc.Descendants("item")
                            select new {
                                title = x.Element("title").Value,
                                link = x.Element("link").Value,
                                pubDate = x.Element("pubDate").Value,
                                description = x.Element("description").Value
                            });
                if (items != null)
                {
                    foreach (var i in items) {
                        Feed f = new Feed {
                            Title = i.title,
                            Link = i.link,
                            PubDate = i.pubDate,
                            Content = i.description
                        };
                        feeds.Add(f);
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