import React from 'react';
import './zion.css';
import zionimg from "../map/zion.jpeg";

function ZionPage() {
  return (
    <div className="blog-container">
      <div className="image-container-page">
        <img src={zionimg} alt="Blog post cover" />
      </div>
      <div className="content-container-page">
        <h1 className="title">Zion National Park</h1>
        <p className="date">September 16, 2023</p>
        <div className="body-text">
          <p>Nestled between the Grand Canyon towards the South and Bryce Canyon running North is the oasis of Zion National Park in Southwestern Utah.</p>
          <p>Towering, vertical canyons of gorgeous red rock are cut by the Virgin River and its creeping tributaries, forming a deep, narrow gorge where wildlife pervades.</p>
          <p>With this spectacular backdrop, Zion has become a popular stop for tourists.</p>
          <h3>Getting to the park</h3>
          <p>You have a few options. If you fly/drive into Las Vegas airport and rent a car (must), Zion is only a ~2.5 hour drive. Flights to Vegas are cheaper, and this way you can also spend a few days in the iconic sin city towards the beginning and/or end of your trip. On top of that, Vegas is the central point between Utah's parks and the great Grand Canyon (2.5 hours away).</p>
          <p>If you are not interested in spending a day or two in Vegas, and willing to spend a little bit of extra money, you can also fly into Saint George airport in Utah, which is less than an hour from the national park. You won't be able to git Grand Canyon (over 5 hour drive), but Bryce and Zion are convenient.</p>
          <p>Your final option is flying into Salt Lake City, and driving to Zion (4 hours). Bryce is along the same route and just under two hours from Zion. This time on our trip, we took the Vegas route, but we hope to fly into Salt Lake City on the next visit and hit Arches and Canyonlands.</p>
          <p></p>
          <h3>Where to stay</h3>
          <p>The most convenient place to stay is Zion Lodge, but you must book early. Zion lodge is operated by the National Park Service itself, and thus the only place to stay within the main park. In fact, cars are not allowed to run through the main canyon, unless you are driving to stay at the lodge. All other transportation is via a tram service that runs through 9 stops every ~10 minutes. I recommend this option for big groups and families. You will always be in proximity to the lodge and tram, and it makes splitting a large party easy. Some can take a break, relax and grab food at the lodge, while others can continue hiking in the same vicinity.</p>
          <a href="https://www.zionlodge.com/about-us/">Zion Lodge</a>
          <p>If the Zion lodge doesn't work out, you can stay in the nearly hotels/cabins outside the national park. Expect to drive ~10-30 minutes to reach the park. We stayed in the Fairfield Marriot 10 miles down the mountain, and it was beautiful. The only issue is parking at the visitor center, especially if you drive up between 9-10 or during the weekends/peak visiting seasons. I would consider parking under the enterance of the national park gates, walking up to the visitor center (~half mile), and then taking the tram up to the trail heads. You can try to road-side park along the main road up the canyon, but there are very few spots.</p>
          <h3>Getting around the park</h3>
          <p>The national park is organized with 9 stops, the first starting down at the visitor center, and the final stopping at the top of the main road through the canyon, where the famous Narrows hike begins. At the gate of the national park, you will recieve a pamphlet describing the different hikes which begin at the trailheads along those 9 stops. The most iconic hikes are the following: Narrows, Angels Landing, Scouts Landing... these hikes are a bit challenging because you need to ascend 1500+ feet to reach the top of the canyon. But you'll get the iconic birdseye views and stunning photographs of Zion from these points.</p>
          <p>Other popular hikes included the Emerald Pools hike and the Watchman trail which feature views from lower elevation and may feature more wildlife spotting around the river (deer, rams, etc.) </p>
          <p meta charset="UTF-8">To complete the Angels Landing hike, you'll need to get a permit at least one day in advance (I didn't know this going in &#x1F614;). The Angels Landing is one of the most popular hikes in the USA, a little bit dangerous on the steep climb with open, unfenced cliffs on both sides, but (from what I heard) super worth it. When I visit again, I'll be sure to do this climb.</p>
        </div>
      </div>
    </div>
  );
}

export default ZionPage;
