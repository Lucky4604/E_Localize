import React from 'react'

const Testimonial = () => {
  return (
    <div>
    <section className="text-white body-font mb-10">
        <div className="container px-5 py-10 mx-auto">
            <h1 className=' text-center text-3xl font-bold text-white' >Testimonial</h1>
            <h2 className=' text-center text-2xl font-semibold mb-10' >What our <span className=' text-pink-500'>customers</span> are saying</h2>
            <div className="flex flex-wrap -m-4">
                <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                    <div className="h-full text-center">
                        <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://imgs.search.brave.com/84uaA5KgGWHczSn4y4Ibpvu0LX1JEhpq2L4BhoFk6B4/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdDEu/bGF0ZXN0bHkuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDIy/LzExL0Frc2hheS1L/dW1hci1SYWp1LVBv/c2UtRnJvbS1QaGly/LUhlcmEtUGhlcmku/anBn" />
                        <p  className="leading-relaxed">I am thrilled with the quality of these local products! The attention to detail and craftsmanship are evident in every item. I've purchased a few products so far, and I must say, they are far superior to many well-known brands. Plus, knowing that I'm supporting local artisans makes me even happier with my purchases</p>
                        <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                        <h2  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Raju</h2>
                        
                    </div>
                </div>
                <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
                    <div className="h-full text-center">
                        <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://imgs.search.brave.com/KhdFZkkiZP1nHzIrN_-uyg1jdhcjaDnSfSOJEnnhReQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/aGluZHVzdGFudGlt/ZXMuY29tL2h0LWlt/Zy9pbWcvMjAyMy8w/My8wMS81NTB4MzA5/L1N1bmllbF9zaGV0/dHlfaGVyYXBoZXJp/M18xNjc3NjUxMDM4/OTkzXzE2Nzc2NTEw/MzkyMThfMTY3NzY1/MTAzOTIxOC5qcGc" />
                        <p  className="leading-relaxed">I've been a loyal customer of these local products for a while now, and I can't get enough of them. From the unique designs to the sustainable materials used, these products have won me over. Not only are they eco-friendly, but they also have a distinct charm that sets them apart from mass-produced items.</p>
                        <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                        <h2  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Shyam</h2>
                       
                    </div>
                </div>
                <div className="lg:w-1/3 lg:mb-0 p-4">
                    <div className="h-full text-center">
                        <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://imgs.search.brave.com/aEYZH7Jyp2iUKI9e1citJLdN-KzhRo-yxjt6XOqaNKM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaGluZHVzdGFu/dGltZXMuY29tL2lt/Zy8yMDIxLzEwLzI4/LzU1MHgzMDkvcGFy/ZXNoX3Jhd2FsX2Jh/YnVyYW9fMTYzNTM4/OTYzNzg4MF8xNjM1/Mzg5NjQ0NDUwLmpw/Zw" />
                        <p  className="leading-relaxed">The local products from this brand are a hidden gem! I stumbled upon them during a local market event and haven't looked back since. The range of products is impressive, and I love how they incorporate traditional techniques with a modern twist. The quality is outstanding, and I take pride in supporting local artisans who pour their heart and soul into their work.</p>
                        <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                        <h2  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase">Babu Rao</h2>
                        <p  className="text-gray-500">CTO</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
  )
}

export default Testimonial