import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const topics = [
  {
    id: 1,
    slug: "topic-1",
    title: "Nature",
  },
  {
    id: 2,
    slug: "topic-2",
    title: "Travel",
  },
  {
    id: 3,
    slug: "topic-3",
    title: "People",
  },
];

const TopicList = ( {topics = [], onTopicSelect}) => {
  
  
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => (
        <TopicListItem 
          key={topic.id} 
          topic={topic} 
          onClick={() => onTopicSelect(topic.slug)} // Call onTopicSelect when clicked
        />
      ))}
    </div>
  );
};

export default TopicList;
