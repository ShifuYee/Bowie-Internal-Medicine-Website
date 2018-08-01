import React from 'react'
import Link from 'gatsby-link'

import SideNavDI from '../../../components/sidenav-di'
import homeimage from '../../../images/home-page-image.jpg'

const VegetableDiet = () => (
  <div className="service-content-resources">
    <SideNavDI />
    <div className="right-side">
      <img alt="Home Page Image" src={homeimage} className="img-responsive" />
      <h1 className="main-subject">Vegetable Diet</h1>
      <h2 className="sub-topic">Purpose</h2>	
      <p>
        Many people will choose vegetarian diets for personal, health, or religious reasons. 
        Strict vegetarians or vegans only eat vegetables, fruits, nuts, and grains. 
        The lacto-vegetarian diet adds milk and milk products to the vegan diet, 
        while the ovo-lactovegetarian diet adds eggs and milk products.
      </p>
      <h2 className="sub-topic">Nutrition</h2>
      <p>
        The correct amount of proteins, calories, vitamins, and minerals are required for
        growth and good health. These elements can be found in any vegetarian diet,
        but it is necessary to understand how they fit together to plan a healthy diet.
      </p>
      <h2 className="sub-topic">Special Considerations</h2>
      <ol>
				<li>
					Proteins are made up of many small amino acids. The body makes some amino acids.
					Others called essential amino acids must come from foods that are eaten. 
					The proteins found in milk, eggs, meat, fish, and cheese are the most complete 
					source of essential amino acids. Proteins are also found in foods from plants, 
					but no one plant food has all of the essential amino acids in the correct amounts. 
					To get all the essential amino acids the body needs for growth and good health, 
					eat a variety of foods. The body will make its own complete protein 
					if enough variety and calories are eaten each day. Whole grain cereals 
					should be used in large amounts because they give calories for energy and 
					are a good source of iron, riboflavin, and vitamin B complex. 
					Include several different selections of legumes, fruits, vegetables, nuts, 
					and seeds throughout the day. 
				</li>
				<li>
					Calories: Eating enough whole grains and legumes throughout the day will give
					the body the calories it needs for energy.
				</li>
				<li>
					Vitamins and minerals are important for a vegan diet. If the lactovegetarian and 
					the ovo-lactovegetarian diets are planned well, they will contain all the vitamins
					and minerals the body needs for good health. Vitamins and minerals that may be
					lacking in the vegan diet are vitamin B-12, vitamin D, riboflavin, calcium, zinc,
					and iron. Soybeans and soy bean milk and dark green leafy vegetables are 
					good sources of calcium and iron, but spinach, chard, and beet greens should be
					eaten in smaller amounts because they contain oxalic acid. Oxalic acid may interfere
					with the absorption of calcium. Whole grains and cereals, legumes, dates, prunes
					and raisins are rich in iron. If they are eaten with foods that have ascorbic acid
					or vitamin C in them, the iron will be absorbed well by the body. Leavened breads,
					legumes, nuts and spinach contain zinc, and the body gets vitamin D when the skin is
					exposed to sunlight. Eating fruit helps to satisfy the body's need for vitamins and minerals. 
				</li>
			</ol>
      <p>
        Since vitamin B-12 is not found in plants, it is necessary for strict vegetarians to get
				it another way. Commercially prepared foods and meat substitutes are sometimes fortified
				with vitamin B-12. Check the special foods section of the supermarket or health food store
				for these items. The health care provider may prescribe a vitamin B-12 supplement. Gender,
				age, disease, and certain health conditions may affect the amounts of proteins, vitamins,
				minerals, and calories needed by the body. For example, women who are pregnant or nursing
				will have different needs. The physician or registered dietitian should be asked
				for advice in these cases.
      </p>
      <h2 className="sub-topic">Helpful Hints</h2>
      <ol>
				<li>
					Avocados are a good source of protein, but they are high in fats. There are two varieties:
					the California avocado, and the Florida avocado. The Florida avocado is larger,
					but contains half the calories and half the fat per ounce.
				</li>
				<li>
					Dark green leafy vegetables are a more nutritious choice for salads. Romaine lettuce,
					for example has eight times as much beta-carotene and six times as much vitamin C as iceberg lettuce.
				</li>
				<li>
					Eat vegetables both raw and cooked. Some yield more nutrients when cooked. 
					Carrots, for example, have 30% more beta-carotene after cooking. Vitamin C 
					can be lost in cooking. However, only 15% may be lost when these vegetables 
					are cooked in a microwave, while up to half may be lost in boiling.
				</li>
				<li>
					The soybean is a world-class protein. In the orient it is often referred to
					as "the meat of the fields." It is available in a variety of products: 
					tofu, soymilk, soy oil, and soy nut snacks. It is also a tasty substitute in
					recipes calling for other dried beans. One cup of cooked, dried soybeans
					yields 20 grams of protein. 
				</li>
			</ol>
    </div>
  </div>
)

export default VegetableDiet
