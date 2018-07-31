// React + Gatsby
import React from 'react'
import Link from 'gatsby-link'

const SideNavDI = () => (
  <div className="sidenav">
    <h2>Diet Information</h2>
    <Link to="/resources/dietary-info/clearLiquidDiet/">Clear Liquid Diet</Link>
    <Link to="/resources/dietary-info/fullLiquidDiet/">Full Liquid Diet</Link>
    <Link to="/resources/dietary-info/highFiberDiet/">High Fiber Diet</Link>
    <Link to="/resources/dietary-info/antiRefluxDiet/">Anti-reflux Diet</Link>
    <Link to="/resources/dietary-info/cholesterol/">Controlling your Cholesterol</Link>
    <Link to="/resources/dietary-info/vegetableDiet/">Vegetable Diet</Link>
    <Link to="/resources/dietary-info/lowFiberLowResidueDiet/">Low Fiber Low Residue Diet</Link>
  </div>
)

export default SideNavDI