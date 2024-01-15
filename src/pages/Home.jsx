import React from "react";
import HomeCard from "../components/HomeCard";
import about from "../../public/about.jpg";
import events from "../../public/events.jpg";
import team from "../../public/team.jpg";

const Home = () => {
  const content = [
    {
      title: "Events",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, hic voluptatibus! Aut, sunt laborum ipsum asperiores, explicabo dolores magni neque necessitatibus quis ut tempora repellat modi. Nobis velit nemo itaque.",
      link: "events",
      src: events,
    },
    {
      title: "About",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, hic voluptatibus! Aut, sunt laborum ipsum asperiores, explicabo dolores magni neque necessitatibus quis ut tempora repellat modi. Nobis velit nemo itaque.",
      link: "about",
      src: about,
    },

    {
      title: "Team",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, hic voluptatibus! Aut, sunt laborum ipsum asperiores, explicabo dolores magni neque necessitatibus quis ut tempora repellat modi. Nobis velit nemo itaque.",
      link: "team",
      src: team,
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center">
      {content.map((item, index) => (
        <HomeCard
          key={index}
          index={index}
          title={item.title}
          description={item.description}
          link={item.link}
          src={item.src}
        />
      ))}
    </div>
  );
};

export default Home;
