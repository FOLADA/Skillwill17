import React from 'react';
import './About.css'; 
import { Link } from 'react-router-dom';

const AboutHarry = () => {
    return (
        <div>
  <Link style={{marginRight:"10px", border:"1px solid gray", fontSize:"20px", color:"black", }} to={"/"} >Main</Link>
  <Link style={{border:"1px solid gray", fontSize:"20px", color:"black"}} to={"/about"}>About</Link>
        <div className="about-container">
            <h1 className="about-title">About Harry Potter</h1>
            <p className="about-text">
                Harry Potter is a fictional character and the protagonist of J.K. Rowling's
                popular series of novels. Born on July 31, 1980, he is known as "The Boy Who Lived"
                after surviving an attack by the dark wizard Voldemort. 
            </p>
            <p className="about-text">
                Growing up as an orphan with his neglectful relatives, the Dursleys, Harry discovers
                his true heritage when he receives an acceptance letter to Hogwarts School of
                Witchcraft and Wizardry. Throughout his years at Hogwarts, he faces numerous challenges,
                makes lifelong friends, and ultimately confronts the dark forces threatening the wizarding world.
            </p>
            <p className="about-text">
                Harry is known for his bravery, loyalty, and strong sense of justice, qualities that
                make him a true hero in the fight against evil.
            </p>
        </div>
        </div>
    );
};

export default AboutHarry;