import React from 'react'
import Link from 'gatsby-link'

import SideNavGD from '../../../components/sidenav-gd'
import homeimage from '../../../images/home-page-image.jpg'

const Hemorrhoids = () => (
  <div className="service-content-resources">
    <SideNavGD />
    <div className="right-side">
      <img alt="Home Page Image" src={homeimage} className="img-responsive" />
      <h1 className="main-subject">Hemorrhoids</h1>		
      <p>
        Hemorrhoids, or piles, are one of mankind's most common and nagging
        disorders. By themselves, hemorrhoids are rarely serious, 
        but they can be extremely troublesome. In some instances, 
        they may mask a more serious disorder, such as colon or rectal 
        cancer. Therefore, hemorrhoids require the proper diagnosis and 
        treatment by a physician.
        <br/><br/>
        Hemorrhoids are dilated (enlarged) veins that occur in and 
        around the anus and rectum. They may be external (outside the anus)
        or internal and slip to the outside. In both of these instances, 
        the hemorrhoids can be felt and seen as lumps or knots. Hemorrhoids
        also may remain inside the rectum and so cannot be felt or seen. 
        These are called internal hemorrhoids.
      </p>
      <h2 className="sub-topic">What causes Hemorrhoids ?</h2>
      <p>
        A common cause of hemorrhoids is simply the standing 
        position, in which all the blood above the rectum exerts
        pressure on the rectal and anal areas. Other conditions
        which contribute to hemorrhoids are: poor bowel habits,
        constipation, diarrhea, pregnancy, obesity, and especially
        frequent straining when having a bowel movement.
        However, some patients will have none of these conditions
        and still develop hemorrhoids.
      </p>
      <h2 className="sub-topic">What are the Complications ?</h2>
      <p>
        Hemorrhoids can produce several uncomfortable, but non-serious problems.
        <br/>
        <br/>
        <u>Thrombosis and Pain</u> - A blood clot in the hemorrhoid may 
        cause severe pain and usually demands immediate medical attention.
        <br/>
        <br/>
        <u>Bleeding</u> - Hemorrhoids can ooze fresh red blood, whether located 
        externally or internally. External hemorrhoids often cause dripping
        of blood from the anus while sitting on the toilet. The blood might
        also be seen as soiling of the underwear. Internal hemorrhoids 
        that bleed may produce fresh blood in the stool.
        <br/>
        <br/>
        <u>Itching and irritation</u> - External hemorrhoids can be itchy, 
        especially if the area is moist and irritated.
      </p>
      <h2 className="sub-topic">Do Hemorrhoids cause Cancer ?</h2>
      <p>
        Hemorrhoids do not develop into cancer. However, both 
        hemorrhoids and cancer can cause rectal bleeding. 
        When rectal bleeding occurs in persons over age 30, 
        and especially in those over age 50, it should be 
        considered a serious problem until an exact diagnosis 
        is made. The physician who directly examines the rectal
        area can make the specific diagnosis.
      </p>
      <h2 className="sub-topic">Treatment</h2>
      <p>
        Treatment of hemorrhoids varies depending on where they are,
				what problems they are causing, and how serious they are. 
				Often, time and the normal process of healing clears hemorrhoids
				with little or no specific treatment. When hemorrhoids require 
				treatment, the following general measures are recommended:
      </p>
      <h3>Conservative Treatment</h3>
      <ul>
        <li>
          Keep the anal area clean using a mild soap and gentle dabbing
          after a bowel movement. Avoid vigorous rubbing of the area. 
        </li>
        <li>
          Keep the anus and hemorrhoids as dry as possible using 
          talcum powder and a pad of soft tissue to absorb moisture. 
        </li>
        <li>
            Eat a diet high in fiber (bran) and roughage. Fiber and bran
            retain water in the stool, producing soft, bulky stools that
            are easier to pass and reduce the tendency to develop 
            hemorrhoids. Bulking agents such as Metamucil, Effersylium, 
            Konsyl, Citrucel, and Per Diem Fiber, are available in 
            drug stores. These also come in less expensive generic versions. 
        </li>
        <li>
          Avoid straining when having a bowel movement. 
        </li>
        <li>
          When thrombosis, pain, and tenderness occur, a 10 to 
          20 minute hot tub bath two to four times daily brings 
          heat to the area providing relief from the pain, and
          promotes healing. This is called a Sitz bath.
        </li>
      </ul>
      <h2 className="sub-topic">Ligation</h2>
      <p>
        A common method of treating internal hemorrhoids is to 
				use a small rubber band to tie off the base of the swollen
				vein. The blood circulation stops and then the hemorrhoid 
				falls off. Repeated treatments are sometimes necessary.
      </p>
      <h2 className="sub-topic">Infrared Photocoagulation</h2>
      <p>
        An infrared light source can be used to coagulate internal
				hemorrhoidal veins. Often, more than one treatment is necessary.
      </p>
      <h2 className="sub-topic">Lasers</h2>
      <p>
        A laser directs a high-intensity light beam at tissue and 
				so produces heat, thereby coagulating or cauterizing the
				hemorrhoid. This technique is still in the research phase,
				but may have application in the future.
      </p>
      <h2 className="sub-topic">Surgery</h2>
      <p>
        Surgery is sometimes recommended in treating hemorrhoids.
				It usually is reserved for:
      </p>
      <ul>
        <li>
          Acute, painful clot (thrombosis) of hemorrhoids.
        </li>
        <li>
          Profusely or continuously bleeding hemorrhoids. 
        </li>
        <li>
          Longstanding, irreversible, and large hemorrhoids.
        </li>
        <li>
          When other treatment is unsuccessful.
        </li>
      </ul>
      <h2 className="sub-topic">To Prevent Hemorrhoids</h2>
      <ul>
        <li>
          Eat plenty of fiber, bran, or roughage, or use
          a bulking agent to maintain regular, soft bowel movements. 
        </li>
        <li>
          Do not delay or try to prevent bowel movement when the urge is present. 
        </li>
        <li>
          Exercise, especially aerobic, may help produce more regular bowel movements. 
        </li>
        <li>
          Drink plenty of liquids and eat regularly scheduled meals. 
        </li>
        <li>
          Keep the area around the anus clean and dry. 
        </li>
      </ul>
      <h2 className="sub-topic">Summary</h2>
      <p>
        Hemorrhoids are an especially common disorder and often clear 
				up by themselves or with minimal treatment. Treatment typically
				is simple and effective, although surgery occasionally is 
				necessary. Hemorrhoids can mask a more serious disorder 
				and, therefore, must be evaluated and diagnosed properly by a physician.
      </p>
    </div>
  </div>
)

export default Hemorrhoids
