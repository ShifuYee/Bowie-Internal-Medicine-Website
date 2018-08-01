import React from 'react'
import Link from 'gatsby-link'

import SideNavDI from '../../../components/sidenav-di'
import homeimage from '../../../images/home-page-image.jpg'

const Cholesterol = () => (
  <div className="service-content-resources">
    <SideNavDI />
    <div className="right-side">
      <img alt="Home Page Image" src={homeimage} className="img-responsive" />
      <h1 className="main-subject">Cholesterol</h1>
      <h2 className="sub-topic">What is Cholesterol ?</h2>	
      <p>
        Cholesterol is a waxy, fatlike substance, classified as a lipid. 
        It is found in animal derived foods such as meat, and dairy products.
      </p>
      <h2 className="sub-topic">Your body needs cholesterol</h2>
      <p>
        You really need a specific amount of cholesterol to live. Cholesterol is
        needed for your body's membranes, for insulation of the nerves, and
        for the production of certain hormones. However, when too much cholesterol
        is present in your body, it can lead to health problems such as coronary artery disease.
      </p>
      <h2 className="sub-topic">Too much is too bad</h2>
      <p>
        Cholesterol build up in the walls of your arteries may cause bumps or
        plaques to form. These build up block your arteries, resulting in
        heart attack, stroke, or other serious health problem.
      </p>
      <h2 className="sub-topic">Types of Cholesterol</h2>
      <p>
      There are different types of cholesterol: Low density lipoproteins (LDL),
			High density lipoprotein (HDL), Very low density (VDLD), triglycerides:
      </p>
      <ul>
				<li>
					<u>Low Density Lipoprotein (LDL):</u> Also known as "bad cholesterol"
					and it increase risk of heart attack.
				</li>
				<li>
					<u>High Density Lipoprotein (HDL):</u> Also known as "good cholesterol"
					that helps get rid of LDL. However, if HDL levels are low,
					it increases the risk of heart attack.
				</li>
				<li>
					<u>Very Low Density Lipoprotein (VLDL):</u> Contains mostly fat.
				</li>
				<li>
					<u>Triglycerides:</u> A type of fat that is stored in fat cells throughout the body.
				</li>
			</ul>
      <h2 className="sub-topic">What affects cholesterol level ?</h2>
      <p>
        Weight, diet, exercise, age, gender, and heredity, and certain conditions can
        affect cholesterol levels.
      </p>
      <h2 className="sub-topic">RECOMMENDATION</h2>
      <ol class="indent">
				<li>
					<u>Eat Less Fat</u>
          <br />
					&nbsp;&nbsp;&nbsp; &#8226; Limit the intake of butter, margarine, and oil.
          <br />
					&nbsp;&nbsp;&nbsp; &#8226; Use canola oil, olive oil, or corn oil.
          <br />
					&nbsp;&nbsp;&nbsp; &#8226; <i>Stay away from foods made with coconut oil, or palm oil.</i>
				</li>
				<li>
					<u>Milks</u>
          <br />
					&nbsp;&nbsp;&nbsp; &#8226; Use only nonfat or low fat Dairy products
          <br />
					&nbsp;&nbsp;&nbsp; &#8226; Choose nonfat or 1% milk, nonfat yogurt,
					reduced fat cheese, and ice cream.
          <br />
					&nbsp;&nbsp;&nbsp; &#8226; <i>Stay away from cream</i>, whole milk, powdered creamers.
				</li>
				<li>
					<u>Meats/ Beans</u>
          <br/>
					&nbsp;&nbsp;&nbsp; &#8226; Limit fish, chicken, and meat fruits to 4-6 ounces a day.
          <br/> 
					&nbsp;&nbsp;&nbsp; &#8226; Choose fish, white meat chicken, turkey,
					dried beans, tofu, and lean vegetables.
          <br/>
					&nbsp;&nbsp;&nbsp; &#8226; Cuts of meat <i>(Eat dried beans or tofu instead of meat several times a week).</i>
          <br/>
				</li>
				<li>
					<u>Fruits/ Vegetables</u><br/>
					&nbsp;&nbsp;&nbsp; &#8226; Eat at least 5 servings of and vegetables each day.
          <br />
					&nbsp;&nbsp;&nbsp; &#8226; Choose fresh fruits and vegetables or plain frozen.
          <br /> 
					&nbsp;&nbsp;&nbsp; &#8226; Limit olives, avocados, and Coconut <i>(They are high in fat).</i>
				</li>
				<li>
					<u>Breads</u>
          <br />
					&nbsp;&nbsp;&nbsp; &#8226;  Build meals around bread, rice, cereal, 
					pasta, and other grains.
          <br />
					&nbsp;&nbsp;&nbsp; &#8226; Choose high-fiber, whole-grain bread and cereal,
					corn tortilla, and brown rice.
          <br />
					&nbsp;&nbsp;&nbsp; &#8226;  <i>Stay away from donuts, muffins, and pastries.</i>
				</li>	
			</ol>
      <h2 className="sub-topic">Exercise</h2>
      <ol>
				<li>
					Walking, swimming, riding a bike, are good ways to stay active.
				</li>
				<li>
					Work out 3 - 4 days a week.
				</li>
				<li>
					Work out 30 minutes each day.
				</li>
				<li>
					Wear sturdy shoes when walking.
				</li>
				<li>
					Start where you feel comfortable increase time and pace each week.
				</li>
				<li>
					Slow down if you feel pain or shortness of breath, or become tired.
				</li>
				<li>
					Some kind of activity is better than none at all.
				</li>
			</ol>
      <h2 className="sub-topic">Nutrition Facts</h2>
      <p>
        <u>Serving Size:</u> the amount of cholesterol listed on the label is based on the serving size. 
        <br />
        <br />
        <u>Total Fat:</u> Choose foods with less total fat.
        <br />
        <br />
        <u>Saturated Fat:</u> Look for products with little saturated fats. Saturated fats are found mostly in animals.
        <br />
        <br />
        <u>Cholesterol:</u> The less cholesterol the better. Your daily total for cholesterol should be less than 300mg.
      </p>
    </div>
  </div>
)

export default Cholesterol
