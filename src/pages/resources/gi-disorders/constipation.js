import React from 'react'
import Link from 'gatsby-link'

import SideNavGD from '../../../components/sidenav-gd'
import homeimage from '../../../images/home-page-image.jpg'

const Constipation = () => (
  <div className="service-content-resources">
    <SideNavGD />
    <div className="right-side">
      <img alt="Home Page Image" src={homeimage} className="img-responsive" />
      <h1 className="main-subject">Constipation</h1>		
      <p>
        Constipation can be defined as infrequent or hard pellet stools,
        or difficulty in evacuating stool. Passing one or more soft, 
        bulky stool every day is a desirable goal. While troublesome,
        constipation is not usually a serious disorder. However, 
        there may be other underlying problems causing constipation, 
        and, therefore, testing is often recommended.
      </p>
      <h2 className="sub-topic">What causes Constipation ?</h2>
      <p>
        The stomach churns and mixes food so it can be digested. 
        The near-liquid food enters the small intestine which extracts 
        calories, minerals and vitamins. The small intestine ends in the 
        right-lower abdomen where it enters the colon. The colon, or 
        large bowel, is 5 to 6 feet long. Its function is to withdraw 
        water from the liquid stool, so that by the time it reaches 
        the rectum there is a soft-formed stool. If an excessive amount
        of water is extracted, the stool can become hard and difficult to expel.
        <br/>
        <br/>
        Constipation is often caused by a lazy colon that does not contract
        properly and fails to move the stool to the rectum. The colon can 
        also become spastic and remain contracted for a prolonged time. 
        In this case, stool cannot move along. Too much water is absorbed
        and hard pellet-like stool develops.
        <br/>
        <br/>
        Constipation also can result from a mechanical obstruction, 
        such as tumors or advanced diverticulosis, a disorder that 
        can distort and narrow the lower-left colon. Other conditions 
        that can produce a sluggish, poorly contracting bowel include: 
        pregnancy, anal fissures and hemorrhoids, certain drugs, 
        thyroid hormone deficiency, the abuse of laxatives, travel, 
        and stress.
      </p>
      <h2 className="sub-topic">Diagnosis</h2>
      <p>
        The patient's medical history is the most important factor in diagnosing
        constipation. The physician will perform a physical exam and might
        perform the following exams:
      </p>
      <ul>
				<li>
					Certain blood tests. 
				</li>
				<li>
					Barium Enema (x-ray) of the lower bowel or colon. 
				</li>
				<li>
					A sigmoidoscopy (a lighted, flexible endoscope) to rule out a 
					mechanical blockage of the lower bowel, such as a tumor. 
					This exam allows the physician to view the bowel wall and 
					obtain biopsies (tissue samples) of any suspicious areas. 
				</li>
				<li>
					Colonoscopy (visual exam of the inside of the entire colon 
					using a flexible fiberoptic colonosope). This exam is performed
					under mild sedation. 
				</li>
				<li>
					A marker test (a capsule containing markers) may be done. 
					The patient swallows a capsule, and some days later an x-ray 
					is taken to analyze the pattern and distribution of markers in the colon. 
				</li>
				<li>
					Manometry (pressure measurements) of the rectum and lower colon. 
				</li>
			</ul>
      <h2 className="sub-topic">Treatment</h2>
      <p>
        Because there are many causes of constipation, treatment depends on the 
        physician's findings and diagnosis. After serious problems are excluded,
        chronic constipation usually responds to simple measures, such as adding
        fiber, bran or a bulking agent to the diet. 
        <br/>
        <br/>
        General guidelines for treating constipation include: eating regularly,
        drinking plenty of liquids each day, regular walking and performing
        aerobic exercise. In particular, patients should respond to the
        urge to defecate. Retaining stool at this point will aggravate the condition.
        <br/>
        <br/>
        <u>Diet</u> - Foods that are high in roughage, bran and fiber are essential 
        in correction and preventing constipation. In parts of the world
        where unprocessed grain is used and where large amounts of fiber
        are consumed, there is little constipation, and passing one or two 
        large, soft stools a day is normal. The following foods should be 
        eaten daily in adequate amounts:
      </p>
      <ul>
				<li>
          Whole grain breads (whole wheat)
        </li>
				<li>
          Bran cereals
        </li>
				<li>
					Vegetables: Root (potatoes, carrots, turnips), 
					leafy greens (lettuce, celery, spinach), or cooked high residue (cabbage) 
				</li>
				<li>
					Fruit: Cooked or stewed (prunes, applesauce) 
					or fresh fruit (skin and pulp)
				</li>
			</ul>
      <p>
        <u>Bulking Agents</u> - Fiber is the undigested part of plant food 
        that passes into the colon. Certain types of fiber can absorb and hold 
        large amounts of water. . This, in turn, results in a larger, 
        bulkier stool that is softer and easier to pass. A Adequate fiber in food or 
        from supplements is recommended daily. This type of water-retaining 
        fiber generally is easily obtained each day by one of the following:
      </p>
			<ul>
				<li>
					<u>Food bran</u> - This is available as wheat, oat or rice bran. 
					Processing of wheat and other grains removes this 
					valuable fibrous part of the food so these processed products should be avoided. 
				</li>
				<li>
					<u>Psyllium bran</u> - The psyllium plant is remarkable because its ground 
					seeds can retain so much water. This product is available as 
					metamucil, Konsyl, Effersyllium, Per Diem Fiber, or the less
					expensive generic preparation in drug and health food stores. 
					Although labeled a laxative, it really is not a laxative.
				</li>
				<li>
					<u>Methylcellulose</u> - This is another fiber derived from wood that
					also retains water. It is available as Citrucel. 
				</li>
			</ul>
      <h2 className="sub-topic">Do Laxatives help ?</h2>
      <p>
        There are two main types of laxatives: stimulants (chemical) and 
				saline (liquid or salt). They occasionally help temporary 
				constipation problems. However, chronic use of laxatives is 
				discouraged because the bowel becomes dependent upon them.    
				Bowel regularity should occur without laxatives. An occasional 
				enema is preferable over the chronic use of laxatives.
      </p>
      <h2 className="sub-topic">Surgery</h2>
      <p>
        With certain medical conditions, such as severe diverticulosis, 
				and with extreme constipation in some younger patients,
				surgery may provide relief.
      </p>
      <h2 className="sub-topic">Bowel Retraining Program</h2>
      <ol>
				<li>
					Do not use laxatives.
				</li>
				<li>
					Eat a diet high in roughage, such as bran cereals and leafy vegetables.
				</li>
				<li>
					 Drink six ounces of prune or apricot juice each morning.
				</li>
				<li>
					Eat two large servings of stewed fruit each day.
				</li>
				<li>
					Take one heaping tablespoon of a psyllium-based bulking 
					agent twice a day. Use the NutraSweet product to avoid excessive calories.
				</li>
				<li>
					Eat a normal breakfast.
				</li>
				<li>
					Set aside 15 minutes after breakfast to sit on the toilet,
					but do not strain to have a bowel movement. 
				</li>
				<li>
					If you do not have a bowel movement by the third day,
					use an enema and repeat the above steps.
				</li>
			</ol>
      <h2 className="sub-topic">Summary</h2>
      <p>
        Constipation usually is a short-term disorder that is easily 
				treated by simple measures. However, the condition may reflect 
				a serious underlying condition. For chronic constipation, 
				it is important that the patient understands how this occurs.
				By the intake of proper foods and fiber supplements, 
				it is usually possible to retrain the colon so that normal regularity occurs
      </p>
    </div>
  </div>
)

export default Constipation
