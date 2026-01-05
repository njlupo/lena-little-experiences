import { Sparkles, Palette, FlaskConical, Crown, Users, Clock, Utensils, Rocket, Shield, PawPrint, Drama, Sun, Baby, Wand2 } from 'lucide-react';

export const packages = [
  { 
    id: 1, 
    name: "Basic Experience", 
    price: 275, 
    time: "60 minutes", 
    kids: 8, 
    activities: 3, 
    accent: "#b2d3c2", 
    popular: false,
    includes: ["All materials provided", "Setup + cleanup of activities", "1 theme of your choice", "Professional party host"]
  },
  { 
    id: 2, 
    name: "Signature Experience", 
    price: 375, 
    time: "90 minutes", 
    kids: 12, 
    activities: 4, 
    accent: "#e599a7", 
    popular: true,
    includes: ["Keepsake craft for each child", "Music + movement game", "Full activity management", "1 theme of your choice", "All materials & cleanup"]
  },
  { 
    id: 3, 
    name: "Deluxe Experience", 
    price: 475, 
    time: "2 hours", 
    kids: 15, 
    activities: 5, 
    accent: "#fbbf24", 
    popular: false,
    includes: ["Custom theme touches (name, age)", "Mini finale (dance party/showcase)", "Extra helper included", "5 guided activities", "Everything provided & cleaned"]
  }
];

export const customTheme = {
  id: 'custom',
  title: 'Create Your Own Custom Theme',
  shortTitle: 'Custom Theme',
  icon: Wand2,
  slogan: 'Your unique vision brought to life',
  desc: 'We\'ll bring your child\'s dream party to life with completely customized activities, decorations, and experiences!',
  additionalCost: 100,
  features: [
    'Personalized theme consultation',
    'Custom activities & crafts',
    'Themed decorations',
    'Unique experience design',
    'Your imagination brought to life',
    'Full customization'
  ],
  tags: ['Full Customization', 'Any Theme', 'Personal Consultation', 'Unique Activities'],
  homepageDescription: 'We\'ll bring your child\'s dream party to life with completely customized activities, decorations, and experiences!',
  formBannerText: 'Please describe your custom theme in the "Special Requests" section below, and we\'ll create a magical experience tailored to your vision!',
  formPlaceholder: "Please describe your custom theme idea in detail (e.g., 'Construction & Building', 'Disney Princess Tea Party')... Also include any allergies or special requirements.",
  activities: [
    'Personalized theme consultation',
    'Custom activities based on your theme',
    'Themed decorations',
    'Theme-specific crafts',
    'Interactive games',
    'Special touches'
  ]
};

