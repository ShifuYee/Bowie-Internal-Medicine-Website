import React from 'react'
import Link from 'gatsby-link'

import SideNavDI from '../../../components/sidenav-di'
import homeimage from '../../../images/home-page-image.jpg'

const HighFiberDiet = () => (
  <div className="service-content-resources">
    <SideNavDI />
    <div className="right-side">
      <img alt="Home Page Image" src={homeimage} className="img-responsive" />
      <h1 className="main-subject">High Fiber Diet</h1>
      <h2 className="sub-topic">Dietary fiber</h2>	
      <p>
        Dietary fiber is the part of a plant that cannot be digested by the body.
        Just as there are many types of plants, there are also many types of fiber.
        Some fiber, such as oat bran, is soluble in water and forms a gelatinous bulk
        that can lower cholesterol. Other fibers, such as wheat bran, are insoluble
        and add bulk to the stool. Both are important and provide health benefits,
        and thus should be included in any healthy diet.
      </p>
      <h2 className="sub-topic">The Function of the Large Intestine</h2>
      <p>
        The principal function of the large intestine (colon) is to remove excess water
        from food waste passing into it from the small intestine. When food passes
        through the large intestine too quickly, not enough water is absorbed by
        the intestine, and diarrhea results. In contrast, if waste material is
        passed too slowly, too much water is absorbed. This results in hard stools
        and constipation, often leading to straining.
      </p>
      <h2 className="sub-topic">The Importance of Dietary Fiber</h2>
      <p>
        Fiber, also called roughage or bulk, is necessary to promote the wavelike contractions
        called peristalsis that moves food through the intestine. High fiber foods expand
        the inside walls of the colon, easing the passage of waste. As fiber passes through
        the intestine undigested, it absorbs large amounts of water, resulting in softer and bulkier stools.
        Rural Africans digest and eliminate the foods they eat in one-third the time it takes people
        who live in Western cultures. The rural African diet is rich in fiber. 
        This speeds up the time required to digest food and expel wastes. 
        <br />
        <br />
        It is believed this helps sweep out harmful substances before they can cause problems in the body.
        In fact, these rural people suffer less from many of the digestive tract diseases that plague Western man, 
        and it is thought that this may be related to the nature of their diet. 
        <br />
        <br />
        A high-fiber diet causes a large, soft, bulky stool that passes through the bowel more easily and quickly.
        Which consequently helps prevent, stop, or even reverse some digestive tract disorders. A softer, larger
        stool helps prevent constipation and straining, which can help avoid or relieve hemorrhoids. 
        More bulk means less pressure in the colon, and this is important in treating irritable bowel syndrome and diverticulosis.
        <br />
        <br />
        Most Americans eat only 10 to 15 grams of fiber a day. The recommended intake is 20 to 35 grams a day.
        High fiber foods, such as fruits and vegetables, also tend to be low in calories,
        so they should not cause weight gain. Fiber pills generally should be avoided. 
        They contain relatively little fiber and are expensive. Fiber-containing foods
        and powdered fiber supplements are better sources.
      </p>
      <h2 className="sub-topic">Irritable Bowel Syndrome and High Fiber Diet</h2>
      <p>
        Irritable bowel syndrome (IBS), sometimes called spastic colon is one of the most common
        disorders of the lower digestive tract. There is no disease present in
        irritable bowel syndrome. However, its symptoms can resemble other disorders.
        The symptoms of IBS are constipation, diarrhea, (or both alternately), abdominal pain,
        cramping and spasms. Acute episodes can be triggered by emotional tension and anxiety,
        poor dietary habits, and certain medications. Increased amounts of fiber in the diet can
        help relieve symptoms of irritable bowel syndrome by producing soft, bulky stools and by helping
        to normalize the time the stool takes to pass through the colon. The increased bulk also reduces
        the pressure necessary to push food waste through the colon. This results in less discomfort. 
        If irritable bowel syndrome is not treated it may lead to diverticulosis of the colon.
      </p>
      <h2 className="sub-topic">High Fiber Diet and Colon Polyp/Cancer</h2>
      <p>
        Colon cancer is a major health problem. It is second to lung cancer in the number
        of deaths per year. In countries where grains are unprocessed and retain
        their fiber, there is a lower incidence of colon cancer. Most colon cancer
        begins as a colon polyp, a benign mushroom-shaped growth that in time grows
        and, in some people, becomes a cancer. Colon cancer is preventable
        if polyps are removed at an early stage. It is now known that the tendency
        to develop colon cancer may be inherited, but there may be other factors
        involved as well. One theory is that carcinogens in the diet and environment
        can stay in contact with the colon wall a longer time and in higher
        concentrations when the diet is low in fiber. A large, bulky stool acts
        to dilute and diffuse these carcinogens and to move them through
        the bowel more quickly. Less carcinogen exposure to the colon may
        mean less colon polyps and lower the chance of developing cancer.
      </p>
      <h2 className="sub-topic">High Fiber Diet and Diverticulosis</h2>
      <p>
        Colon diverticulosis occurs when pockets or sacks bulge out from the bowel wall.
        It is known that these diverticuli occur gradually over time and are due to
        excessive pressure or spasms within the bowel. These pockets usually cause
        no problem, unless infection occurs (diverticulitis) or if they break open,
        causing abscess or peritonitis. A high-fiber diet may act to increase
        the bulk in the stool, which reduces pressure within the colon. 
        By doing so, diverticuli formation may be reduced or even stopped.
      </p>
      <h2 className="sub-topic">High Fiber Diet and Cholesterol</h2>
      <p>
        As noted above, fiber generally is divided into two categories. 
        Insoluble fiber is found in wheat bran and celluloses from vegetables
        and fruits. Soluble fiber is commonly found in oatmeal, oat bran
        (the ideal source), guar gum, psyllium seed, fruit pectin and gum arabic.
        It also acts to lower blood cholesterol by binding with the cholesterol
        in the intestine and carrying it away in the stool. So, a high fiber diet
        should contain both types of fiber.
      </p>
      <h2 className="sub-topic">High Fiber Foods</h2>
      <p>
        High fiber foods can be found in most food groups. 
        Different types of food should be selected to get the benefits of them all.
      </p>
      <ol>
				<li>
					<u>Legumes</u> - Including kidney, pinto, navy, lima, and baked beans.
					The bean family excels in fiber. 
				</li>
				<li>
					<u>Whole Grains</u> - Wheat bran and oat bran are present in a variety of cereals
					and breads. The label should say that the bread contains whole wheat
					or whole grain. Plain wheat bread may lack the fiber. 
				</li>
				<li>
					<u>Whole Fresh Fruits</u> - The valuable pectin fiber is found in the skin and pulp. Figs, prunes, and raspberries have the highest fiber content.
				</li>
				<li>
					<u>Cooked or Stewed Fruit</u> - Prunes and applesauce are good choices. 
				</li>
				<li>
					<u>Green Leafy Vegetables</u> - Lettuce, spinach, celery, and broccoli are good examples. 
				</li>
				<li>
					<u>Root vegetables</u> - Potatoes, turnips, and carrots are all excellent sources. 
				</li>
			</ol>
      <p>
				Since bran can cause rumbling intestinal gas and even some mild cramping,
				it should be started in small amounts initially. The amount can be increased
				as tolerance is acquired. The goal should be 20 to 35 grams of fiber a day,
				which will usually produce 1 to 2 soft, formed stools a day.
			</p>
      <h3>The following are good general rules:</h3>
			<ol>
				<li>
					Drink plenty of liquids, including fruit or vegetable juices and water. 
				</li>
				<li>
					Eat slowly and chew food thoroughly to allow the upper digestive tract
					(esophagus, stomach and small intestine) to work well. 
				</li>
				<li>
					Eat meals at regular intervals.
				</li>
			</ol>
      <h2 className="sub-topic">A Dietary Fiber Supplement May Be Helpful</h2>
      <p>
        Some people have trouble tolerating too much high fiber foods in the diet.
        Stool softening and bulking agents are available over the counter. 
        These products are usually plant fiber that absorbs water and produce 
        the bulk necessary for the digestive tract to perform naturally.
        <br />
        <br />
        Psyllium fiber is found in many commercial products such as Metamucil,
        Per Diem and Konsyl. The regular product contains a fair amount of sugar,
        so it may be preferable to use the sugar free products. Most pharmacies carry
        a generic brand at a significant savings. 
        <br />
        <br />
        Citrucel (hemicellulose) and Equilactin (polycarboxisal) are other bulking agents 
        that can be used. These fiber supplements, in conjunction with foods, 
        offer an easy way to reach the fiber goal of 20 to 35 grams per day.
      </p>
    </div>
  </div>
)

export default HighFiberDiet
