import portfolio from "../data/portfolio";
import PortfolioItem from "./portfolio_item";
import Title from "./Title";

function Portfolio() {
  return (
    <div id="projects" className="space-y-6 scroll-mt-28">
      <Title>Projects</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {portfolio.map((project, index) => (
          <PortfolioItem
            key={index}
            title={project.title}
            about={project.about}
            stack={project.stack}
            link={project.link}
            gitlink={project.gitlink}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;