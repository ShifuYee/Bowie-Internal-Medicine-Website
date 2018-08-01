import React from 'react'
import Link from 'gatsby-link'

import SideNavDI from '../../../components/sidenav-di'
import homeimage from '../../../images/home-page-image.jpg'

const LowFiberLowResidueDiet = () => (
  <div className="service-content-resources">
    <SideNavDI />
    <div className="right-side">
      <img alt="Home Page Image" src={homeimage} className="img-responsive" />
      <h1 className="main-subject">Low Fiber Low Residue Diet</h1>
      <h2 className="sub-topic">Purpose</h2>	
      <p>
        Dietary fiber is the indigestible part of plants that maintains the structure of the plant.
        Dietary fiber includes cellulose, hemicellulose, polysaccharides, pectins, gums, mucilages,
        and lignins. Although they are chemically unrelated, they all resist digestion by
        the human body. It is this resistance that makes these fibers important in both the normal
        functioning and in disorders of the large intestine or colon. 
        <br />
        <br />
        In certain medical conditions, it is important to restrict fiber. These include acute
        or subacute diverticulitis, and the acute phases of certain inflammatory conditions of
        the bowel-ulcerative colitis or Crohn's disease. After some types of intestinal surgery,
        a low fiber diet is used for a period of time after a colostomy or ileostomy is performed.
      </p>
      <h2 className="sub-topic">Nutrition Facts</h2>
      <p>
        Depending upon individual food selection, the Low Fiber, Low Residue Diet is adequate
        in all nutrients (National Research Council's Recommended Dietary Allowance).
        If the diet must be strict and followed over a long period of time, 
        the intake of fruits and vegetables may not be adequate; and/or on a low residue diet,
        there may not be enough calcium included. In these cases, a multi-vitamin supplement
        or liquid nutritional supplement may be needed.
      </p>
      <h2 className="sub-topic">Special Considerations</h2>
      <p>
        If a low fiber or low residue diet results in abdominal cramps or discomfort, 
			  notify the dietitian or physician immediately.
      </p>
      <h2 className="sub-topic">Food Groups</h2>
      <table className="diet-info">
        <tbody>
          <tr>
            <td><b>Group</b></td>
            <td><b>Recommend</b></td>
            <td><b>Avoid</b></td>
          </tr>
          <tr>
            <td>Milk & milk products (2 or more cups)</td>
            <td>All milk products</td>
            <td>Low Residue Diet limit to 2 cups daily</td>
          </tr>
          <tr>
            <td>Fruits (2 or more servings daily)</td>
            <td>Fruit juices without pulp, canned fruit except pineapple, ripe bananas, melons</td>
            <td>
              Fruit juices with pulp, canned pineapple, fresh fruit except those 
              on Recommend list, prunes, prune juice, dried fruit, jam, marmalade
            </td>
          </tr>
          <tr>
            <td>Vegetables (3 or more servings daily)</td>
            <td>
              Lettuce; vegetable juice without pulp; the following cooked vegetables; 
              yellow squash (without seeds), green beans, wax beans, spinach, pumpkin, 
              eggplant, potatoes without skin, asparagus, beets, carrots
            </td>
            <td>Vegetables juices with pulp, raw vegetables except lettuce, cooked vegetables not on Recommend list</td>
          </tr>
          <tr>
            <td>Starches-Breads & grains (4 or more servings daily)</td>
            <td>Bread and cereals made from refined flours, pasta, white rice</td>
            <td>Whole grain breads, cereals, rice, pasta; bran cereal; oatmeal</td>
          </tr>
          <tr>
            <td>Meat or meat substitutes (5 to 6 oz daily)</td>
            <td>Meat, poultry, eggs, seafood</td>
            <td>Chunky peanut butter, nuts, seeds, dried beans, dried peas</td>
          </tr>
          <tr>
            <td>Fats and oils (servings depend on caloric needs)</td>
            <td>All oils, margarine, butter</td>
            <td>Coconut</td>
          </tr>
          <tr>
            <td>Sweets and desserts (servings depend on caloric needs)</td>
            <td>All not on Avoid list</td>
            <td>Desserts containing nuts, coconut</td>
          </tr>
          <tr>
            <td>Miscellaneous</td>
            <td>All not on Avoid list</td>
            <td>Popcorn, pickles, horseradish, relish</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)

export default LowFiberLowResidueDiet
