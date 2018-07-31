import React from 'react'
import Link from 'gatsby-link'

import SideNavGD from '../../../components/sidenav-gd'
import homeimage from '../../../images/home-page-image.jpg'

const PepticUlcer = () => (
  <div className="service-content-resources">
    <SideNavGD />
    <div className="right-side">
      <img alt="Home Page Image" src={homeimage} className="img-responsive" />
      <h1 className="main-subject">Peptic Ulcer Disease</h1>		
      <p>
        Peptic ulcer disease (PUD) is a very common ailment, affecting one out of 
        eight persons in the United States. The causes of PUD have gradually 
        become clear. With this understanding have come new and better ways 
        to treat ulcers and even cure them.
      </p>
      <h2 className="sub-topic">Anatomy and Function of the Stomach</h2>
      <p>
        The stomach produces a very strong acid. This acid helps digest and break 
        down food before it enters the small intestine (duodenum). The lining of
        the stomach is covered by a thick protective mucous layer which prevents
        the acid from injuring the wall of the stomach.
      </p>
      <h2 className="sub-topic">What Causes Peptic Ulcers</h2>
      <p>
        An ulcer is an open sore in the lining of the stomach or intestine, 
        much like mouth or skin ulcers. Peptic ulcers are eventually caused 
        by acid and pepsin, a digestive stomach enzyme. These ulcers can 
        occur in the stomach, where they are called gastric ulcers. 
        Or they can occur in the first portion of the intestine. 
        These are called duodenal ulcers.
        <br/>
        <br/>
        In other words, it is acid that causes the injury to the stomach
        or bowel lining. However, a revolutionary and startling recent 
        discovery is that most peptic ulcers result from a stomach 
        infection caused by the bacteria, Helicobacter pylori.
      </p>
      <h2 className="sub-topic">Helicobacter Pylori</h2>
      <p>
        This funny-sounding name identifies the basic cause of most peptic ulcers, 
        excluding those caused by aspirin or arthritics drugs. This bacteria has 
        a twisted spiral shape and infects the mucous layer lining of the stomach.
        This infection produces an inflammation in the stomach wall called gastritis.
        The body even develops a protein antibody in the blood against it. 
        <br/>
        <br/>
        The bacteria is probably acquired from contaminated food or water. 
        It is only after H. pylori bacteria injure the protective mucous 
        layer of the stomach, that an ulcer develops.
      </p>
      <h2 className="sub-topic">Aspirin and Arthritis Medications</h2>
      <p>
        Arthritis medications include ibuprofen(Advil), Feldene, Naprosyn,
				Voltaren, Indocin, Aleve, Lodine, Aspirin, and many others, 
				can damage the mucous layer of the stomach. Gastric acid 
				causes the final injury to the stomach lining. 
				<br/>
        <br/>
				H.pylori and certain drugs are the two major factors that cause ulcers. 
				In rare cases, a patient will produce very large amounts of gastric acid
				and develop ulcers. This condition is called Zollinger-Ellison syndrome. 
				Finally, some people get ulcers from unknown reasons.
      </p>
      <h2 className="sub-topic">Symptoms</h2>
      <p>
        Ulcers cause gnawing, burning pain in the upper abdomen. 
        These symptoms frequently occur several hours following a meal, 
        after the food leaves the stomach but while acid production is 
        still high. The burning sensation can occur during the night 
        and be so extreme as to wake the patient. Instead of pain, 
        some patients experience intense hunger or bloating. 
        Antacids and milk usually give temporary relief. 
        Other patients have no pain but have black stools, 
        indicating that the ulcer is bleeding. Bleeding is 
        a very serious complication of ulcers.
      </p>
      <h2 className="sub-topic">Diagnosis</h2>
      <p>
        Therapy of PUD has undergone profound changes. There are now very 
        effective medications to suppress and almost eliminate the 
        outpouring of stomach acid. These acid-suppressing drugs 
        have been dramatically effective in relieving symptoms 
        and allowing ulcers to heal. If an ulcer was caused by 
        aspirin or arthritics drug, then no subsequent treatment 
        is needed. Avoiding these drugs, should prevent ulcer recurrence. 
        <br/>
        <br/>
        The second major change in PUD treatment has been the discovery
        of the H.pylori infection. When this infection is treated with 
        antibiotics, the infection, and the ulcer, do not come back. 
        Increasingly, physicians are not just suppressing the ulcer 
        with acid-reducing drugs, but they are also curing the underlying 
        ulcer problem by getting rid of bacterial infection. 
        If this infection is not treated, the ulcers invariably recur.
        <br/>
        <br/>
        There are a number of antibiotic programs available to treat 
        H.pylori and cure ulcers. Working with the patient, 
        the physician will select the best treatment program available.
      </p>
      <h2 className="sub-topic">What Else Can Be Done</h2>
      <p>
        The factors discussed above have altered the approach to 
				ulcers in a dramatic way. Still, other factors are important:
      </p>
      <ul>
        <li>
          <u>Caffeine and alcohol</u> - Both of these stimulate the secretion of 
          stomach acid and should be avoided in the acute phase of an ulcer.
        </li>
        <li>
          <u>Cigarettes</u> - Nicotine will delay the healing of an ulcer. 
          There are many good reasons to stop cigarette smoking. Healing an ulcer is one of them.
        </li>
        <li>
          <u>Antacids</u> - These agents, purchased over the counter, can be used for relief 
          of peptic ulcer symptoms. Except for bismuth (Pepto Bismol), 
          which actually is used as one of the antibiotics, they do not help heal ulcers.
        </li>
        <li>
          <u>Stress</u> - In the past, stress and emotions were felt to be a major cause 
          of ulcers. Now it is known that, by itself, stress rarely causes an 
          ulcer although it probably can aggravate the symptoms.
        </li>
        <li>
          <u>Surgery</u> - Surgery used to be a major form of ulcer treatment. Now, 
          it is the exceptional patient who needs surgery for an ulcer 
          complications such as perforation, obstruction, or uncontrolled hemorrhaging.
        </li>
      </ul>
      <h2 className="sub-topic">Summary</h2>
      <p>
        A new era of peptic ulcer disease is at hand. A firm understanding 
        of how ulcers occur, new potent acid-suppressing drugs, and 
        the implications of H.pylori infection have revolutionized 
        the treatment of peptic ulcers. The future is indeed bright 
        for patients with peptic ulcer disease.
      </p>
    </div>
  </div>
)

export default PepticUlcer
