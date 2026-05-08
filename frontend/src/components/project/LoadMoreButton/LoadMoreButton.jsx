import Styles from "./LoadMore.module.css";

const LoadMoreButton = ({
  visibleProjects,
  totalProjects,
  setVisibleProjects,
}) => {
  const handleProjects = () => {
    setVisibleProjects(
      visibleProjects >= totalProjects ? 3 : visibleProjects + 3,
    );
  };

  return (
    <div className={Styles.load_more}>
      <button onClick={handleProjects}>
        {visibleProjects >= totalProjects ? "Show Less" : "Load More"}
      </button>
    </div>
  );
};

export default LoadMoreButton;
