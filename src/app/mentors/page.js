// app/mentors/page.js
import Image from "next/image";

const mentors = [
  {
    name: "Ipshita Rawat",
    photo: "/ipshita_m.jpg",
    title: "Machine Learning",
    bio: "Machine Learning expert with a strong foundation in data science, statistical modeling, and algorithm development. Experienced in building intelligent systems using Python, TensorFlow, and real-world data.",
    email: "rawatipshita07@gmail.com",
  },
  {
    name: "Umang Saini",
    photo: "/umang_m.jpg",
    title: "UI/UX",
    bio: "UI/UX expert specializing in crafting intuitive, user-centric digital experiences with a focus on usability and design aesthetics. Proficient in tools like Figma, Adobe XD, and responsive design principles.",
    email: "sainiumang505@gmail.com",
  },
  {
    name: "Krish Gupta",
    photo: "/krish_m.jpg",
    title: "Cybersecurity",
    bio: "Cybersecurity expert skilled in safeguarding digital infrastructure through risk assessment, threat mitigation, and secure architecture design. Proficient in ethical hacking, network security, and incident response.",
    email: "krishgupta2130@gmail.com",
  },
  {
    name: "Garv Kohli",
    photo: "/kohli_m.jpg",
    title: "Video Editing/VFX",
    bio: "Video Editing/VFX expert with a keen eye for storytelling, visual composition, and cinematic effects. Proficient in Adobe After Effects, Premiere Pro, and advanced post-production techniques.",
    email: "garv@example.com",
  },
  {
    name: "Karuna",
    photo: "/kd_m.jpg",
    title: "Content Creation",
    bio: "Content creation expert with a flair for crafting engaging, audience-driven narratives across digital platforms. Skilled in writing, scripting, and multimedia production for impactful brand storytelling.",
    email: "karuna@example.com",
  },
  {
    name: "Rachit Kaushal",
    photo: "/rachit_m.png",
    title: "App Development",
    bio: "Product Manager with a strategic mindset and a passion for building user-focused solutions from concept to launch. Experienced in cross-functional collaboration, market analysis, and agile methodologies.",
    email: "rachit@example.com",
  },
];

export default function MentorListPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Mentors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mentors.map((mentor, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <div className="w-full h-90 relative mb-4">
              <Image
                src={mentor.photo}
                alt={mentor.name}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>
            <h2 className="text-xl font-semibold">{mentor.name}</h2>
            <h3 className="text-sm text-gray-500">{mentor.title}</h3>
            <p className="mt-2 text-gray-600">{mentor.bio}</p>
            <a
              href={`mailto:${mentor.email}?subject=Mentorship Inquiry&body=Hi ${mentor.name}, I would like to learn tech!. Google meet : https://meet.google.com/zrf-mdiv-vmc`}
              className="block"
            >
              <button className="mt-4 w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white font-medium py-2 rounded-xl shadow-md shadow-purple-900 hover:shadow-xl hover:scale-105 transition duration-300">
                Study {mentor.title}
              </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
