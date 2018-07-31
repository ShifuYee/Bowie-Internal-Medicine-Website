import React from 'react'
import Link from 'gatsby-link'

import SideNavDI from '../../../components/sidenav-di'
import homeimage from '../../../images/home-page-image.jpg'

const ClearLiquidDiet = () => (
  <div className="service-content-resources">
    <SideNavDI />
    <div className="right-side">
      <img alt="Home Page Image" src={homeimage} className="img-responsive" />
      <h1 className="main-subject">Clear Liquid Diet</h1>
      <h2 className="sub-topic">Purpose</h2>	
      <p>
        A diet of clear liquids gives some energy and maintains vital body 
        fluids, salts, and minerals when normal food intake is interrupted. 
        Clear liquids are easily absorbed by the body. They reduce stimulation 
        of the digestive system, and leave no residue in the intestinal tract.
        <br /> 
        This is why a clear liquid diet is often recommended in preparation 
        for surgery, and is generally the first diet given by mouth after 
        surgery. Clear liquids are given when a person has been without food 
        by mouth (NPO) for a long time. This diet is also used in preparation 
        for medical procedures such as sigmoidoscopy, colonoscopy, or certain 
        x-rays.
      </p>
      <h2 className="sub-topic">Nutrition Facts</h2>
      <p>
        A clear liquid diet is not adequate in calories and nutrients. 
        It should not be used for more than five days unless high-protein gelatin
        or other low-residue supplements are added. 
      </p>
      <h2 className="sub-topic">Special Considerations</h2>
      <ol class="numberLeft">
        <li>
          <u>Limitations</u> - The physician may limit certain liquids,
          depending on the patient's condition, 
          or the surgery or test being performed. 
          Therefore, individual instructions should be strictly followed. 
        </li>
        <li>
          <u>What is a clear liquid?</u> A good rule-of-thumb is anything you can see through.
          For example, apple juice is a clear liquid; milk is not. If unsure,
          check with the physician or registered dietitian. 
        </li>
        <li>
          Should persistent abdominal cramps or discomfort occur with a clear liquid diet
          after surgery and fasting, the patient should notify
          the physician, nurse, or dietitian at once.
        </li>
        <li>
          <u>Preparing for a medical test</u> - It is important that the clear liquid diet be followed exactly.
          Remember that the value of the examination will depend on getting a thoroughly clean digestive tract.
        </li>
      </ol>
      <h2 className="sub-topic">Food Groups</h2>
      <table className="diet-info">
        <tbody>
          <tr>
            <td><b>Group</b></td>
            <td><b>Recommend</b></td>
            <td><b>Avoid</b></td>
          </tr>
          <tr>
            <td>Sweets & Desserts</td>
            <td>Gelatin, fruit ice, Popsicles without pulp, clear hard candy</td>
            <td>All others</td>
          </tr>
          <tr>
            <td>Fats & Oils</td>
            <td>None</td>
            <td>All</td>
          </tr>
          <tr>
            <td>Milk & Milk Products</td>
            <td>None</td>
            <td>All</td>
          </tr>
          <tr>
            <td>Meat or Meat Substitutes</td>
            <td>None</td>
            <td>All</td>
          </tr>
          <tr>
            <td>Vegetables</td>
            <td>None</td>
            <td>All</td>
          </tr>
          <tr>
            <td>Fruits</td>
            <td>Fruit juices without pulp</td>
            <td>Nectars, all fresh canned and frozen fruits</td>
          </tr>
          <tr>
            <td>Breads & Grains</td>
            <td>None</td>
            <td>All</td>
          </tr>
          <tr>
            <td>Soups</td>
            <td>Bouillon, consommé, fat free broth</td>
            <td>All others</td>
          </tr>
          <tr>
            <td>Beverages</td>
            <td>Coffee, tea, soft drinks, water, lactose-free, low residue supplements if approved by physician</td>
            <td>All others</td>
          </tr>
        </tbody>
      </table>
      <h2 className="sub-topic">Sample Menu</h2>
      <table className="diet-info">
        <tbody>
          <tr>
            <td><b>Breakfast</b></td>
            <td><b>Lunch</b></td>
            <td><b>Dinner</b></td>
          </tr>
          <tr>
            <td>Strained fruit juice 1 cup</td>
            <td>Consommé ¾ cup</td>
            <td>Consommé ¾ cup</td>
          </tr>
          <tr>
            <td>Gelatin ½ cup</td>
            <td>Strained fruit juice 1 cup</td>
            <td>Strained fruit juice 1 cup</td>
          </tr>
          <tr>
            <td>Hot tea with sugar & lemon</td>
            <td>Fruit ice ½ cup</td>
            <td>Fruit ice ½ cup</td>
          </tr>
          <tr>
            <td />
            <td>Gelatin ½ cup</td>
            <td>Gelatin ½ cup</td>
          </tr>
          <tr>
            <td />
            <td>Hot tea with sugar & lemon	</td>
            <td>Hot tea with sugar & lemon	</td>
          </tr>
        </tbody>
      </table>
      <h2 className="sub-topic">Sample diet provides the following</h2>
      <table className="diet-info">
        <tbody>
          <tr>
            <td>Calories</td>
            <td>660</td>
          </tr>
          <tr>
            <td>Protein</td>
            <td>6 gm</td>
          </tr>
          <tr>
            <td>Carbohydrates</td>
            <td>209 gm</td>
          </tr>
          <tr>
            <td>Fat</td>
            <td>Virtually none</td>
          </tr>
          <tr>
            <td>Sodium</td>
            <td>1500 mg</td>
          </tr>
          <tr>
            <td>Potassium</td>
            <td>1440 mg</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)

export default ClearLiquidDiet
