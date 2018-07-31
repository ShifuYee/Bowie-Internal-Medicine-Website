// React + Gatsby
import React from 'react'
import Link from 'gatsby-link'

const SideNavGD = () => (
  <div className="sidenav">
    <h2>Upper GI Tract</h2>
    <Link to="/resources/gi-disorders/barrett/">Barrett's Esophagus</Link>
    <Link to="/resources/gi-disorders/gastritis/">Gastritis</Link>
    <Link to="/resources/gi-disorders/pepticUlcer/">Peptic Ulcer Disease</Link>
    <Link to="/resources/gi-disorders/esophagitis/">Esophagitis & Stricture</Link>
    <Link to="/resources/gi-disorders/hiatalHernia/">Hiatal Hernia</Link>
    <Link to="/resources/gi-disorders/helicobacterPylori/">Helicobacter Pylori</Link>
    <Link to="/resources/gi-disorders/gerd/">GastroEsophageal Reflux Disease (GERD)</Link>
    <h2>Lower GI Tract</h2>
    <Link to="/resources/gi-disorders/colonPolyps/">Colon Polyps & Cancer</Link>
    <Link to="/resources/gi-disorders/diverticulosis/">Diverticulosis & Diverticulitis</Link>
    <Link to="/resources/gi-disorders/crohnDisease/">Crohn's Disease</Link>
    <Link to="/resources/gi-disorders/ulcerativeColitis/">Ulcerative Colitis</Link>
    <Link to="/resources/gi-disorders/hemorrhoids/">Hemorrhoids</Link>
    <Link to="/resources/gi-disorders/constipation/">Constipation</Link>
    <Link to="/resources/gi-disorders/rectalBleeding/">Rectal Bleeding</Link>
  </div>
)

export default SideNavGD