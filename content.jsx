const moviesData = [
    {
        title: "Avatar: The Way of the Water",
        releaseYear: "2022",
        content: "Avatar: The Way of Water (3 hr 10 min): Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home. Action, Adventure, Fantasy film released in 2022. Directed by James Cameron Written by James Cameron, Rick Jaffa and Amanda Silver. Starring Sam Worthington, Zoe Saldana and Sigourney Weaver. Rated 7.6 on IMDB"
    },
    {
        title: "The Fabelmans",
        releaseYear: "2022",
        content: "The Fabelmans (2 hr 31 min): Growing up in post-World War II era Arizona, young Sammy Fabelman aspires to become a filmmaker as he reaches adolescence, but soon discovers a shattering family secret and explores how the power of films can help him see the truth. Drama film released in 2022. Directed by Steven Spielberg. Written by Steven Spielberg and Tony Kushner. Starring Michelle Williams, Gabriel LaBelle & Paul Dano. Rated 7.5 on IMDB"
    },
    {
        title: "Troll",
        releaseYear: "2022",
        content: "Troll (1 hr 41 min): Deep in the Dovre mountain, something gigantic wakes up after a thousand years in captivity. The creature destroys everything in its path and quickly approaches Oslo. Norwegian action, adventure, drama film released in 2022. Directed by Roar Uthaug. Written by Espen Aukan and Roar Uthaug. Starring Ine Marie Wilmann, Kim Falck and Mads Sjøgård Pettersen. Rated 5.8 on IMDB"
    },
    {
        title: "Everything Everywhere All at Once",
        releaseYear: "2022",
        content: "Everything Everywhere All at Once (2 hr 19 min): A middle-aged Chinese immigrant is swept up into an insane adventure in which she alone can save existence by exploring other universes and connecting with the lives she could have led. Action, Adventure, Comedy film released in 2022. Directed by Daniel Kwan and Daniel Scheinert. Written by Daniel Kwan and Daniel Scheinert. Starring: Michelle Yeoh, Stephanie Hsu and Jamie Lee Curtis. Rated 7.8 on IMDB"
    },
    {
        title: "Oppenheimer",
        releaseYear: "2023",
        content: "Oppenheimer (3 hr): The story of American scientist, J. Robert Oppenheimer, and his role in the development of the atomic bomb. Biography, Drama, History film released in 2023. Directed by Christopher Nolan. Written by Christopher Nolan, Kai Bird and Martin Sherwin. Starring Cillian Murphy, Emily Blunt and Matt Damon. Rated 8.5 on IMDB"
    },
    {
        title: "Barbie",
        releaseYear: "2023",
        content: "Barbie (1 hr 54 min): Barbie suffers a crisis that leads her to question her world and her existence. Adventure, Comedy, Fantasy film released in 2023. Directed by Greta Gerwig. Written by Greta Gerwig and Noah Baumbach. Starring Margot Robbie, Ryan Gosling and Issa Rae. Rated 7.0 on IMDB"
    },
    {
        title: "Spider-Man: Across the Spider-Verse",
        releaseYear: "2023",
        content: "Spider-Man: Across the Spider-Verse (2 hr 20 min): Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero. Animation, Action, Adventure film released in 2023. Directed by Joaquim Dos Santos, Kemp Powers an Justin K. Thompson. Written by Phil Lord, Christopher Miller and Dave Callaham. Starring: Shameik Moore, Hailee Steinfeld and Brian Tyree Henry. Rated 8.7 on IMDB"
    },
    {
        title: "Pathaan",
        releaseYear: "2023",
        content: "Pathaan (2 hr 26 min): An Indian agent races against a doomsday clock as a ruthless mercenary, with a bitter vendetta, mounts an apocalyptic attack against the country. Bollywood action, adventure, triller film released in 2023. Directed by Siddharth Anand. Written by Shridhar Raghavan, Abbas Tyrewala and Siddharth Anand. Starring Shah Rukh Khan, Deepika Padukone and John Abraham. Rated 5.9 on IMDB"
    },
    {
        title: "RRR",
        releaseYear: "2022",
        content: "RRR (3 hr 7 min): A fictitious story about two legendary revolutionaries and their journey away from home before they started fighting for their country in the 1920s. South Indian action, drama film released in 2022. Directed by S. S. Rajamouli. Written by Vijayendra Prasad, S. S. Rajamouli and Sai Madhav Burra. Starring N. T. Rama Rao Jr., Ram Charan and Ajay Devgn. Rated 7.8 on IMDB"   
    },
    {
        title: "Elemental",
        releaseYear: "2023",
        content: "Elemental (1h 41m): 'Elemental' is an animated adventure comedy that follows Ember and Wade in a city where fire, water, land, and air residents live together. In a city where fire, water, land, and air residents live together. Ember is a fiery young woman and Wafe is a go-with-the-flow guy; both discover something elemental: how much they actually have in common. The director of Elemental is Peter Sohn, and the film stars Leah Lewis, Mamoudou Athie and Ronnie Del Carmen. Rated 7.0 on IMDB"
    },
    {
        title: "The Menu",
        releaseYear: "2022",
        content: "The Menu (1 hr 47m): is a comedy thriller about a young couple traveling to a remote island to eat at an exclusive restaurant where the chef has prepared a lavish menu with shocking surprises. They anticipate a remarkable dining experience. However, unknown to the guests, Chef Julian, known for pushing culinary boundaries, is set to reveal his most audacious creation yet. The question arises: is the sophisticated clientele prepared for Julian's radical innovation? The director of 'The Menu' is Mark Mylod, and the film stars Ralph Fiennes, Anya Taylor-Joy and Nicholas Hoult. Rated 7.2 on IMDB."
    },
    {
        title: "Top Gun: Maverick",
        releaseYear: "2022",
        content: "Top Gun: Maverick (2 hr 10m): It's about Pete 'Maverick' Mitchell, a top naval aviator who served in the Navy for over three decades and is now a test pilot. He is determined to keep pushing the limits of flying and avoid promotions that would take him away from the cockpit. Maverick is currently training a group of graduates for a unique mission but must also confront his past and fears. Ultimately, the mission will require those who choose to fly it to make the ultimate sacrifice. Joseph Kosinski directed Top Gun: Maverick, which stars Tom Cruise, Jennifer Connelly, and Miles Teller. Rated 8.3 on IMDB."
    },{
        title: "M3GAN",
        releaseYear: "2022",
        content: "M3GAN (1h 42m): The horror/sci-fi movie 'M3GAN' deals with Gemma, a skilled roboticist who designs a life-like doll named M3GAN that can play, teach, and protect children. She gifts a prototype to her eight-year-old niece. The doll begins to take on a life of its own, resulting in unforeseen consequences. Gerard Johnstone directed M3GAN, which stars Allison Williams, Violet McGraw and Ronny Chieng. Rated 6.4 on IMDB."
    },
    {
        title: "Glass Onion",
        releaseYear: "2022",
        content: "Glass Onion (2h 19m): In the comedic film 'Glass Onion', five long-time friends get invited to the Greek island home of billionaire Miles Bron. All five know Bron from way back and owe him their current wealth, fame, and careers. The main event is a murder-weekend game with Bron to be the victim. In reality, they all have reasons to kill him. Also invited is Benoit Blanc, the world's greatest detective. Rian Johnson directed Glass Onion and it stars Daniel Craig, Edward Norton and Kate Hudson. Rated 7.1 on IMDB."
    },
    {
        title: "The Super Mario Bros. Movie",
        releaseYear: "2023",
        content: "The Super Mario Bros. Movie (1h 32m): While working underground to fix a water main, Brooklyn plumbers and brothers Mario and Luigi are transported through a mysterious pipe to a magical new world. But when the siblings are separated, an epic adventure begins to save a captured princess. The Super Mario Bros. Movie is an animated adventure comedy directed by Aaron Horvath, Michael Jelenic and Pierre Leduc. It's voiced by the actors Chris Pratt, Anya Taylor-Joy and Charlie Day. Rated 7.1 on IMDB."
    },
    {
        title: "A Haunting in Venice",
        releaseYear: "2023",
        content: "A Haunting in Venice (1h 43m): a post-WWII crime drama set in Venice, a retired detective attends a seance. Following a guest's murder, he's compelled to solve the mystery. The film's director is Kenneth Branagh, and stars Kenneth Branagh, Michelle Yeoh and Jamie Dornan. Rated 6.8 on IMDB."
    },
    {
        title: "Blue Beetle",
        releaseYear: "2023",
        content: "Blue Beetle (2h 7m): In The action-adventure film 'Blue Beetle', Jaime Reyes suddenly finds himself possessing an ancient relic of alien biotechnology called the Scarab. When the Scarab chooses Jaime to be its symbiotic host, he's bestowed with an incredible suit of armor capable of extraordinary and unpredictable powers, forever changing his destiny as he becomes the superhero Blue Beetle. The film stars Xolo Maridueña, Bruna Marquezine and Becky G, and Angel Manuel Soto is the director. Rated 6.7 on IMDB."
    },
    {
        title: "Expend4bles",
        releaseYear: "2023",
        content: "Expend4bles (1h 43m): It's an action movie featuring an elite team of mercenaries known as 'The Expendables.' They are the world's last resort for missions deemed too perilous for others. With a formidable arsenal and unmatched combat skills, they tackle high-stakes assignments, displaying their courage and unity. Directed by Scott Waugh, Expend4bles is a thrilling ride, starring Jason Statham, 50 Cent, and Megan Fox. Rated 5.0 on IMDB."
    },
    {
        title: "Asteroid City",
        releaseYear: "2023",
        content: "Asteroid City (1h 45m): Chronicling the journey of a writer's renowned fictional tale, 'Asteroid City' unveils the transformation of a mourning father. He takes his technology-fixated family to the quaint Asteroid City for a junior stargazing competition. But there, his perspective on life is irrevocably changed. Wes Anderson directed the comedic drama Asteroid City, starring Jason Schwartzman, Scarlett Johansson, and Tom Hanks."
    },{
        title: "Atonement",
        releaseYear: "2007",
        content: "Atonement (2h 3m): When Briony Tallis (Saoirse Ronan), thirteen-years-old and an aspiring writer, sees her older sister Cecilia (Keira Knightley) and Robbie Turner (James McAvoy) at the fountain in front of the family estate, she misinterprets what is happening, thus setting into motion a series of misunderstandings and a childish pique that will have lasting repercussions for all of them. Robbie is the son of a family servant toward whom the family has always been kind. They paid for his time at Cambridge and now he plans on going to medical school. After the fountain incident, Briony reads a letter intended for Cecilia and concludes that Robbie is a deviant. When her cousin Lola (Juno Temple) is raped, she tells the Police that it was Robbie she saw committing the deed. Rated 7.8 on IMDB."
    }
];

export default moviesData;