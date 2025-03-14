import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: 1,
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = ({ topic, onClick }) => {
  return (
    <div className="topic-list__item" onClick={() => onClick(topic.slug)}>
      {topic.label} 
    </div>
  );
};

export default TopicListItem;
