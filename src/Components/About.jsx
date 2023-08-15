import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800  to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        <p className='text-xl mt-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad explicabo non odio minus recusandae amet vero nam debitis fugit iste, quod itaque neque nostrum? Modi, blanditiis pariatur animi cum eligendi veniam sed iste, deleniti consequuntur doloremque sapiente hic in, neque quasi! Voluptatibus blanditiis obcaecati molestias sapiente illo exercitationem modi facere!</p>

        <br/>

        <p className='text-xl'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus quidem iusto, eveniet neque vitae quam eligendi quisquam sequi alias beatae quibusdam tempora omnis, similique quaerat qui quae hic perspiciatis nihil voluptas! Cumque quo voluptas, culpa ullam eius laudantium cupiditate, totam hic officia blanditiis, vel id incidunt fugiat voluptatem repellendus tempora.
        </p>
      </div>
    </div>
  )
}

export default About
