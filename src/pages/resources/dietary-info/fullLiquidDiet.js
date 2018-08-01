import React from 'react'
import Link from 'gatsby-link'

import SideNavDI from '../../../components/sidenav-di'
import homeimage from '../../../images/home-page-image.jpg'

const FullLiquidDiet = () => (
  <div className="service-content-resources">
    <SideNavDI />
    <div className="right-side">
      <img alt="Home Page Image" src={homeimage} className="img-responsive" />
      <h1 className="main-subject">Full Liquid Diet</h1>
      <h2 className="sub-topic">Purpose</h2>	
      <p>
        The full liquid diet is used as a step between a clear liquid diet 
        and a regular diet. It is often implemented after surgery or fasting. 
        It may be used after certain procedures, such as jaw wiring. This 
        diet may also be appropriate for patients who have swallowing and 
        chewing problems.
      </p>
      <h2 className="sub-topic">Nutrition Facts</h2>
      <p>
        The full liquid diet is low in iron, vitamin B12, vitamin A, and 
        thiamine. It should not be used for a long period of time unless 
        vitamins, iron, or liquid nutritional supplements are added. This 
        diet has 1800 mg of calcium, so extra calcium is not needed. 
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
            <td>Milk & Milk Products</td>
            <td>Milk, milkshakes, eggnog, ice cream, custard, pudding</td>
            <td>All cheeses</td>
          </tr>
          <tr>
            <td>Vegetables</td>
            <td>All vegetable juices</td>
            <td>All raw or cooked vegetables</td>
          </tr>
          <tr>
            <td>Fruits</td>
            <td>All juice or nectar</td>
            <td>All fresh, frozen or canned fruit</td>
          </tr>
          <tr>
            <td>Breads & Grains</td>
            <td>Cooked refined cereals: farina, grits, oatmeal, cream of rice, cream of wheat</td>
            <td>All other cereals, all breads</td>
          </tr>
          <tr>
            <td>Meat or Meat Substitutes</td>
            <td>None</td>
            <td>All</td>
          </tr>
          <tr>
            <td>Fats & Oils</td>
            <td>Butter, margarine, cream</td>
            <td>All others</td>
          </tr>
          <tr>
            <td>Beverages</td>
            <td>All</td>
            <td />
          </tr>
          <tr>
            <td>Soups</td>
            <td>Broth, bouillon, strained creamed soups</td>
            <td>All others</td>
          </tr>
        </tbody>
      </table>
      <h2 className="sub-topic">Sample Menu</h2>
      <table className="diet-info">
        <tbody>
          <tr>
            <td><b>Breakfast</b></td>
            <td><b>Lunch & Dinner</b></td>
          </tr>
          <tr>
            <td>Fruit juice 1cup</td>
            <td>Strained creamed soup ¾ cup</td>
          </tr>
          <tr>
            <td>Hot cereal ½ cup</td>
            <td>Juice 1 cup</td>
          </tr>
          <tr>
            <td>Eggnog 8 oz</td>
            <td>Ice cream ½ cup</td>
          </tr>
          <tr>
            <td>Whole milk 8 oz</td>
            <td>Pudding or custard ½ cup</td>
          </tr>
          <tr>
            <td>Hot tea with sugar & lemon</td>
            <td>
              Whole milk 8 oz
              <br />
              Hot tea with sugar & lemon
              <br />
              Salt/pepper
              <br />
            </td>
          </tr>
        </tbody>
      </table>
      <h2 className="sub-topic">Sample diet provides the following</h2>
      <table className="diet-info">
        <tbody>
          <tr>
            <td>Calories</td>
            <td>2100</td>
          </tr>
          <tr>
            <td>Protein</td>
            <td>6 gm</td>
          </tr>
          <tr>
            <td>Carbohydrates</td>
            <td>290 gm</td>
          </tr>
          <tr>
            <td>Fat</td>
            <td>80 mg</td>
          </tr>
          <tr>
            <td>Sodium</td>
            <td>2975 mg</td>
          </tr>
          <tr>
            <td>Potassium</td>
            <td>2900 mg</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)

export default FullLiquidDiet
