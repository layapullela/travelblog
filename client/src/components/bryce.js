import React from 'react';
import './zion.css';
import bryceimg from "../map/bryce.jpeg";

function BrycePage() {
  return (
    <div className="blog-container">
      <div className="image-container-page">
        <img src={bryceimg} alt="Blog post cover" />
      </div>
      <div className="content-container-page">
        <h1 className="title">Bryce Canyon</h1>
        <p className="date">September 17, 2023</p>
        <div className="body-text">
          <p>The Native Paiute Indians who once inhabited the mountains of Southwestern Utah conjectured a punishment for those who commited "bad deeds"-- turning into a hoodoo.</p>
          <p>Atop the peaks of the gorgeous Colorado Plateau in Utah is Bryce Canyon National Park, featuring the largest collection of towering, sharp, red sandstone natural sculptures, known as hoodoos.  </p>
          <p>Visitors from all over the world come to visit Bryce to see this amphetheater of natural creation</p>
          <p>But it's not only the hoodoos that contribute to Bryce Canyon's beauty and uniqueness. The surrounding greenery of the Colorado plateau with flowing water, in the backdrop of purple peaks makes Bryce a remote gem.</p>

          <p>Many people visit Zion and Bryce together in the same trip. These parks, however, are vastly different. Zion is much more popular, featuring a village center under the park, and ample big name hotels. The climate is semi-arid and in only ~4000 feet altitude.</p>
          <p>Bryce on the other hand is far more remote. It towers at ~8,000 feet on the mountain tops of rural Southwest Utah. There are no big name hotels in the area, only log cabins embedded within the pine trees of the park, and a few hotels/cabins outside the park in nearby hamlets/cities.</p>

          <h3>How to get to Bryce</h3> 
          <p>If you come from the South, fly into Las Vegas (more options) or Saint George airport. As you drive up the 15 freeway, you can knock out Zion National Park as well. You must rent a car for this trip.</p>
          <p>The other option is to fly into Salt Lake City airport. The drive is only 4 hours, and you have the option of hitting several national parks this way: Zion, Canyonlands, and Arches.</p>

          <h3>Where to stay</h3>
          <p>Like Zion, Bryce has a lodge operated by the NPS, which is the most convenient/popular place to stay for tourists. From here, parking is easy, and reaching the hiking trails/outlook points via tram is a breeze. On our trip, we stayed in a nearby small town called Tropic at the Bryce Log Cabins. The stay was incredibly peaceful and we had no complains of the residence. There was a gas station just across the street, convenience store, and 2-3 dinner stops and one coffee/pastry shop. The drive to Bryce was approximately ~10 minutes from Tropic.</p>
          <a href="https://www.visitbrycecanyon.com/">The Lodge at Bryce Canyon (in park)</a>
          <p></p>
          <a href="https://www.brycecanyonlogcabins.com/en-US">Bryce Log Cabins (Tropic, UT)</a>

          <h3>Hikes</h3>
          <p>One of the most reccomended itinery at Bryce was watching the sunsise, which tourists swore was a spectacular sight (worth waking up for!) There is a dedicated point at the park called Sunrise point where you can view the Hoodos as their peaks get illuminated by the rising sun. If it's early enough in the morning, you may be able to find parking by the Zion lodge and walk to the Sunrise point, but if not, you can take a tram from the visitor center, reach the sunset point, and walk down about a half mile to reach the Sunrise viewpoint. Many tourists come to see the sunrise, so you may meet a crowd.</p>
          <p>As for the hikes, the pamplet at the visitor center outlines ~6 hikes around the canyon. No matter which you take, I highly reccomend descending down into the amphetheater to see the hoodoos at the ground level. You get a real sense of just how grand and magnificent they are looking up. However, the ascent back up to the rim (+1000 feet) may be challenging, especially in altitude. If you prefer, the Rim Trail presents a wonderful top level view of the amphetheater from every angle on the road-side of the canyon. It's a beautiful option, but again, I highly reccomend descending into the canyon. </p>
        </div>
      </div>
    </div>
  );
}

export default BrycePage;
