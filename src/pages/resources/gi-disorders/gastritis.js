import React from 'react'
import Link from 'gatsby-link'

import SideNavGD from '../../../components/sidenav-gd'
import homeimage from '../../../images/home-page-image.jpg'

const Gastritis = () => (
  <div className="service-content-resources">
    <SideNavGD />
    <div className="right-side">
      <img alt="Home Page Image" src={homeimage} className="img-responsive" />
      <h1 className="main-subject">Gastritis</h1>		
      <p>
        Gastritis is an inflammation of the stomach lining. In someone who suffers from
        gastritis, the lining of the stomach often looks red, irritated and swollen,
        and it may also have raw, abraded areas that can bleed.
        <br />
        <br />
        Gastritis is caused by an irritant material, such as gastric acid, bile reflux,
        medications, or toxins, and is often combined with an impairment of natural 
        protective mechanisms.
        <br/>
        <br/>
        Many different illness and irritants, either acting alone or in combination,
        can trigger the inflammation of gastritis. Some of the most common triggers include:
      </p>
      <ol>
        <li>
          Infection with Helicobacter pylori (H-pylori) bacteria.
        </li>
        <li>
          Viral infection
        </li>
        <li>
          Irritants - Chemical and environment irritants such as alcohol, 
          cigarette smoke, aspirin and non-steroidal anti-inflammatory 
          drugs (Ibuprofen and Naproxen Sodium) can damage the stomach
          lining and cause gastritis.
        </li>
      </ol>
      <h2 className="sub-topic">Symptoms of Gastritis may include:</h2>
      <ol>
				<li>
					Abdominal discomfort that may become worse after eating. 
				</li>
				<li>
					Nausea, sometimes with vomiting Poor appetite.
				</li>
				<li>
					Poor appetite. 
				</li>
				<li>
					Belching, bloating or a feeling of fullness in the abdomen. 
				</li>
				<li>
					Bloody vomiting of passing black stool. 
				</li>
			</ol>
      <h2 className="sub-topic">Different type of Gastritis</h2>
      <p>
        Gastritis may be classified according to the inflammatory pattern as acute,
        (erosive, hemorrhagic), or chronic (non-erosive gastritis). In acute gastritis,
        erosive mucosal damage occurs. Acute gastritis may be associated with serious
        illness, alcoholism, localized gastric trauma, and gastrectomy.
        <br/>
        <br/>
        Chronic gastritis (superficial gastritis, atrophic gastritis, gastric atrophy, 
        non-erosive gastritis and non-specific gastritis) is common in adults
        and may be associated with normal aging, gastric ulcers, pernicious
        anemia and H. pylori infection.
      </p>
      <ol>
				<li>
					In superficial gastritis, pathological changes are limited to
					the upper one third of the mucosa.
				</li>
				<li>
					Atrophic gastritis involves the fill thickness of the mucosa, 
					producing atrophy of gastric glands with loss of chief and parietal cells.
				</li>
				<li>
					In gastric atrophy, there is marked or total gland loss but
					little inflammation and the mucosa is thinned.
				</li>
			</ol>
      <h2 className="sub-topic">Treatment</h2>
      <p>
        Treatment of gastritis without bleeding depends on the patient's sign and symptoms.
        For patients who have mild and uncomplicated gastritis, the treatment approach includes:
      </p>
      <ol>
        <li>
          Stopping smoking.
        </li>
        <li>
          Stopping alcohol use temporarily- after gastritis heals, patients 
          may be advised no more than one or two drinks a day or none at all.
        </li>
        <li>
          Avoiding foods that are fatty, spicy or very acidic such as coffee,
          orange juice and tomato juice.
        </li>
        <li>
          Pharmacological treatment may involve the use of antacids, 
          H2 blocker such as Zantac, Proton Pump inhibitor medication 
          such as Prevacid, Prilosec and Nexium.
        </li>
      </ol>
      <h2 className="sub-topic">Prevention</h2>
      <p>
        To help prevent gastritis:
      </p>
      <ol>
        <li>
          Don't smoke.
        </li>
        <li>
          If you drink alcohol, do so in moderation.
        </li>
        <li>
          If you take a non-steroidal anti-inflammatory drug to treat
          a medical problem, and this medicine upsets your stomach,
          stop the medicine and speak with your doctor.
        </li>
        <li>
          Always wash your hands before you eat and after you use the restroom.
        </li>
      </ol>
    </div>
  </div>
)

export default Gastritis
