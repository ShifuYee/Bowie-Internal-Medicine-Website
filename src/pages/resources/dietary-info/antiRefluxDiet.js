import React from 'react'
import Link from 'gatsby-link'

import SideNavDI from '../../../components/sidenav-di'
import homeimage from '../../../images/home-page-image.jpg'

const AntiRefluxDiet = () => (
  <div className="service-content-resources">
    <SideNavDI />
    <div className="right-side">
      <img alt="Home Page Image" src={homeimage} className="img-responsive" />
      <h1 className="main-subject">Gastroesophageal Reflux Disease Diet (GERD)</h1>
      <h2 className="sub-topic">Purpose</h2>
      <p>
        The esophagus is the tube that carries food from the throat to the stomach.
				However, it is not just a simple tube. The lower esophagus has a specialized
				muscle around it that usually stays tightly closed, opening only to allow food
				and liquid into the stomach. It acts to prevent the reflux of stomach acid
				into the esophagus.
			  <br />
        <br />			
				Symptoms occur when this specialized muscle weakens and allows stomach acid
				to splash up into the esophagus. These symptoms include heartburn,
				chest discomfort, and biter fluid flowing up into the mouth.
				Chest discomfort can occur.
        <br />
        <br />
				If the stomach juice trickles into the breathing tubes, hoarseness,
				cough, and even shortness of breath can occur. This entire problem is
				called Gastroesophageal Reflux Disease (GERD). A number of factors,
				including certain foods, may cause the lower esophageal muscle to relax,
				causing GERD.
      </p>
      <h2 className="sub-topic">Nutrition Facts</h2>
      <p>
        A diet designed to prevent or reduce acid reflux is usually easy to follow.
				The basic food groups of cereals, vegetables, fruits, dairy products,
				and meats can be eaten with only a few limitations. So, this diet meets
				the Recommended Dietary Allowances (RDA) of the National Research Council.
			  <br />
        <br />
				The lower esophageal muscle can be weakened by factors other than food.
				The following recommendations may be helpful in reducing symptoms:
      </p>
      <ol>
				<li>
					Stop using tobacco in all forms. Nicotine weakens the
					lower esophageal muscles.
				</li>
				<li>
					Avoid chewing gum and hard candy. They increase the amount of swallowed
					air, which, in turn, leads to belching and reflux. Do not lie down
					immediately after eating. Avoid late evening snacks.
				</li>
				<li>
					Avoid tight clothing and bending over after eating. 
				</li>
				<li>
					Eat small portions of food at mealtime. 
				</li>
				<li>
					Lose weight if overweight. Obesity leads to increased reflux. 
				</li>
				<li>
					Elevate the head of the bed six to eight inches to prevent reflux
					when sleeping. Extra pillows, by themselves, are not very helpful.
				</li>
				<li>
					The following foods weaken the muscle valve in the lower esophagus,
					aggravate acid reflux, and should be avoided: <br/>
					&nbsp;&nbsp;&nbsp; &#8226; Fatty or fried foods<br/>
					&nbsp;&nbsp;&nbsp; &#8226; Whole milk<br/>
					&nbsp;&nbsp;&nbsp; &#8226; Chocolate<br/>
					&nbsp;&nbsp;&nbsp; &#8226; Peppermint and spearmint<br/> 
					&nbsp;&nbsp;&nbsp; &#8226; Oils<br/>
					&nbsp;&nbsp;&nbsp; &#8226; Creamed foods or soups
				</li>
				<li>
					 The following foods irritate and inflamed lower esophagus and
					 may need to be limited or avoided:<br/> 
					 &nbsp;&nbsp;&nbsp; &#8226; Citrus fruit and juices (grapefruit, orange, pineapple, tomato)<br/>
					 &nbsp;&nbsp;&nbsp; &#8226; Coffee (regular and decaffeinated), caffeinated soft drink.
				</li>
				<li>
					The following foods strengthen the muscle valve in the lower esophagus
					and help to prevent acid reflux: <br/>
					&nbsp;&nbsp;&nbsp; &#8226; Low-fat<br/>
					&nbsp;&nbsp;&nbsp; &#8226; High protein foods<br/>
					&nbsp;&nbsp;&nbsp; &#8226; Low-fat carbohydrates (bread, cereal, pasta, crackers)<br/>
					&nbsp;&nbsp;&nbsp; &#8226; Calcium as in fat free milk and low-fat yogurt.
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
            <td>Milk & Milk Products</td>
            <td>Skim, 1%, 2% low fat milk, low-fat yogurt</td>
            <td>Whole milk, chocolate milk</td>
          </tr>
          <tr>
            <td>Vegetables</td>
            <td>All vegetables except those to be avoided</td>
            <td>Fried or creamy style vegetables, tomatoes</td>
          </tr>
          <tr>
            <td>Fruits</td>
            <td>Apples, berries, melons, bananas, peaches, pears</td>
            <td>Citrus: such as oranges, grapefruit, pineapple</td>
          </tr>
          <tr>
            <td>Breads & Grains</td>
            <td>All those made with low-fat content</td>
            <td>Any prepared with whole milk or high-fat</td>
          </tr>
          <tr>
            <td>Meat or Meat Substitutes</td>
            <td>Low-fat meat, chicken, fish, turkey</td>
            <td>Cold cuts, sausage, bacon, fatty meat, chicken fat/skin</td>
          </tr>
          <tr>
            <td>Fat, oils</td>
            <td>None or small amounts</td>
            <td>All animal or vegetable oils</td>
          </tr>
          <tr>
            <td>Sweets & desserts</td>
            <td>All items made with no or low fat (&lt;3 g fat/ serving)</td>
            <td>Chocolate, desserts made with oils and/or fats</td>
          </tr>
          <tr>
            <td>Beverages</td>
            <td>Decaffeinated, non-mint herbal tea; juices (except citrus); water</td>
            <td>Alcohol, coffee (regular or decaffeinated), carbonated beverages</td>
          </tr>
          <tr>
            <td>Soups</td>
            <td>Fat-free or low-fat based</td>
            <td>Chicken, beef, milk, or cream-based soups</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
)

export default AntiRefluxDiet
