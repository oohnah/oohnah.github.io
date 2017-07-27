
function initMap() {
/*..........change what this map looks like.......................*/  

//nick deporzio needs a picture
  var mapStyle = new google.maps.StyledMapType([
    {
      featureType: 'roads',
      stylers: [
        {visibility: 'simplified'}
      ]
    },
    {
      elementType: 'labels',
      stylers: [
        {visibility: 'off'}
      ]
    },
    {
      featureType: 'landscapes',
      stylers: [
        {color: '#615445'},
        {saturation: -80},
        {lightness: 30}
      ]
    },
    {
      featureType: 'water',
      stylers: [
        {color: '#F0FDFF'}

      ]
    }

  ], {
    name: 'Custom Style'
  });

  var mapStyleId ='custom_style';

/*-------------------put some sort of data here--------------------*/
var data={
  "students":[
    {
      "name":"Caroline Fried SSH&#39;17",
      "major":"Teaching Assistant Co-op at Dandelion School, China",
      "about":"<ul><li>International Affairs & History Major</li><li>&quot;Take every opportunity that comes to you. Being immersed in another culture makes you challenge your assumptions and learn new perspectives.&quot;</li></ul>",
      "image":"pics/caroline-fried.jpg",
      "lat":39.9167,
      "lng":116.3833,
      "icon":"mapMarker07.png",
      "country":"China",
    },
    {
      "name":"Tom Boutin E&#39;17",
      "major":"Engineering Co-op at Eastek International, China",
      "about":"<ul><li>Mechanical Engineering Major</li><li>Said it was useful for him to compare the engineering and business processes he experienced in the U.S. and abroad</li><li>&quot;Just go for it. This experience will really make you stand out.&quot;</li></ul>",
      "image":"pics/tom-boutin.jpg",
      "lat": 23.4000,
      "lng": 113.5000,
      "icon":"mapMarker07.png",
      "country":"China",
    },
    {
      "name":"Will Shields SSH&#39;16",
      "major":"Legal Work Co-op at International Criminal Tribunal, Netherlands",
      "about":"<ul><li>History Major</li><li>A &quot;Dream co-op&quot; for Shields would be blending his interest in criminal law with a previous experience he received while on a Dialogue of Civilizations program in the Balkans; on his co-op, Shields primarily focused on doing legal work and research for prosecutors</li><li>&quot;I’d say developing a legal mindset to be able to argue both sides of the same issue. This co-op made me realize that I want to go to law school.&quot;</li></ul>",
      "image":"pics/william-shields.jpeg",
      "lat":52.3167,
      "lng":5.5500,
      "icon":"mapMarker07.png",
      "country":"Netherlands",
    },
    {
      "name":"Stella Yun S&#39;15",
      "major":"Research Co-op at Leibniz University of Hannover, Germany",
      "about":"<ul><li>Biology Major</li><li>Her co-op, which focused on academic research in biochemistry, enabled her to work in plasma cloning and learn new molecular biology techniques for isolating and analyzing DNA and proteins</li><li>&quot;This was my first co-op in a research lab, and it was really great being able to apply what I’ve learned in a real-world setting.&quot;</li></ul>",
      "image":"pics/stella-yun.jpg",
      "lat":52.3667,
      "lng":9.7167,
      "icon":"mapMarker07.png",
      "country":"Germany",
    },
    {
      "name":"Samantha Kim DMSB&#39;16",
      "major":"Marketing Co-op at VMware, Palo Alto",
      "about":"<ul><li>Business, Concentration in Marketing Major</li><li>Works with a team that architects and packages marketing campaigns and programs for VMware’s marketing operations around the world; her role includes activities to facilitate communication and collaboration between the global and regional marketing teams</li><li>&quot;They have created an amazing environment here where they don’t accept anything less than leading innovation in technology. It was incredibly eye-opening to see how transforming technology can be in business.&quot;</li></ul>",
      "image":"pics/samantha-kim.jpg",
      "lat":37.4292,
      "lng":-122.1381,
      "icon":"mapMarker07.png",
      "country":"Palo Alto, USA",
    }, 
    {
      "name":"Darius Williams DMSB&#39;16",
      "major":"Creative Intern Co-op at Young & Rubicam Prague, Czech Republic",
      "about":"<ul><li>Business and Innovative Media Major</li><li>Worked as a creative intern whose responsibilities included illustration, research, and photography, as well as video editing, copy editing, and helping brands develop a strong presence through print, digital, interactive media, and social media marketing</li><li>Says the co-op showed him the importance of creating a brand identity that is true, creative, and not forced</li><li>&quot;This is what keeps me motivated and interested in the marketing and branding field.&quot;</li></ul>",
      "image":"pics/darius-williams.jpg",
      "lat":50.0833,
      "lng":14.4167,
      "icon":"mapMarker07.png",
      "country":"Czech Republic",
    },
    {
      "name":"Gemma Bonfigliogi SSH&#39;17",
      "major":"Nonprofit Work Co-op at Vision of Hope, Zambia",
      "about":"<ul><li>International Affairs and Human Services Major</li><li>Her work included creating fundraising videos, participating in outreach programs, and even taking severely ill children to the hospital</li><li>&quot;This co-op experience opened my eyes to the challenges and joys in the life of a social worker. This kind of direct service work can become very emotionally draining but at the same time can also be a blessing, having the opportunity to work with beautiful people.&quot;</li></ul>",
      "image":"pics/gemma-bonfiglioli.jpg",
      "lat":15.4167,
      "lng":28.2833,
      "icon":"mapMarker07.png",
      "country":"Zambia",
    },
    {
      "name":"Kartikeya Ladha DMSB&#39;16",
      "major":"Assistant Director Co-op at UNISEF, Ghana",
      "about":"<ul><li>Business, Concentration in Management and Entrepreneurship Major</li><li>Helped scout locations, cast actors, and assist with editing</li><li>&quot;I want to experience a completely different culture and go out of my comfort zone.&quot;</li></ul>",
      "image":"pics/Kartikeya-ladha.jpg",
      "lat":5.5500,
      "lng":0.2000,
      "icon":"mapMarker07.png",
      "country":"Ghana",
    }, 
    {
      "name":"Kathrynna A. Clarke E&#39;15",
      "major":"Engineering Co-op at Panama Canal Authority, Panama",
      "about":"<ul><li>Civil Engineering Major</li><li>Assisted on a number of the authority’s environmental division’s projects, performing environmental inspections and environmental site assessments for potential construction projects for the Panama Canal; also provided environmental service costing for remediation and cleanup projects</li><li>&quot;My professional goal is to provide water infrastructure to underserved communities worldwide and I definitely think my international co-op helped cement that idea for me.&quot;</li></ul>",
      "image":"pics/kathryna-clarke.jpg",
      "lat":8.9667,
      "lng":-79.5333,
      "icon":"mapMarker07.png",
      "country":"Panama",
    },
    {
      "name":"Ishti Saluja SSH&#39;15",
      "major":"Co-op at the British American Security Information Council, London",
      "about":"<ul><li>International Affairs Major</li><li>Updated BASIC’s social media outlets with ongoing developments in the world of nuclear disarmament and helped research and author four articles published on BASIC’s blog</li><li>&quot;This co-op provided me with a preview of how think tanks work. My two supervisors were fantastic. They always encouraged me to get involved in any project I wanted and welcomed new ideas. They made me feel like a significant part of BASIC.&quot;</li></ul>",
      "image":"pics/ishti-saluja.jpg",
      "lat":51.5072,
      "lng":0.1275,
      "icon":"mapMarker07.png",
      "country":"England",
    }, 
    {
      "name":"Olivia Hesslein AMD&#39;15",
      "major":"Production Co-op at MSNBC and NBC Nightly News, NYC",
      "about":"<ul><li>Journalism Major</li><li>At MSNBC, she worked  in the booking department, collaborating with producers to schedule guests to appear on the network’s daytime news shows, and conducted research for news segments</li><li>At NBC Nightly News, she researched stories, pitched ideas to producers, and helped to coordinate and facilitate television shoots in the field</li><li>&quot;I loved the adrenaline rush of working in a live, day-turnover news environment. You don’t always know what the big story will be that day before you in to work. I enjoyed the suspenseful environment.&quot;</li></ul>",
      "image":"pics/olivia-hesslein.jpg",
      "lat":40.7127,
      "lng":-74.0059,
      "icon":"mapMarker07.png",
      "country":"New York, USA",
    }, 
  /*  {
      "name":"Nick DePorzio S&#39;17",
      "major":"Research Co-op at CERN, Geneva, Switzerland",
      "about":"<ul><li>Physics</li><li>Tasked with monitoring a new trigger system that will determine which collision events look strong enough for further analysis; new system was developed to compensate for the increased operating energy</li><li>For his first co-op, DePorzio worked at the Laboratori Nazionali del Gran Sasso in Italy, where researchers test particles at the lowest energy possible</li></ul>",
      "image":"testimage.png",
      "lat":46.2000,
      "lng":6.1500,
      "icon":"mapMarker07.png",
      "country":"Switzerland",
    },
  */
    {
      "name":"Eva Hayes S&#39;16",
      "major":"Nonprofit Work Co-op at Bimini Sharklab, Bahamas",
      "about":"<ul><li>International Affairs</li><li>Her many responsibilities range from non-invasively tagging sharks for tracking purposes, to helping advanced degree students with their research projects</li><li>&quot;This co-op has definitely helped me delve into the shark world. I’m very interested in shark habitat loss, which I have seen a direct impact of here.&quot;</li></ul>",
      "image":"pics/eva-hayes.jpg",
      "lat":25.0667,
      "lng":-77.3333,
      "icon":"mapMarker07.png",
      "country":"Bahamas",
    },
    {
      "name":"Carissa Lellos S&#39;17",
      "major":"Scientific Revolution & Computational Revolution Dialogue of Civilizations in Italy",
      "about":"<ul><li>Psychology Major</li><li>Returned home with more information about the Renaissance period and Scientific Revolution than she ever thought; particularly intrigued by the Medicis, the influential Italian family that swayed art, science, politics, and finance from the 14th to 18th centuries</li><li>&quot;When I saw that some of the course subjects were on the roots of psychology, like anatomy and biology, I was really excited.&quot;</li></ul>",
      "image":"pics/carissa-lellos.jpg",
      "lat":41.9000,
      "lng":12.4833,
      "icon":"mapMarker07.png",
      "country":"Italy",
    },
    {
      "name":"Lindsay Weigel BHS&#39;15",
      "major":"Co-ops in Belize and Ghana",
      "about":"<ul><li>Health Sciences Major</li><li>Volunteered in local clinics to help care for patients and training young students in nutrition and other health education</li><li>Developed second co-op at the Boston Healthcare for the Homeless Program to work with Boston’s homeless population</li></ul>",
      "image":"pics/lindsay-weigel.jpg",
      "lat":17.2500,
      "lng":-88.7667,
      "icon":"mapMarker07.png",
      "country":"Belize",
    },
    {
      "name":"Johanna Gunawan BHS&#39;15",
      "major":"Study Abroad at Obirin University, Japan",
      "about":"<ul><li>Political Science and International Affairs</li><li>Traveled back to East Asia for the Japan-America Student Conference, a student-led academic and cultural exchange program that brings together students to gain a better understanding of each other’s nations</li><li>Gunawan plans to incorporate the work she completed at the conference into an Honors research project on Japan-America relations</li><li>&quot;I truly believe in Northeastern’s global vision and I think it would be great to align the two. We’ll have 35 of Japan’s brightest students here and we want to have them return home and talk about Northeastern, which creates whole new opportunities for our students.&quot;</li></ul>",
      "image":"pics/johanna-gunawan.jpg",
      "lat":35.6833,
      "lng":139.7667,
      "icon":"mapMarker07.png",
      "country":"Japan",
    },
    {
      "name":"Luiz Franciss DMSB&#39;17",
      "major":"Summer Internship at Craft Heinz Company, Brazil",
      "about":"<ul><li>Business, Concentration in Marketing and Entrepreneurship</li><li>Made the most of his two months working on two projects aimed at making a lasting impact on the company’s business practices; started by doing market research for a tool the company would use to determine product prices in different parts of Brazil based on factors such as volume, distribution, and competitor’s prices</li><li>Also helped develop a customer sales center, a one-stop-shop for customers looking to reach the company’s sales department; the center also focused on reestablishing connections with former customers who hadn’t bought Heinz products recently</li><li>&quot;It was a success for me because at the end of the internship they said I had opened some doors for when I graduate, and that was my ultimate goal.&quot;</li></ul>",
      "image":"pics/luiz-franciss.jpg",
      "lat":-15.7833,
      "lng":-47.8667,
      "icon":"mapMarker07.png",
      "country":"Brazil",
    },
    {
      "name":"Marley Kimelman S/SHH&#39;18",
      "major":"Environmental Resource Management co-op at Cape Town, South Africa",
      "about":"<ul><li>Environmental Studies and International Affairs Major</li><li>His proudest achievement was helping to reinvigorate a stagnant water heritage project by developing a walking tour across the city featuring stops at water tunnels, dams, treatment plants, reservoirs, and a yet-to-be-built museum</li><li>Kimelman conducted extensive research and wrote a feasibility report outling the project, including the route, the budget, and the economic impact, as well as his own recommendations</li><li>&quot;That was the coolest part of the co-op, working on this project every day from start to finish. It’s been given the go-ahead, and it was very rewarding to be part of it.&quot;</li></ul>",
      "image":"pics/marley-kimelman.jpg",
      "lat":-33.9253,
      "lng":18.4239,
      "icon":"mapMarker07.png",
      "country":"South Africa",
    },
    {
      "name":"Chelsey Goldberg SSH&#39;18 and Alexa Armstrong S&#39;16",
      "major":" Volunteered at True Start Athletics’ Care for Kenya",
      "about":"<ul><li>Human Services and Psychology Majors</li><li>Divided their time in Eldoret and Nakuru equally, first donating backpacks, storybooks, and encyclopedias to students in Eldoret, and then doling out supplies to similarly studious kids in Nakuru</li><li>Raised more than $2,000 for their humanitarian mission through the Northeastern Fund’s Catalyst program, which makes it easy to follow, connect with, and support the university’s most inspiring student projects </li></ul>",
      "image":"pics/chelsey-goldberg.jpg",
      "lat":1.2667,
      "lng":36.8000,
      "icon":"mapMarker07.png",
      "country":"Kenya",
    },
    {
      "name":"Rose Leopold SSH&#39;16",
      "major":"Co-op at the U.S. Embassy, Ecuador",
      "about":"<ul><li>Political Science Major</li><li>In her role as a political intern, Leopold met with local politicians and non-governmental organizations to learn what assistance the embassy could provide; also performed outreach for the embassy, giving presentation to Ecuadorian students on American topics such as Women’s History Month</li><li>&quot;I really got an incredible hand-on experience, and it showed me that this is exactly what I want to do with my life. It’s so interesting to observe the culture and see how it’s different, and then being in an embassy and seeing that it is really something they want to promote.&quot;</li></ul>",
      "image":"pics/rose-leopold.jpeg",
      "lat":0.2333,
      "lng":-78.5167,
      "icon":"mapMarker07.png",
      "country":"Ecuador",
    },
    {
      "name":"Kristen Miller SSH&#39;15",
      "major":"Two Co-ops in Cambodia",
      "about":"<ul><li>International Affairs Major</li><li>Worked as a leadership resident at the Harpswell Foundation, which promotes women’s education and leadership, where she also taught English and served as a mentor</li><li>Received the Thomas E. McMahon Award, which recognizes a senior who displays outstanding character and integrity combined with a high degree of devotion and commitment to serving others through co-op</li></ul>",
      "image":"pics/kristen-miller.jpg",
      "lat":11.5500,
      "lng":104.9167,
      "icon":"mapMarker07.png",
      "country":"Cambodia",
    },
    {
      "name":"Daniel Abunaw SSH&#39;15",
      "major":"Sales Co-op positions at EF Education, Switzerland",
      "about":"<ul><li>Economics Major</li></li><li>Received the Paul M. Pratt Award, which recognized a senior who demonstrates exceptional personal and professional growth through his or her co-ops</li></ul>",
      "image":"pics/daniel-abundaw.jpg",
      "lat":47.0500,
      "lng":8.3000,
      "icon":"mapMarker07.png",
      "country":"Switzerland",
    },
    {
      "name":"Emma Ouellette E&#39;16",
      "major":"Co-op at Planetary Resources, Washington",
      "about":"<ul><li>Mechanical Engineering Major</li><li>Assigned to design the thermal control subsytem for a satellite, one that was launched into space in April; her responsibilities ran the gamut, from creating 3-D models of the satellite components to outsourcing the parts for fabrication</li><li>&quot;This experience has reinforced my love for space exploration and given me a different view on how to approach problems that seem insurmountable. Now, more than ever, I’m ready to enter the modern space race and start working on the challenges that face the human race as we continue to extend our reach beyond our home planet.&quot;</li></ul>",
      "image":"pics/emma-oullette.jpg",
      "lat":47.5000,
      "lng":-120.5000,
      "icon":"mapMarker07.png",
      "country":"Washington, USA",
    },


    {
      "name":"Julia Patten SSH&#39;15",
      "major":"Co-op as Assistant to the prosecutor in the Special Prosecutor’s Office for War Crimes in Serbia",
      "about":"<ul><li>Political Science and International Affairs</li><li>&quot;I was more interested in research and conflict analysis at first but working on the cases directly and seeing the impact they had on society and the justice it provided for the victims changed my career path.&quot;</li></ul>",
      "image":"pics/julia-patten.jpg",
      "lat":44.8000,
      "lng":20.4667,
      "icon":"mapMarker07.png",
      "country":"Serbia",
    },

    {
      "name":"Julieta Moradei E&#39;16",
      "major":"Co-op at Disney World, Florida",
      "about":"<ul><li>Civil and Environmental Engineering Major</li><li>Her co-op experience, she said, pushed her out of her comfort zone and shaped her newfound passion for combining creative thinking with technical design</li><li>&quot;Engineering at Disney World is incredibly unique. I took on obstacles that I would have never faced at any other company.&quot;</li></ul>",
      "image":"pics/julieta-moradei.jpg",
      "lat":28.4186,
      "lng":-81.5811,
      "icon":"mapMarker07.png",
      "country":"Florida, USA",
    },

    {
      "name":"Kinesha Goldson AMD&#39;11",
      "major":"Study abroad at the American University of Paris",
      "about":"<ul><li>Communication Studies Major</li><li>Developed a business plan and launched Cameo Macaron in 2013</li><li>&quot;Northeastern believed in me and gave me the opportunity to find the perfect fit by way of experiential education, and the skills and lessons I apply most as a graduate, like public speaking and winning the respect of my peers, are ones I gained in leadership positions with student groups.&quot;</li></ul>",
      "image":"pics/kinesha-goldson.jpg",
      "lat":48.8567,
      "lng":2.3508,
      "icon":"mapMarker07.png",
      "country":"France",
    },
//--new---
    {
      "name":"Nicholas Braica AMD&#39;13",
      "major":"Dialogue of Civilizations in Australia",
      "about":"<ul><li>Graphic Design and Interactive Media Major</li><li>Discussed mental health issues with lec­turers from Swin­burne Uni­ver­sity in Mel­bourne</li><li>Made 10 site visits, including trips to the Cancer Council of Vic­toria and an Abo­rig­inal Health Col­lege on tribal land</li></ul>",
      "image":"pics/nicholas-braica.jpg",
      "lat":-37.822149,
      "lng":145.0367723,
      "icon":"mapMarker07.png",
      "country":"Australia",
    },
    {
      "name":"Jessica Cokins SSH&#39;16",
      "major":"N.U.in in Australia",
      "about":"<ul><li>English Major</li><li>Spent first semester of college abroad in Australia</li><li>&quot;I was ner­vous at first, but North­eastern hosted a pre-​​departure ori­en­ta­tion that helped me adapt to col­lege life and living in a new cul­ture&quot;</li></ul>",
      "image":"pics/jessica-cokin.jpg",
      "lat":-30.8136,
      "lng":140.9631,
      "icon":"mapMarker07.png",
      "country":"Australia",
    },
    {
      "name":"Jay­lene Ollivierre PhD Candidate",
      "major":"Fellowship to study at the Uni­ver­sity of Wol­lon­gong, Australia",
      "about":"<ul><li>Will travel abroad to study a protein called UmuD</li><li>Ollivierre will use a tech­nique called native mass spec­trom­etry to study how UmuD inter­acts with the pro­tein com­po­nents of a cel­lular machine called DNA Pol III, which is respon­sible for DNA repli­ca­tion</li><li>&quot;A big part of the pro­gram is to expose stu­dents to sci­ence policy, infra­struc­ture and cul­ture while forming col­lab­o­ra­tions that will help us through grad school and beyond&quot;</li></ul>",
      "image":"pics/jaylene-ollivierre.jpg",
      "lat":-34.4054039,
      "lng":150.8762413,
      "icon":"mapMarker07.png",
      "country":"Australia",
    },

    {
      "name":"Dan Marsden S&#39;13",
      "major":"Dialogue of Civilizations, South Africa",
      "about":"<ul><li>Biochem Major</li><li>While on Dialogue, the rate of fetal alcohol syndrome in the region caught his eye, and he now has a fullbright grant to study it</li><li>&quot;North­eastern showed me the value of cre­ating knowl­edge, which is what I’m going to South Africa to do.&quot;</li></ul>",
      "image":"pics/dan-marsden.jpg",
      "lat":-30.0000,
      "lng":25.0000,
      "icon":"mapMarker07.png",
      "country":"South Africa",
    },

    {
      "name":"Anna Linck SSH&#39;10",
      "major":"Co-op at El Hogar Refugio Niños de Jesús, Argentina",
      "about":"<ul><li>Human Services and International Affairs Major</li><li>Taught English and photography to children in a foster home</li><li>&quot;This was such a rewarding expe­ri­ence. Seeing the chil­dren through the whole process was amazing&quot;</li></ul>",
      "image":"pics/anna-linck.jpg",
      "lat":-34.6000,
      "lng":-58.3833,
      "icon":"mapMarker07.png",
      "country":"Argentina",
    },
    {
      "name":"Ben Kneppers E&#39;10",
      "major":"Created a business, Chile",
      "about":"<ul><li>Mechanical Engineering Major</li><li>Founded Bureo Skate­boards, which aims to reduce the plastic pol­lu­tion along Chile’s coast­line and in its com­mu­ni­ties by molding it into skateboards.</li><li>&quot;I got to walk out of North­eastern with an incred­ible resume and worldly expe­ri­ences that let me find what my deeper pas­sions were&quot;</li></ul>",
      "image":"pics/ben-kneppers.jpg",
      "lat":-33.4333,
      "lng":-70.6667,
      "icon":"mapMarker07.png",
      "country":"Chile",
    },
    {
      "name":"Ashley Cavignano BHS&#39;16",
      "major":"Co-op in Himalayan villages, Nepal",
      "about":"<ul><li>Nursing Major</li><li>Prepared for and pro­vided care in Nepal with Himalayan HealthCare—a non­profit that delivers care and edu­ca­tion to poor vil­lagers in the moun­tains of Nepal.</li><li>&quot;It was a really good expe­ri­ence for me to see the best care in the world and then be in a remote place where I relied on my own assess­ment skills.&quot;</li></ul>",
      "image":"pics/ashley-cavignano.jpg",
      "lat":27.9881,
      "lng":86.9253,
      "icon":"mapMarker07.png",
      "country":"Nepal",
    },

    {
      "name":"Sarah Lombardo SSH&#39;15",
      "major":"Co-op in Bosnia",
      "about":"<ul><li>International Affairs Major</li><li>Created a document which mapped out different issues in the next year which the Office of the High Representative would be required to address</li><li>&quot;I’m a little unsure about the future, like everyone, but I really think I focused myself during my co-op in Bosnia.&quot;</li></ul>",
      "image":"pics/sarahlombardo.jpg",
      "lat":44.0000,
      "lng":18.0000,
      "icon":"mapMarker07.png",
      "country":"Bosnia",
    },
    {
      "name":"Gabby Jockers B&#39;13",
      "major":"Co-op in Beirut, Lebanon",
      "about":"<ul><li>Entrepreneurship Major</li><li>Managed the social media and online presence of a company called The Alleyway</li><li>Wrote a <a href='https://slowmotiondoesntexist.wordpress.com/category/beirut/'>blog about her experience</a></li></ul>",
      "image":"pics/gabby-jockers.jpg",
      "lat":33.8869,
      "lng":35.5131,
      "icon":"mapMarker07.png",
      "country":"Lebanon",
    },
    {
      "name":"Audrey Pence SSH&#39;17",
      "major":"Co-op at the Fuller Project for International Reporting, Turkey",
      "about":"<ul><li>International Affairs Major</li><li>Wrote a number of stories, covering issues ranging from bride kidnapping to the 100th anniversary of the Armenian Genocide</li><li>&quot; I went out into the streets with a Turkish co-worker and got quotes from people for a story on the Armenian Genocide, and we got that published on CNN International’s website. That was one I got a shared byline on, which was really exciting.&quot;</li></ul>",
      "image":"pics/audrey-pence.jpg",
      "lat":39.9167,
      "lng":32.8333,
      "icon":"mapMarker07.png",
      "country":"Turkey",
    },

    {
      "name":"Ryan Chaffin SSH&#39;18",
      "major":"Co-op at the Hashemite Fund for Development of the Jordan Badia, Jordan",
      "about":"<ul><li>International Affairs and Political Science Major</li><li>Wrote business proposals and met dignitaries from all around the Badia</li><li>&quot;I have learned how to conduct business meetings from being an assistant to my manager, which is particularly useful in improving my Arabic immensely&quot;</li></ul>",
      "image":"pics/ryan-chaffin.jpg",
      "lat":31.9500,
      "lng":35.9333,
      "icon":"mapMarker07.png",
      "country":"Jordan",
    },
    {
      "name":"Gail Batutis SSH&#39;16",
      "major":"Co-op at Aakar Innovations, India",
      "about":"<ul><li>Political Science and Business Administration Major</li><li>Was Northeastern’s first Social Enterprise Institute Global Fellow</li><li>Created micro-enterprises where women make sanitary pads, bringing education, livelihoods, and health solutions to the rural poor</li></ul>",
      "image":"pics/gail-batutis.jpg",
      "lat":28.6139,
      "lng":77.2090,
      "icon":"mapMarker07.png",
      "country":"India",
    },
    {
      "name":"Eileen Sheehan S&#39;16",
      "major":"Co-op at Palmer Station, Antarctica",
      "about":"<ul><li>Biochemistry Major</li><li>Studied how the warming of Antarctic waters affected the devel­op­ment of these dif­ferent fish species.</li><li>&quot;Being down here offered me unique insight into the full-​​picture of how sci­ence works: from begin­ning with the very large and then ending with the tiniest of mol­e­cules, atoms, and atomic par­ti­cles.&quot;</li></ul>",
      "image":"pics/eileen-sheehan.jpg",
      "lat":-60.0000,
      "lng":0.0000,
      "icon":"mapMarker07.png",
      "country":"Antarctica",
    },



]};




/*------------------make the map with markers and stuff----------------*/


  var origin = {lat: 21.969348, lng: 0.546875};
  var marker1 ={lat: 42.339807, lng: -71.089172}

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: origin,
    mapTypeControlOptions:{
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, mapStyleId]
    }
  });

  map.mapTypes.set(mapStyleId, mapStyle);
  map.setMapTypeId(mapStyleId);





var markers=[];
var contentString=[];
var infowindow=[]
for (var i = 0; i < data.students.length; i++) {

    markers[i] = new google.maps.Marker({
    position: {lat: data.students[i].lat, lng: data.students[i].lng},
    map:map,
    title: data.students[i].country,
    icon: data.students[i].icon,
    id: i
  });

   var infowindow = new google.maps.InfoWindow();
 /*  markers[i].html = '<img src="'+data.students[i].image+'" width="250px" class=fouroneone>'+
                    '<div class="fouroneone">'+
                    '<h1>'+data.students[i].name+'</h1>'+
                    '<h2>'+data.students[i].major+'</h2>'+
                    '<p>'+data.students[i].about+'</p>'+
                    '</div>';
*/

  markers[i].html = '<table><tr><td>' +
                    '<img src="' +
                    data.students[i].image +
                    '" width="250px"></td><td>' +
                    '<h1>' + data.students[i].name+'</h1>' +
                    '<h2>'+data.students[i].major+'</h2>'+
                    '<p>'+data.students[i].about+'</p>'+
                    '</td></tr></table>';

  markers[i].addListener('click', function(){
    infowindow.setContent(this.html);
    infowindow.open(map, this);
  });



};





}/*end curly brace for the init map*/
