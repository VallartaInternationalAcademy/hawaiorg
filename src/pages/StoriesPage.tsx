import React from "react";
import HeroPage from "../components/Hero/HeroPage";
import storiesImage from "../assets/images/hawai/Stories2.png";
import BlogCard from "../components/cards/BlogCard";
import useScrollToTop from "../hooks/useScrollToTop";
import { getHistories, HistoryType } from "../data/Histories";

const histories: HistoryType[] = getHistories();

const StoriesPage = () => {
  useScrollToTop();
  const truncateText = (texto: string) => {
    const maxLength = 100;
    if (texto.length > maxLength) {
      return texto.substring(0, maxLength) + "...";
    }
    return texto;
  };
  return (
    <div>
      <HeroPage
        imagen={storiesImage}
        page="STORIES OF TRANSFORMATION"
        description="Discover inspiring stories of change and resilience from individuals and households supported by Corazon Hawaii."
        Breadcrumb={[{ link: "/", nombre: "Home" }]}
      />

      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="section-title mb-4 pb-2">
                <h4 className="title">
                  EXPLORE INSPIRING{" "}
                  <span className="text-primary fw-bold">STORIES</span>{" "}
                </h4>
              </div>
            </div>
            {histories.map((s, index) => (
              <BlogCard
                HistoryLink={`/story/${s.id}`}
                descripcion={truncateText(s.texto)}
                imagen={s.image}
                nombre={s.title}
                titulo={s.title}
                key={index}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StoriesPage;
