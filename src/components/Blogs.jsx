import React from 'react';
import blog1 from '../images/blog1.png'
import blog2 from '../images/blog2.png'
import blog3 from '../images/blog3.png'
import blog4 from '../images/blog4.png'
import blog5 from '../images/blog5.png'
import blog6 from '../images/blog6.png'

const blogs = [
  {
    imgSrc: blog1,
    alt: 'Top 5 fruits for Boosting Immunity',
    title: 'Top 5 fruits for Boosting Immunity',
    description: 'Stay healthy year-round by adding immunity-boosting fruits like orange and berries to your diet. Learn which fruits can strengthen your immune system...',
    author: 'Mrs. Awanju Roseline',
    date: 'Oct 1, 2024',
  },
  {
    imgSrc: blog2,
    alt: 'How to Store Vegetables for Freshness',
    title: 'How to Store Vegetables for Freshness',
    description: 'Extend the life of your fresh produce with these simple storage tips for common vegetables like tomatoes, carrots, and leafy greens. Reduce waste and save money...',
    author: 'Ahmad Bello',
    date: 'Sept 29, 2024',
  },
  {
    imgSrc: blog3,
    alt: 'Reducing Post-Harvest Losses',
    title: 'Reducing Post-Harvest Losses',
    description: 'Learn how proper post-harvest practices can reduce losses for farmers. Discover how Konectar helps minimize waste through better logistics and storage solutions...',
    author: 'Bjorn Thomas',
    date: 'Sept 25, 2024',
  },
  {
    imgSrc: blog4,
    alt: 'Buying Local Produce',
    title: 'Buying Local Produce',
    description: 'Understand the environmental and economic benefits of purchasing local produce. Support your local farmers and reduce your carbon footprint by buying fresh and local...',
    author: 'Chukwuma Chisom',
    date: 'Sept 05, 2024',
  },
  {
    imgSrc: blog5,
    alt: '5 Healthy Breakfast Recipes to Try',
    title: '5 Healthy Breakfast Recipes to Try',
    description: 'Try quick and nutritious breakfast recipes featuring seasonal fruits. These easy-to-make meals are perfect for busy mornings, providing you with energy and freshness...',
    author: 'Deborah Rita',
    date: 'Sept 02, 2024',
  },
  {
    imgSrc: blog6,
    alt: 'Why Eating Seasonally is Beneficial',
    title: 'Why Eating Seasonally is Beneficial',
    description: 'Discover how eating seasonal fruits and vegetables supports sustainability and benefits your health. Seasonal eating reduces carbon footprint and ensures fresh, nutrient...',
    author: 'Charles Don',
    date: 'Aug 25, 2024',
  },
];

const BlogCard = ({ imgSrc, alt, title, description, author, date }) => (
  <div className="bg-[#ffffff] px-4 py-4 rounded-lg basis-[40%]">
    <img className="w-[100%]" src={imgSrc} alt={alt} loading="lazy" />
    <h1 className="font-bold text-[1.2rem] mt-5">{title}</h1>
    <p className="mt-3">{description}</p>
    <div className="flex justify-between mt-5">
      <div className="flex flex-col">
        <p className="text-[0.9rem]">{author}</p>
        <p className="text-neutral-400 text-[0.8rem]">{date}</p>
      </div>
      <div className="flex gap-3 items-center cursor-pointer">
        <h1 className="font-bold">Read More</h1>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
);

const BlogSection = () => {
  return (
    <section className="bg-[#001F0A] font-Manrope justify-center items-center py-14 md:px-16 px-10">
      <h1 className="font-Manrope text-white text-[2rem] md:text-[2.8rem] font-bold mb-6 text-center">
        Our Blog Post
      </h1>
      <div className="flex flex-col md:flex-row md:flex-wrap gap-5 justify-center items-center mt-10">
        {blogs.map((blog, index) => (
          <BlogCard key={index} {...blog} />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
