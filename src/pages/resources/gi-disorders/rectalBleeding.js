import React from 'react'
import Link from 'gatsby-link'

import SideNavGD from '../../../components/sidenav-gd'
import homeimage from '../../../images/home-page-image.jpg'

const RectalBleeding = () => (
  <div className="service-content-resources">
    <SideNavGD />
    <div className="right-side">
      <img alt="Home Page Image" src={homeimage} className="img-responsive" />
      <h1 className="main-subject">Rectal Bleeding</h1>		
      <p>
        Rectal bleeding is a sign that something is wrong. It is usually 
        something minor that can be easily diagnosed, but not always. 
        It is, therefore, important that the specific cause of rectal 
        bleeding be identified so appropriate treatment can be started
        and the problem corrected. Even though rectal bleeding may not
        be serious, one must never assume this to be the case. Most 
        importantly, rectal bleeding may be a sign of rectal cancer.
      </p>
      <h2 className="sub-topic">The causes of Rectal Bleeding</h2>
      <ul>
				<li>
					<u>Hemorrhoids</u> - These are dilated blood vessels 
					or veins in the anal or rectal area. They can occur on the outside
					where they are felt as small bumps when wiping. Or they may be
					on the inside where they are usually painless. They develop
					quite commonly with chronic constipation and especially with
					pregnancy. Hemorrhoids are usually treated with stool bulking
					agents that soften the stool and reduce straining.
				</li>
				<li>
					<u>Fistula</u> - A fistula is an abnormal, burrowing channel that
					usually runs from the rectum to the skin around the anus. 
					It often will drain a whitish discharge, but it can also bleed.
					While it is usually just a local problem, a fistula can be 
					associated with chronic inflammation in other parts of the 
					intestinal tract. This disorder is called Crohn's disease. 
					Fistulas are treated with antibiotics and hot baths. 
					If they persist, surgery is usually required.  
				</li>
				<li>
					<u>Fissure</u> - The passage of a hard stool or severe diarrhea
					may tear the lining tissue of the anus. This problem is similar to 
					having cracked lips in cold weather. Nerve endings and blood vessels
					are exposed so that pain and bleeding occur with bowel movements. 
					Frequent warm baths and bulking agents, used to keep stools soft,
					usually correct this problem. Sometimes surgery is needed. 
				</li>
				<li>
					<u>Diverticulosis</u> - Diverticulosis are pockets or sacs 
					that project from the bowel wall. They balloon out over the years 
					due to recurrent, high pressure spasm of the colon. Occasionally 
					they can bleed. They bleed a lot and the blood comes all at one 
					time. It does not bleed in small amounts with bowel movements 
					over days or weeks. Serious, persistent diverticular bleeding 
					usually requires hospitalization and, at times, surgery.
				</li>
				<li>
					<u>Proctitis and Colitis</u> - Either the rectum, colon, 
					or both, can become inflamed and ulcerated. There are a number of 
					disorders which cause the inside surface of the bowel to become 
					ulcerated and bleed. There may be rectal urgency, cramps or 
					diarrhea associated with the bleeding. When the inflammation 
					is restricted to the rectum, the condition is called proctitis.
					When the colon is involved, it is called colitis. It is 
					important to identify the specific cause of the inflammation 
					so that appropriate treatment can be started.
				</li>
				<li>
					<u>Polyps and Cancer</u> - Of course, the greatest concern 
					about rectal bleeding is cancer. Polyps are benign growths in the colon. 
					When polyp are a larger size, they can bleed. And certain types of
					polyps turn into cancer. Colon cancer is usually curable when 
					discovered early. It most often occurs in people over the age 
					of 50, but it is not unheard of in younger individuals, even 
					in their 30's or y ounger. Because colon cancer is such a 
					common cancer, it is always considered as a possible diagnosis.
				</li>
				<li>
					<u>Protrusion of the Rectum</u> - Some older individuals
					will have weakened rectal support tissues. Part of the rectum then
					can project from the anus and bleed. This condition is called 
					rectal prolapsed. It can be felt as an abnormal bulging from 
					the rectum when wiping. Surgery is the only effective treatment.  
				</li>
			</ul>
      <h2 className="sub-topic">Diagnosis</h2>
			<h3>The Medical History</h3>
      <ul>
        <li>
          What is the patient's age&#63;
          <br/>
          Older people tend to have polyps and cancer more often. 
        </li>
        <li>
          Is there anal pain and a hard, large stool associated with bleeding&#63;
          <br/>
          A tear of the anus may be the answer. 
        </li>
        <li>
          Does blood drip into the toilet after a bowel movement&#63;
          <br/>
          Bleeding hemorrhoids may be the problem. The color and 
          frequency of the bleeding are additional considerations.
          In most cases, the medical history provides clues, 
          but never the final answer. 
        </li>
      </ul>
      <h3>The Visual and Digital Exam</h3>
      <ul>
        <li>
          The physician will inspect the anal area looking for tears and
          hemorrhoids. A finger exam can provide information when there
          is tenderness or a tumor inside. In men, the prostate is also examined.
        </li>
      </ul>
      <h3>Endoscopy</h3>
      <ul>
        <li>
          There are several types of endoscopes used to view the colon.
          In the office, the physician may use a rigid or, more commonly,
          a flexible viewing sigmoidoscope. This exam is called flexible
          sigmoidoscopy and is performed in 5 to 10 minutes. A more 
          thorough exam is accomplished with a colonoscope, allowing
          the physician to view the entire 5 to 6 foot long colon. 
          Sedation is usually given for this exam. Frequently a bleeding
          lesion will be present beyond the reach of the sigmoidoscope.
          So colonscopy may be the best initial exam. Both exams are 
          usually done on an outpatient basis.
        </li>
      </ul>
      <h3>Barium Enema X-ray</h3>
      <ul>
        <li>
          This is a complementary exam that uses liquid barium inserted
          by enema into the rectum. X rays highlight abnormal shadows,
          such as tumors, diverticuli and colitis. By itself, however,
          it does not identify an actual bleeding point.
        </li>
      </ul>
    </div>
  </div>
)

export default RectalBleeding
