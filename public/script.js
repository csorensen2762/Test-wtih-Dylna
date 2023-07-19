const textBox = document.getElementById('essay')
textBox.value = "For most children, Saturday mornings are a time for playing video games and eating cold cereal in front of the TV. It is supposed to be a break from the rigor of school and hardships of the week. But for me it was a time to learn and grow. I would wake up early and wait downstairs till the clock struck 7:30. Then I would open my laptop screen, flickering and bright, and continue my python program or Photoshop project. My family called it \“our programming time\” and it was a time to explore my different interests. On these special Saturday mornings, I learned the basics of Python, HTML, Photoshop, simple circuits, and website development.  These mornings started the fire of learning and curiosity from a young age that continues to grow even today.\n\“How many sales did you get?\” I asked my business partner at our meeting. \“Not very many, it was hard to expand our reach,\” he replied. \“Now that we have the website up and running, hopefully more kids can see the different types of products we have. Can you try to make more as soon as possible?” I asked. “Yeah I\ll get my workers on it.”\nWhile most would think that is a conversation between two adult entrepreneurs, it was actually between my 5th grade self and my friend who started a business selling survival bracelets to my friends at school. The business was not a future Fortune 500 business and soon frizzled out as we got excited about another project. But I learned the importance of supply, demand, and even the basics of website development in fifth grade. I learned the power of learning from experiences and it encouraged me to create more experiences that I can learn from.\nKneading dough and spreading flour, Thanksgiving and Christmas was a time to gather around the table and partake in homemade pies, cookies, and cakes. My family has always had a passion for making desserts together. These treats were only shared with my home and a couple friends. But everything changed one day in 8th grade when my dad got laid off from his job.\nSix months later, I was developing an online store and calling our domain service trying to see how fast they could have our website publicly available. Checking Google Maps to see if my appeal worked for our location and editing product photos to upload to our point of sale, I was helping to create a cookie shop with my family from scratch at the age of 14. It took months to figure out the complexities of SEO, social media marketing, and website development. During these months, I learned how to identify, research, and ultimately fix problems. I learned how to collaborate with other businesses, adults, and my family. I learned how to make customers feel welcome, employees feel valued, and businesses we worked with valued.\nThese experiences taught me the hard work required for success. These experiences have created the drive for success that pushes me to this day. Today, I have worked hard to earn the Presidential Service Award, the most prestigious service award in the nation, with my 100+ hours of service. Today, I have worked hard to be chosen as NHS Vice President over 300 students and help lead the community in service and scholarship. Today, I have worked hard to be accepted into the Varsity Choir. Today, I have worked hard to be accepted into the Peer Leadership program to help disadvantaged students. I am looking forward to what I can create in the future. I know that if I am given the opportunity to attend this college then I will be given the opportunities to create even more success."
const button = document.getElementById("submitButton")
async function usePrompt(input) {
    const response = await fetch("/prompt", {
        method: "post",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            input
        })
    })
    const data = await response.json()
    console.log(data)
}
button.addEventListener("click", ()=> {
    const input = document.getElementById("essay").value
    usePrompt(input)
})