export const themes = [
  { 
    id: 'artist', 
    title: "Little Artist Studio", 
    icon: Palette, 
    slogan: "Your home becomes an art studio", 
    desc: "Professional art experience with canvas paintings, texture art, and a mini art show finale where kids present to parents.",
    activities: ["Canvas paintings (kids choose colors + theme)", "Texture art (sponges, cotton balls, rollers)", "Sticker collage frames", "Mini art show at the end", "All supplies + cleanup included"]
  },
  { 
    id: 'science', 
    title: "Mini Scientist Lab", 
    icon: FlaskConical, 
    slogan: "Safe science kids can touch", 
    desc: "Hands-on experiments including color mixing, volcano cups, and slime making. Lab coats and certificates included!",
    activities: ["Color mixing experiments", "Volcano cups", "Slime or putty making", "Lab coat dress up", "Science certificates for all"]
  },
  { 
    id: 'unicorn', 
    title: "Magical Unicorn & Fairy Party", 
    icon: Sparkles, 
    slogan: "A magical world built in your home", 
    desc: "Enter a world of enchantment with wand decorating, fairy dust potions, and imagination-led storytelling.",
    activities: ["Wand decorating", "Fairy dust potion mixing", "Unicorn headband craft", "Story-led imagination game", "Magical keepsakes to take home"]
  },
  { 
    id: 'dino', 
    title: "Dino Discovery Party", 
    icon: PawPrint, 
    slogan: "Junior paleontologists on a mission", 
    desc: "Excavate fossils, create dino crafts, and go on a prehistoric adventure right from your living room!",
    activities: ["Dino dig excavation", "Fossil rubbing", "Build a dino craft", "Dino movement game and song", "Paleontologist certificates"]
  },
  { 
    id: 'chef', 
    title: "Little Chefs Party", 
    icon: Utensils, 
    slogan: "Hands-on cooking without the mess", 
    desc: "Culinary creativity for kids! Decorate treats, build snack mixes, and design personalized aprons.",
    activities: ["Decorate cupcakes or cookies", "Build your own snack mix", "Apron decorating", "Recipe card keepsake", "All ingredients provided"]
  },
  { 
    id: 'space', 
    title: "Space Explorer Mission", 
    icon: Rocket, 
    slogan: "Blast off from home", 
    desc: "Launch into adventure with rocket building, galaxy jars, and astronaut training challenges!",
    activities: ["Rocket building", "Galaxy jar making", "Astronaut training obstacle course", "Planet matching game", "Space explorer badges"]
  },
  { 
    id: 'superhero', 
    title: "Superhero Training Camp", 
    icon: Shield, 
    slogan: "Every child becomes the hero", 
    desc: "Transform into superheroes with cape decorating, strength challenges, and team rescue missions!",
    activities: ["Mask or cape decorating", "Hero strength challenges", "Team rescue game", "Hero affirmation moment", "Superhero certificates"]
  },
  { 
    id: 'sensory', 
    title: "Sensory Play Party", 
    icon: Baby, 
    slogan: "Engaging play right at home (ages 3-5)", 
    desc: "Perfect for younger children with sensory bins, playdough stations, and calm movement activities.",
    activities: ["Sensory bins (rice, beads, kinetic sand)", "Playdough stations", "Water bead scooping", "Calm movement games", "Age-appropriate fun"]
  },
  { 
    id: 'royal', 
    title: "Princess & Royal Ball", 
    icon: Crown, 
    slogan: "A royal celebration led by Lena", 
    desc: "Crown decorating, royal etiquette games, princess crafts, and a dance party finale fit for royalty!",
    activities: ["Crown decorating", "Royal etiquette game (bows, waves)", "Princess or prince craft", "Dance party finale", "Royal keepsakes"]
  },
  { 
    id: 'animal', 
    title: "Animal Adventure Party", 
    icon: PawPrint, 
    slogan: "Explore animals around the world", 
    desc: "Safari adventure with animal mask making, habitat games, and movement relays!",
    activities: ["Animal mask making", "Habitat matching game", "Animal movement relay", "Stuffed animal vet or safari game", "Explorer badges"]
  },
  { 
    id: 'drama', 
    title: "Dress-up & Drama Party", 
    icon: Drama, 
    slogan: "Create characters and stories", 
    desc: "Unleash creativity with costume stations, character crafts, and group performances!",
    activities: ["Costume station", "Create a character craft", "Acting out short stories", "Group performance (optional)", "Drama keepsakes"]
  },
  { 
    id: 'summer', 
    title: "Summer Fun Party", 
    icon: Sun, 
    slogan: "Outdoor fun without planning stress", 
    desc: "Seasonal favorite with water games, chalk art, sports challenges, and refreshing activities!",
    activities: ["Water games or bubble stations", "Chalk art", "Mini sports challenges", "Popsicle craft", "Summer memories"]
  }
];

export const timeSlots = [
  "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"
];


export const aboutMe = {
  name: "Elena",
  title: "Founder & Lead Experience Architect", // Changed from Creator to Architect
  bio: "I believe every childhood milestone deserves both a dreamer's imagination and an engineer’s precision. With a background in Biomedical Engineering and Business Analytics, I’ve traded lab reports for lesson plans—combining data-driven organization with a lifelong passion for childcare to create 'Little Experiences' that are as seamless for parents as they are magical for kids.",
  story: [
    "You might be wondering how my academic background led me to this work. After completing my master’s degree last May, I spent the summer nannying while exploring opportunities in my field. During that time, I realized that my passion for working with children had only continued to grow.",
    "I have three younger siblings whom I helped care for while growing up, and I also spent many years working as a camp counselor—so being around children has always been a meaningful part of my life.",
    "Through these experiences, I developed the vision of creating engaging and enriching experiences for children while offering parents peace of mind. My goal is to provide thoughtfully planned activities that eliminate the stress of setup, organization, and cleanup, allowing families to simply enjoy the moment together."
  ],
  qualifications: [
    "M.S. in Business Analytics",
    "B.S. in Biomedical Engineering",
    "Strong background in child development and activity planning",
  ],
  approach: [
    { title: "Precision Planning", desc: "Every minute is mapped out to ensure engagement never dips and energy stays high." },
    { title: "Safe by Design", desc: "My engineering background means safety isn't an afterthought—it's built into every activity." },
    { title: "Zero-Stress Promise", desc: "I am the first to arrive and the last to leave. You don't lift a finger—or a vacuum." }
  ],
  image:'./photos/AboutMePhotoLenaLittleExperiences.jpeg',
};



export const contactInfo = {
  email: "lenalittleexperiences@gmail.com",
  phone: "617-820-9611",
  instagram: "@lenalittleexperiences",
  tiktok: "@lenalittleexperiences",
  instagramUrl: "https://www.instagram.com/lenalittleexperiences?igsh=MWh0aGRrOTVjbGVlMg%3D%3D&utm_source=qr",
  tiktokUrl: "https://www.tiktok.com/@lenalittleexperiences?_r=1&_t=ZP-92p2B25f8d5"
};

