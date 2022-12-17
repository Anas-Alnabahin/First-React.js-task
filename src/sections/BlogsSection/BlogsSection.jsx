import React from 'react'
import BlogCard from '../../components/BlogCard/BlogCard'
import DancScript from '../../components/DancScript/DancScript'
import './style.css'

export default function BlogsSection() {
  return (
    <div className='BS-div' id='Blogs'>
        <DancScript text='Blogs'/>
        <h2>words from our food lovers</h2>
        <div className="blog-cards-div">
            <BlogCard src='assets/bcard1.png' p1='Cooking Dining Experience' p2='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin '/>
            <BlogCard src='assets/bcard2.png' p1='Cooking Dining Experience' p2='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin ' cardid='mid-card'/>
            <BlogCard src='assets/bcard3.png' p1='Cooking Dining Experience' p2='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin '/>
        </div>
    </div>
  )
}
